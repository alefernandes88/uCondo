import { useCallback, useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { fetchAllAccounts, fetchChildren, fetchParents } from '../../utils/storage/account'
import type { Account } from '../../types/account'
import type { useAllAccountsResponse } from './types'

export const useAllAccounts = (): useAllAccountsResponse => {
  const isFocused = useIsFocused()
  const [needUpdate, setNeedUpdate] = useState(false)
  const [accounts, setAccounts] = useState<Account[]>([])

  const refetch = useCallback(() => {
    setNeedUpdate(true)
  }, [setNeedUpdate])

  useEffect(() => {
    if (isFocused || needUpdate) {
      fetchAllAccounts().then((response) => {
        setAccounts(response)
      }).catch((e) => {
        console.error(e)
      })

      setNeedUpdate(false)
    }
  }, [isFocused, needUpdate])

  return {
    accounts,
    refetch
  }
}

export const useAccountParents = (): Account[] => {
  const [parents, setParents] = useState<Account[]>([])

  useEffect(() => {
    fetchParents().then((response) => {
      setParents(response)
    }).catch((e) => {
      console.error(e)
    })
  }, [])

  return parents
}

export const useAccountChildren = (parentAccount: string): Account[] => {
  const [children, setChildren] = useState<Account[]>([])

  useEffect(() => {
    fetchChildren(parentAccount).then((response) => {
      setChildren(response)
    }).catch((e) => {
      console.error(e)
    })
  }, [parentAccount])

  return children
}
