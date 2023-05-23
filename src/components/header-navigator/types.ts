import type { NavigationProp } from '@react-navigation/native'
import type { IconProps } from '../../icons/types'

export enum ScreenName {
  HOME = 'Home',
  CREATE_ACCOUNT = 'CreateAccount'
}

export interface RootStackParamList {
  [ScreenName.HOME]: undefined
  [ScreenName.CREATE_ACCOUNT]: { accountCode?: string }
};

export type AppNavigationProps = NavigationProp<RootStackParamList>

export interface ActionButtonProps {
  navigation: AppNavigationProps
  path?: ScreenName
  icon: (props: IconProps) => JSX.Element
  onPress?: () => void
}
