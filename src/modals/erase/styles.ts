import styled, { css } from 'styled-components/native'
import type { ButtonTypes } from './types'

export const ModalWrapper = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  background-color: rgba(0,0,0,0.2);
`

export const ModalContainer = styled.View`
  background-color: #FFF;
  height: 280px;
  width: 100%;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`

export const TextWrapper = styled.View`
  margin: 20px 0;
`

export const ButtonsWrapper = styled.View`
  flex-direction: row;
  gap: 10px;
`

export const Title = styled.Text`
  font-family: Rubik_400Regular;
  color: #6C6C80;
  font-size: 15px;
  margin-bottom: 5px;
`

export const Description = styled.Text`
  font-family: Rubik_700Bold;
  color: #6C6C80;
  font-size: 15px;
`

export const StyledButton = styled.View<{
  type: ButtonTypes
}>`
  padding: 10px 25px;
  ${({ type }) => {
    if (type === 'primary') {
      return css`
        border-radius: 100px;
        background-color: #FF6680;
      `
    } else {
      return css`
        color: #FF6680;
        background-color: #FFF;
      `
    }
  }}
`

export const StyledButtonText = styled.Text<{
  type: ButtonTypes
}>`
  ${({ type }) => {
  if (type === 'primary') {
    return css`
        color: #FFF;
      `
  } else {
    return css`
        color: #FF6680;
      `
  }
}}
`
