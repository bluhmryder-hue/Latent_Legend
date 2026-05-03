import path from "path"
import { getRegistriesIndex } from "@/src/registry/api"
import { BUILTIN_REGISTRIES } from "@/src/registry/constants"
import { resolveRegistryNamespaces } from "@/src/registry/namespaces"
import { rawConfigSchema } from "@/src/registry/schema"
import { Config } from "@/src/utils/get-config"
import { spinner } from "@/src/utils/spinner"
import fs from "fs-extra"

export async function ensureRegistriesInConfig(
  components: string[],
  config: Config,
  options: {
    silent?: boolean
    writeFile?: boolean
  } = {}
) {
  options = {
    silent: false,
    writeFile: true,
    ...options,
  }

  let updatedConfig = { ...config }

  // Use resolveRegistryNamespaces to discover all namespaces including dependencies.
  const registryNames = await resolveRegistryNamespaces(components, updatedConfig)

  const missingRegistries = registryNames.filter(
    (registry) =>
      !updatedConfig.registries?.[registry] &&
      !Object.keys(BUILTIN_REGISTRIES).includes(registry)
  )

  if (missingRegistries.length > 0) {
    // We'll fail silently if we can't fetch the registry index.
    // The error handling by caller will guide user to add the missing registries.
    const registryIndex = await getRegistriesIndex({
      useCache: process.env.NODE_ENV !== "development",
    })

    if (registryIndex) {
      const foundRegistries: Record<string, string> = {}
      for (const registry of missingRegistries) {
        if (registryIndex[registry]) {
          foundRegistries[registry] = registryIndex[registry]
        }
      }

      if (Object.keys(foundRegistries).length > 0) {
        updatedConfig = {
          ...updatedConfig,
          registries: {
            ...updatedConfig.registries,
            ...foundRegistries,
          },
        }
      }
    }
  }

  // Filter out built-in registries before returning/writing.
  updatedConfig.registries = filterBuiltinRegistries(updatedConfig.registries)

  if (options.writeFile) {
    await writeConfig(updatedConfig, options.silent)
  }

  return {
    config: updatedConfig,
    newRegistries: Object.keys(updatedConfig.registries || {}).filter(
      (key) => !config.registries?.[key]
    ),
  }
}

function filterBuiltinRegistries(registries: Config["registries"]) {
  return Object.fromEntries(
    Object.entries(registries || {}).filter(
      ([key]) => !Object.keys(BUILTIN_REGISTRIES).includes(key)
    )
  )
}

async function writeConfig(config: Config, silent: boolean = false) {
  const { resolvedPaths, ...configWithoutResolvedPaths } = config
  const configSpinner = spinner("Updating components.json.", {
    silent,
  }).start()
  const updatedConfig = rawConfigSchema.parse(configWithoutResolvedPaths)
  await fs.writeFile(
    path.resolve(config.resolvedPaths.cwd, "components.json"),
    JSON.stringify(updatedConfig, null, 2) + "\n",
    "utf-8"
  )
  configSpinner.succeed()
}
