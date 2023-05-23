import React from 'react'
import { Picker } from '@react-native-picker/picker'
import { Container, InputWrapper, Label, StyledTextInput } from './styles'
import type { InputProps, SelectProps } from './types'

export const Input = ({
  label,
  placeholder,
  value,
  keyboardType,
  onValueChange,
  isDisabled = false
}: InputProps) => {
  return (
        <Container>
            <Label>{label}</Label>
            <InputWrapper
              isDisabled={isDisabled}
            >
              <StyledTextInput
                testID="input-field"
                value={value.toString()}
                onChangeText={(text: string) => {
                  if (!isDisabled) {
                    onValueChange(text)
                  }
                }}
                placeholder={placeholder}
                keyboardType={keyboardType}
                focusable={!isDisabled}
              />
            </InputWrapper>
        </Container>
  )
}

export const Select = ({
  label,
  value,
  options,
  onValueChange,
  isDisabled = false
}: SelectProps<string | number | boolean>) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputWrapper
        isDisabled={isDisabled}
      >
        <Picker
          selectedValue={value}
          onValueChange={onValueChange}
          enabled={!isDisabled}
          testID="select-field"
        >
          {options.map(({ label, value }) => (
            <Picker.Item
              label={label}
              value={value}
              key={value.toString()}
              testID={`select-item-${value.toString()}}`}
            />
          ))}
        </Picker>
      </InputWrapper>
    </Container>
  )
}
