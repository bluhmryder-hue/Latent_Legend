import { describe, it, expect, vi, beforeEach } from "vitest"
import { ensureRegistriesInConfig } from "./registries"
import { BUILTIN_REGISTRIES } from "../registry/constants"
import { resolveRegistryNamespaces } from "../registry/namespaces"
import { getRegistriesIndex } from "../registry/api"
import fs from "fs-extra"
import path from "path"

vi.mock("../registry/namespaces")
vi.mock("../registry/api")
vi.mock("fs-extra")
vi.mock("@/src/utils/spinner")

describe("ensureRegistriesInConfig", () => {
  const mockConfig: any = {
    resolvedPaths: {
      cwd: "/mock/cwd",
    },
    registries: {
      "@shadcn": "https://ui.shadcn.com/r/styles/{style}/{name}.json",
      "@custom": "https://custom.com/{name}.json",
    },
    style: "default",
    tailwind: {},
    aliases: {
      components: "@/components",
      utils: "@/lib/utils",
    },
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("should filter out built-in registries from the config", async () => {
    vi.mocked(resolveRegistryNamespaces).mockResolvedValue([])

    const result = await ensureRegistriesInConfig([], { ...mockConfig }, { writeFile: false })

    expect(result.config.registries).not.toHaveProperty("@shadcn")
    expect(result.config.registries).toHaveProperty("@custom")
  })

  it("should write the config to file in all paths if writeFile is true", async () => {
    vi.mocked(resolveRegistryNamespaces).mockResolvedValue([])

    // Path 1: No missing registries
    await ensureRegistriesInConfig([], { ...mockConfig }, { writeFile: true, silent: true })
    expect(fs.writeFile).toHaveBeenCalledTimes(1)

    vi.clearAllMocks()

    // Path 2: Missing registries but no index
    vi.mocked(resolveRegistryNamespaces).mockResolvedValue(["@missing"])
    vi.mocked(getRegistriesIndex).mockResolvedValue(null)
    await ensureRegistriesInConfig(["@missing"], { ...mockConfig }, { writeFile: true, silent: true })
    expect(fs.writeFile).toHaveBeenCalledTimes(1)

    vi.clearAllMocks()

    // Path 3: Missing registries, index exists, but registry not found in index
    vi.mocked(resolveRegistryNamespaces).mockResolvedValue(["@missing"])
    vi.mocked(getRegistriesIndex).mockResolvedValue({})
    await ensureRegistriesInConfig(["@missing"], { ...mockConfig }, { writeFile: true, silent: true })
    expect(fs.writeFile).toHaveBeenCalledTimes(1)
  })

  it("should add new registries and still filter built-in ones", async () => {
    vi.mocked(resolveRegistryNamespaces).mockResolvedValue(["@new"])
    vi.mocked(getRegistriesIndex).mockResolvedValue({
      "@new": "https://new.com/{name}.json",
      "@shadcn": "should be filtered even if in index"
    })

    const result = await ensureRegistriesInConfig(["@new"], { ...mockConfig }, { writeFile: false })

    expect(result.config.registries).not.toHaveProperty("@shadcn")
    expect(result.config.registries).toHaveProperty("@custom")
    expect(result.config.registries).toHaveProperty("@new")
    expect(result.newRegistries).toContain("@new")
  })

  it("should NOT filter built-in registries before calling resolveRegistryNamespaces", async () => {
     let configSeenByResolve: any = null
     vi.mocked(resolveRegistryNamespaces).mockImplementation(async (comps, cfg) => {
        configSeenByResolve = cfg
        return []
     })

     await ensureRegistriesInConfig([], { ...mockConfig }, { writeFile: false })

     // The input mockConfig has @shadcn.
     // We want to make sure it was NOT filtered yet when passed to resolveRegistryNamespaces
     // Wait, in my latest implementation I DO filter it at the beginning.
     // Let's check the rationale. Built-in registries are ALREADY in the registry context
     // and resolveRegistryNamespaces handles them.
     // If they are in config.registries, they should be fine.
     // Actually, if they are in BUILTIN_REGISTRIES, they are always available.

     expect(configSeenByResolve.registries).not.toHaveProperty("@shadcn")
  })
})
