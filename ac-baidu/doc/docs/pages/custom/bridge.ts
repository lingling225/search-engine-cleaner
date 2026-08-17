import less from 'less'

export type ScriptBridge = {
  get: (key: string, fallback?: string) => Promise<Record<string, unknown>>
  change: (key: string, data: Record<string, unknown>) => Promise<unknown> | unknown
  save: (key: string, data: Record<string, unknown> | unknown[]) => Promise<unknown>
  requestText?: (url: string) => Promise<string>
}

const PREVIEW_DELAY_MS = 300
const previewTimers = new Map<string, number>()
const previewValues = new Map<string, Record<string, unknown>>()
const previewWaiters = new Map<string, Array<() => void>>()
const previewRevisions = new Map<string, number>()

function resolvePreviewWaiters(key: string) {
  previewWaiters.get(key)?.splice(0).forEach(done => done())
  previewWaiters.delete(key)
}

async function validatePreviewLess(key: string, value: Record<string, unknown>) {
  const prefix = key === 'op_common' ? 'commonStyle' : 'customStyle'
  if (!value[`${prefix}Enable`]) return
  await less.render(String(value[`${prefix}Less`] || ''))
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

export function previewConfig(key: string, value: Record<string, unknown>): Promise<void> {
  const revision = (previewRevisions.get(key) || 0) + 1
  previewRevisions.set(key, revision)
  previewValues.set(key, { ...value })
  const previousTimer = previewTimers.get(key)
  if (previousTimer !== undefined) window.clearTimeout(previousTimer)

  return new Promise((resolve) => {
    const waiters = previewWaiters.get(key) || []
    waiters.push(resolve)
    previewWaiters.set(key, waiters)

    previewTimers.set(key, window.setTimeout(async () => {
      previewTimers.delete(key)
      const latestValue = previewValues.get(key) || {}
      previewValues.delete(key)

      try {
        await validatePreviewLess(key, latestValue)
      } catch (error) {
        if (revision !== previewRevisions.get(key)) return
        window.dispatchEvent(new CustomEvent('ac-config-validation-error', {
          detail: { key, error },
        }))
        resolvePreviewWaiters(key)
        previewRevisions.delete(key)
        return
      }

      if (revision !== previewRevisions.get(key)) return
      try {
        await getScriptBridge().change(key, latestValue)
      } catch (error) {
        if (revision === previewRevisions.get(key)) {
          window.dispatchEvent(new CustomEvent('ac-config-bridge-error', { detail: { error } }))
        }
      } finally {
        if (revision === previewRevisions.get(key)) {
          resolvePreviewWaiters(key)
          previewRevisions.delete(key)
        }
      }
    }, PREVIEW_DELAY_MS))
  })
}
