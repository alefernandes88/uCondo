import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import ListItem from '../../components/transaction-list'
import Container from '../../components/container'
import { useAllAccounts } from '../../hook/storage/account'
import EraseModal from '../../modals/erase'
import { eraseAccount } from '../../utils/storage/account'
import { type AppNavigationProps, ScreenName } from '../../components/header-navigator/types'
import type { Account } from '../../types/account'

const HomeScreen = () => {
  const { accounts, refetch } = useAllAccounts()
  const navigation = useNavigation<AppNavigationProps>()
  const [accountToErase, setAccountToErase] = useState<Account | null>(null)
  return (
      <Container>
        <ListItem
          data={accounts}
          onErase={(account) => {
            setAccountToErase(account)
          }}
          onSelect={(account) => {
            navigation.navigate(ScreenName.CREATE_ACCOUNT, { accountCode: account.code })
          }}
        />
        <EraseModal
          isOpen={!!accountToErase}
          account={accountToErase}
          onClose={() => { setAccountToErase(null) }}
          onErase={async (account) => {
            try {
              await eraseAccount(account.code)
              refetch()
              setAccountToErase(null)
            } catch (e) {
              console.error(e)
              alert('Ooops, não foi possivel deletar, tente novamente')
            }
          }}
        />
      </Container>
  )
}

export default HomeScreen
