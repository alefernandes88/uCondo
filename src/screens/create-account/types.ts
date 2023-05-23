import type { AppNavigationProps } from '../../components/header-navigator/types'
import type { RouteProp } from '@react-navigation/native'

export interface CreateAccountScreenProps {
  navigation: AppNavigationProps
  route: RouteProp<{ params: { accountCode?: string } }, 'params'>
}
