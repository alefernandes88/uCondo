import styled from 'styled-components/native'

export const Container = styled.View`
  margin-bottom: 10px;
`

export const InputWrapper = styled.View<{
  isDisabled?: boolean
}>`
  background-color: ${({ isDisabled }) => isDisabled ? '#d7d7d7' : '#FFF'};
  border-radius: 10px;
`

export const StyledTextInput = styled.TextInput`
  padding: 12px 17px;
  font-size: 15px;
  color: #777777;
`

export const Label = styled.Text`
  font-family: "Rubik_500Medium";
  font-size: 15px;
  color: #6A6A6A;
  margin-bottom: 2px;
`
