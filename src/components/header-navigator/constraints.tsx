import React from 'react'

import HomeScreen from '../../screens/home'
import CreateAccountScreen from '../../screens/create-account'
import PlusIcon from '../../icons/plus'
import { type ActionButtonProps, ScreenName } from './types'
import { ActionButton } from './index'

export const stackList = [
  {
    name: ScreenName.HOME,
    component: HomeScreen,
    options: ({ navigation }: ActionButtonProps) => ({
      title: 'Plano de Contas',
      headerRight: () => (
        <ActionButton
          navigation={navigation}
          path={ScreenName.CREATE_ACCOUNT}
          icon={PlusIcon}
        />
      )
    })
  },
  {
    name: ScreenName.CREATE_ACCOUNT,
    component: CreateAccountScreen,
    options: {
      title: 'Inserir Contas'
    }
  }
]
