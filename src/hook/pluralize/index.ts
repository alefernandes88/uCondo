import { useMemo } from 'react'

export const usePluralize = (counter: number, label: string, suffix: string) => useMemo(() => {
  return counter > 1 ? `${label}${suffix}` : label
}, [counter])
