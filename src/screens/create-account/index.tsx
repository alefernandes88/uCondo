import React, { useEffect, useState } from 'react'
import Container from '../../components/container'
import { Input, Select } from '../../components/input'
import { ActionButton } from '../../components/header-navigator'
import { ScreenName } from '../../components/header-navigator/types'
import ConfirmIcon from '../../icons/confirm'
import { useAccountChildren, useAccountParents, useAllAccounts } from '../../hook/storage/account'
import {
  addAccount,
  checkAvailableCode,
  checkValidType,
  fetchAccountByCode,
  updateAccount
} from '../../utils/storage/account'
import { getLastItem } from '../../utils/list'
import type { AccountTransactionType } from '../../types/account'
import { bumpCode, isValidCode } from './utils'
import { accountTypeOptions, hasIncomingOptions } from './constraints'
import type { CreateAccountScreenProps } from './types'
const CreateAccountScreen = ({
  navigation,
  route
}: CreateAccountScreenProps) => {
  const [parentAccountId, setParentAccountId] = useState('')
  const [code, setCode] = useState('')
  const [name, setName] = useState('')
  const [transactionType, setTransactionType] = useState<AccountTransactionType>('revenue')
  const [hasIncoming, setIncoming] = useState(true)
  const [parentType, setParentType] = useState<AccountTransactionType | undefined>(undefined)
  const { accounts: allAccountList } = useAllAccounts()
  const parentsAccountList = useAccountParents()
  const childrenAccountList = useAccountChildren(parentAccountId)
  const previousCode = route.params?.accountCode

  useEffect(() => {
    if (previousCode) {
      fetchAccountByCode(previousCode).then((previousAccountDetals) => {
        setParentAccountId(previousAccountDetals.parentAccount)
        setName(previousAccountDetals.name)
        setCode(previousAccountDetals.code)
        setTransactionType(previousAccountDetals.transactionType)
        setIncoming(previousAccountDetals.hasIncoming)
      }).catch((e) => {
        console.error('Errort trying to fetch previous code: ', e)
      })
    }
  }, [
    previousCode
  ])

  useEffect(() => {
    if (!previousCode) {
      let suggestion
      const lastChildren = getLastItem(childrenAccountList)

      if (lastChildren?.code) {
        suggestion = bumpCode(lastChildren.code)
      } else {
        const parentCode = bumpCode(getLastItem(allAccountList)?.code.split('.')[0] || '0')
        suggestion = parentAccountId !== '' ? `${parentAccountId}.1` : parentCode
      }
      setCode(suggestion)
    }
  }, [childrenAccountList])

  useEffect(() => {
    navigation.setOptions({
      title: previousCode ? 'Editar Conta' : 'Inserir Conta',
      headerRight: () => (
        <ActionButton
          navigation={navigation}
          icon={ConfirmIcon}
          onPress={async () => {
            if (
              name &&
              isValidCode(code, true) &&
              await checkAvailableCode(code, previousCode) &&
              await checkValidType(parentAccountId, transactionType)
            ) {
              try {
                const saveAccount = !previousCode ? addAccount : updateAccount
                await saveAccount({
                  parentAccount: parentAccountId,
                  code,
                  name,
                  transactionType,
                  hasIncoming
                })
                navigation.navigate(ScreenName.HOME)
              } catch (e) {
                alert('Ooops... Alguma coisa deu errado! Por favor tente novamente')
              }
            } else {
              alert('Erro no formulário.')
            }
          }}
        />
      )
    })
  }, [
    parentAccountId,
    code,
    name,
    transactionType,
    hasIncoming
  ])

  useEffect(() => {
    if (!parentAccountId) {
      setParentType(undefined)
      setIncoming(false)
    } else {
      setIncoming(true)

      const parentAccount = parentsAccountList.find((account) => account.code === parentAccountId)
      if (parentAccount) {
        setParentType(parentAccount.transactionType)
        setTransactionType(parentAccount.transactionType)
      }
    }
  }, [parentAccountId])

  return (
    <Container>
      <Select
        label="Conta Pai"
        options={[{
          label: 'Não há',
          value: ''
        }, ...parentsAccountList.map(account => ({
          label: `${account.code} - ${account.name}`,
          value: account.code
        }))]}
        value={parentAccountId}
        onValueChange={(value: string) => { setParentAccountId(value) }}
      />
      <Input
        label="Código"
        keyboardType="number-pad"
        value={code}
        onValueChange={(value) => {
          if (isValidCode(value)) {
            setCode(value)
          }
        }}
      />
      <Input
        label="Nome"
        value={name}
        onValueChange={(value) => { setName(value) }}/>
      <Select
        label="Tipo"
        options={accountTypeOptions}
        value={transactionType}
        onValueChange={(value: AccountTransactionType) => { setTransactionType(value) }}
        isDisabled={!!parentType}
      />
      <Select
        label="Aceita lançamentos"
        options={hasIncomingOptions}
        value={hasIncoming}
        onValueChange={(value: boolean) => { setIncoming(value) }}
        isDisabled={parentAccountId === ''}
      />
    </Container>
  )
}

export default CreateAccountScreen
