import React from 'react'
import { TouchableNativeFeedback } from 'react-native'
import TrashIcon from '../../icons/trash'
import { usePluralize } from '../../hook/pluralize'
import type { Account } from '../../types/account'
import {
  ContainerList,
  ContainerTitleWrapper,
  CounterLabel, ItemAction, ItemActionWrapper,
  ItemContainer,
  ItemText,
  ListContainer,
  ListContent,
  Title
} from './styles'
import type { TransactionListItemProps, TransactionListProps } from './types'
const listRenderItem = ({ account, onErase, onSelect }: TransactionListItemProps) => (
    <TransactionList.Item
        account={account}
        onErase={onErase}
        onSelect={onSelect}
    />
)

const TransactionList = ({
  data,
  onErase,
  onSelect
}: TransactionListProps) => {
  const dataCounter = data.length
  const counterLabel = usePluralize(dataCounter, 'Registro', 's')
  return (
        <ListContainer>
            <ContainerTitleWrapper>
                <Title>
                    Listagem
                </Title>
                <CounterLabel>
                    {dataCounter} {counterLabel}
                </CounterLabel>
            </ContainerTitleWrapper>

            <ContainerList
                data={data}
                renderItem={({ item }: { item: Account }) => listRenderItem({ account: item, onErase, onSelect })}
                keyExtractor={(item: Account) => item?.code}
            />
        </ListContainer>
  )
}

TransactionList.Item = ({
  account,
  onErase,
  onSelect
}: TransactionListItemProps) => {
  const {
    code,
    name,
    transactionType
  } = account
  return (
        <ItemContainer>
          <TouchableNativeFeedback
            testID={`transaction-item-${code}`}
            onPress={() => { onSelect(account) }}
            background={TouchableNativeFeedback.Ripple('#e4e4e4', true)}
          >
            <ListContent>
              <ItemText type={transactionType} numberOfLines={1}>
                {code} - {name}
              </ItemText>
              <ItemActionWrapper>
                {typeof onErase === 'function'
                  ? (
                    <TouchableNativeFeedback
                      testID={`transaction-item-${code}-erase`}
                      onPress={() => { onErase(account) }}
                      background={TouchableNativeFeedback.Ripple('#e4e4e4', true)}
                    >
                      <ItemAction>
                        <TrashIcon />
                      </ItemAction>
                    </TouchableNativeFeedback>
                    )
                  : null}
              </ItemActionWrapper>
            </ListContent>
          </TouchableNativeFeedback>
        </ItemContainer>
  )
}

export default TransactionList
