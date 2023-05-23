import type { Account } from '../../types/account'

export interface EraseModalProps {
  isOpen: boolean
  onClose: () => void
  onErase: (account: Account) => void
  account: Account | null
}

export type ButtonTypes = 'primary' | 'secondary'
