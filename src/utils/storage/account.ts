import AsyncStorage from '@react-native-async-storage/async-storage'
import type { Account } from '../../types/account'

const accountStorageKey = 'accountList'

const sortCompare = (accountA: Account, accountB: Account) => {
  const accountACodes = accountA.code.split('.').map(code => +code)
  const accountBCodes = accountB.code.split('.').map(code => +code)

  for (let i = 0; i < accountACodes.length && accountBCodes.length; i++) {
    if (accountACodes[i] > accountBCodes[i]) {
      return 1
    }

    if (accountACodes[i] < accountBCodes[i]) {
      return -1
    }
  }

  if (accountACodes.length > accountBCodes.length) {
    return 1
  }

  if (accountACodes.length < accountBCodes.length) {
    return -1
  }

  return 0
}

const saveStorage = async (accounts: Account[]) => { await AsyncStorage.setItem(accountStorageKey, JSON.stringify(accounts)) }

export const fetchAllAccounts = async () => {
  let accounts: Account[] = []

  try {
    const jsonValue = await AsyncStorage.getItem(accountStorageKey) ?? ''
    accounts = jsonValue ? JSON.parse(jsonValue) : []
  } catch (e) {
    console.log(e)
  }

  return accounts.sort(sortCompare)
}

export const fetchAccountByCode = async (code: string) => {
  const accounts = await fetchAllAccounts()
  return accounts.find(account => account.code === code)
}

export const fetchParents = async () => {
  const accounts = await fetchAllAccounts()
  return accounts.filter(account => !account.hasIncoming)
}

export const fetchChildren = async (parentAccount: string) => {
  const accounts = await fetchAllAccounts()
  return accounts.filter(account => account.parentAccount === parentAccount).sort(sortCompare)
}

export const addAccount = async (account: Account) => {
  const accounts = await fetchAllAccounts()
  accounts.push(account)
  await saveStorage(accounts)
}

export const updateAccount = async (account: Account) => {
  await eraseAccount(account.code)
  const accounts = await fetchAllAccounts()
  accounts.push(account)
  await saveStorage(accounts)
}

export const checkAvailableCode = async (code: string, previousCode?: string) => {
  if (code === previousCode) {
    return true
  }

  const accounts = await fetchAllAccounts()
  return !accounts.find(account => account.code === code)
}

export const checkValidType = async (parentCode: string, transactionType: string) => {
  if (parentCode === '') {
    return true
  }

  const parentAccount = await fetchAccountByCode(parentCode)
  return parentAccount?.transactionType === transactionType
}

export const eraseAccount = async (code: string) => {
  const accounts = await fetchAllAccounts()
  const accountToEraseIndex = accounts.findIndex(account => account.code === code)

  if (accountToEraseIndex === -1) {
    throw new Error('Account not found')
  }

  accounts.splice(accountToEraseIndex, 1)
  await saveStorage(accounts)
}
