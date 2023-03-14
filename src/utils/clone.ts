export function lightCopy<T>(val: T): T {
  return JSON.parse(JSON.stringify(val))
}

export function deepCopy<T>(val: T): T {
  if (typeof val !== 'object' || val === null) {
    return val
  }
  if (Array.isArray(val)) {
    return val.map(deepCopy) as any
  }
  const newObj: { [key: string]: any } = {}
  for (const key in val) {
    if (Object.hasOwnProperty.call(val, key)) {
      newObj[key] = deepCopy(val[key])
    }
  }
  return newObj as T
}
