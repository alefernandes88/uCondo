import React from 'react'
import { TouchableNativeFeedback } from 'react-native'
import type { ActionButtonProps } from './types'
import { ButtonWrapper, ButtonContent } from './styles'

export const ActionButton = ({ navigation, path, icon, onPress = () => {} }: ActionButtonProps) => (
        <ButtonWrapper>
          <TouchableNativeFeedback
            testID="header-action-button"
            onPress={() => {
              onPress()
              if (path) {
                navigation.navigate(path)
              }
            }}
            background={TouchableNativeFeedback.Ripple('#4b4b4b', true)}
          >
            <ButtonContent>
              {icon({})}
            </ButtonContent>
          </TouchableNativeFeedback>
        </ButtonWrapper>
)
