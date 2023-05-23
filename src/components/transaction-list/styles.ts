import styled from 'styled-components/native'
import { FlatList } from 'react-native'
import type { AccountTransactionType, Account } from '../../types/account'

export const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  margin-bottom: 15px;
`

export const ItemText = styled.Text<{
  type: AccountTransactionType
}>`
  font-family: "Rubik_400Regular";
  font-size: 15px;
  color: ${({ type }) => type === 'revenue' ? '#1BA803' : '#E28856'};
  flex: 1;
  padding-right: 5px;
`

export const ContainerList = styled(FlatList<Account>)`
  padding-bottom: 55px;
  padding-top: 10px;
  border-top-color: rgba(148, 148, 148, 0.3);
  border-top-style: solid;
  border-top-width: 1px;
`

export const ContainerTitleWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 18px;
`

export const Title = styled.Text`
  font-family: "Rubik_400Regular";
  font-size: 20px;
  color: #3D3D4C;
`

export const CounterLabel = styled.Text`
  font-family: Roboto;
  font-size: 15px;
  color: #A0A0B2;
`

export const ListContainer = styled.View`
  flex: 1;
`

export const ItemAction = styled.View`
  padding: 5px;
`
export const ItemActionWrapper = styled.View`
  border-radius: 15px;
`

export const ListContent = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
`
