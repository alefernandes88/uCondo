import type { SelectItemProps } from '../../components/input/types'
import type { AccountTransactionType } from '../../types/account'

export const MAX_CODE_NUMBER = 999

export const accountTypeOptions: Array<SelectItemProps<AccountTransactionType>> = [{
  label: 'Receita',
  value: 'revenue'
},
{
  label: 'Despesa',
  value: 'expenses'
}]

export const hasIncomingOptions: Array<SelectItemProps<boolean>> = [{
  label: 'Sim',
  value: true
}, {
  label: 'Não',
  value: false
}]
