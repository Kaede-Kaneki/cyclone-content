type storageType = 'sessionStorage' | 'localStorage'

export function getStorage(type: storageType) {
  const fn = window[type]

  const setItem = <T>(key: string, val: T) => {
    fn.setItem(key, JSON.stringify(val))
  }

  const getItem = <T>(key: string, defaultVal: Partial<T> | null = null) => {
    const val = fn.getItem(key)
    if (val === null) {
      return defaultVal
    }
    return JSON.parse(val)
  }

  const removeItem = (key: string) => {
    fn.removeItem(key)
  }

  const updateItem = <T>(key: string, val: Partial<T>) => {
    const prev = getItem(key)
    return setItem<T>(key, { ...prev, ...val })
  }

  const clear = () => {
    fn.clear()
  }

  return {
    setItem,
    getItem,
    removeItem,
    updateItem,
    clear
  }
}

export const session = getStorage('sessionStorage')

export const local = getStorage('localStorage')
