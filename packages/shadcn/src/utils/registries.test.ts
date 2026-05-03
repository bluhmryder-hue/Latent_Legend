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

  it("should write the config to file if writeFile is true", async () => {
    vi.mocked(resolveRegistryNamespaces).mockResolvedValue([])

    await ensureRegistriesInConfig([], { ...mockConfig }, { writeFile: true, silent: true })

    expect(fs.writeFile).toHaveBeenCalled()
    const call = vi.mocked(fs.writeFile).mock.calls[0]
    const writtenConfig = JSON.parse(call[1] as string)
    expect(writtenConfig.registries).not.toHaveProperty("@shadcn")
    expect(writtenConfig.registries).toHaveProperty("@custom")
  })

  it("should add new registries and still filter built-in ones", async () => {
    vi.mocked(resolveRegistryNamespaces).mockResolvedValue(["@new"])
    vi.mocked(getRegistriesIndex).mockResolvedValue({
      "@new": "https://new.com/{name}.json",
    })

    const result = await ensureRegistriesInConfig(["@new"], { ...mockConfig }, { writeFile: false })

    expect(result.config.registries).not.toHaveProperty("@shadcn")
    expect(result.config.registries).toHaveProperty("@custom")
    expect(result.config.registries).toHaveProperty("@new")
    expect(result.newRegistries).toContain("@new")
  })

  it("should NOT filter built-in registries during dependency resolution", async () => {
     let configSeenByResolve: any = null
     vi.mocked(resolveRegistryNamespaces).mockImplementation(async (comps, cfg) => {
        configSeenByResolve = cfg
        return []
     })

     await ensureRegistriesInConfig([], { ...mockConfig }, { writeFile: false })

     // Built-in registries should still be present when resolveRegistryNamespaces is called
     expect(configSeenByResolve.registries).toHaveProperty("@shadcn")
  })
})
