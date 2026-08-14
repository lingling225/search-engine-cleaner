export type ScriptBridge = {
  get: (key: string, fallback?: string) => Promise<Record<string, unknown>>
  change: (key: string, data: Record<string, unknown>) => Promise<unknown> | unknown
  save: (key: string, data: Record<string, unknown> | unknown[]) => Promise<unknown>
  requestText?: (url: string) => Promise<string>
}

declare global {
  interface Window {
    AC_GM_Interface?: ScriptBridge
  }
}

export function getScriptBridge(): ScriptBridge {
  const bridge = window.AC_GM_Interface
  if (!bridge) {
    throw new Error('未检测到用户脚本桥接，请先安装并启用 Search Engine Cleaner')
  }
  return bridge
}

export async function loadConfig<T extends Record<string, unknown>>(key: string): Promise<Partial<T>> {
  const value = await getScriptBridge().get(key, '{}')
  return value && typeof value === 'object' && !Array.isArray(value) ? value as Partial<T> : {}
}

export async function previewConfig(key: string, value: Record<string, unknown>) {
  try {
    await getScriptBridge().change(key, value)
  } catch (error) {
    window.dispatchEvent(new CustomEvent('ac-config-bridge-error', { detail: { error } }))
  }
}
