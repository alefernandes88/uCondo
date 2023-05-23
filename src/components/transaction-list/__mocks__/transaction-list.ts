import type { Account } from '../../../types/account'

export const mockOptions: Account[] = [
  {
    parentAccount: '',
    code: '1',
    name: 'Parent',
    transactionType: 'revenue',
    hasIncoming: false
  },
  {
    parentAccount: '',
    code: '2',
    name: 'Parent expenses',
    transactionType: 'expenses',
    hasIncoming: false
  },
  {
    parentAccount: '2',
    code: '2.1',
    name: 'Child expenses',
    transactionType: 'revenue',
    hasIncoming: true
  }
]
