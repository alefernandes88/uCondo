import type { Account } from '../../types/account'

interface TransactionCallbacks {
  onErase: (account: Account) => void
  onSelect: (account: Account) => void
}

export interface TransactionListItemProps extends TransactionCallbacks {
  account: Account
}

export interface TransactionListProps extends TransactionCallbacks {
  data: Account[]
}
