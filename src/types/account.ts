export type AccountTransactionType = 'expenses' | 'revenue'

export interface Account {
  parentAccount: string
  code: string
  name: string
  transactionType: AccountTransactionType
  hasIncoming: boolean
}
