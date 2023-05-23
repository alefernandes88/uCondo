import type { Account } from '../../types/account'

export interface useAllAccountsResponse {
  accounts: Account[]
  refetch: () => void
}
