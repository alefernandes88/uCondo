import type { KeyboardType } from 'react-native'

export interface SelectItemProps<T> {
  label: string
  value: T
}

interface InputBase<T> {
  label: string
  value: T
  onValueChange: (value: T) => void
  isDisabled?: boolean
}

export interface SelectProps<T> extends InputBase<T> {
  options: Array<SelectItemProps<T>>
}

export interface InputProps<T = string> extends InputBase<T> {
  placeholder?: string
  keyboardType?: KeyboardType
}
