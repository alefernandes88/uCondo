import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import { Input, Select } from '../index'

describe('Components -> Input', () => {
  const labelMock = 'Some label'
  const valueMock = 'Some value'
  const onValueChangeSpy = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render with a normal style', () => {
    const { toJSON } = render((
      <Input
        label={labelMock}
        value={valueMock}
        onValueChange={onValueChangeSpy}
      />
    ))

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render with a disabled style', () => {
    const { toJSON } = render((
      <Input
        label={labelMock}
        value={valueMock}
        onValueChange={onValueChangeSpy}
        isDisabled
      />
    ))

    expect(toJSON()).toMatchSnapshot()
  })

  it('should fires callback on text change', async () => {
    const newValueMock = 'new value'
    const { findByTestId } = render((
      <Input
        label={labelMock}
        value={valueMock}
        onValueChange={onValueChangeSpy}
      />
    ))

    const inputField = await findByTestId('input-field')
    fireEvent.changeText(inputField, newValueMock)
    expect(onValueChangeSpy).toBeCalledWith(newValueMock)
  })
})

describe('Components -> Select', () => {
  const labelMock = 'Some label'
  const optionsMock = [
    {
      label: 'Item 1',
      value: 1
    },
    {
      label: 'Item 2',
      value: 2
    }
  ]
  const valueMock = optionsMock[0].value

  const onValueChangeSpy = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render normal style', () => {
    const { toJSON } = render((
      <Select
        label={labelMock}
        value={valueMock}
        onValueChange={onValueChangeSpy}
        options={optionsMock}
      />
    ))

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render disabled style', () => {
    const { toJSON } = render((
      <Select
        label={labelMock}
        value={valueMock}
        onValueChange={onValueChangeSpy}
        options={optionsMock}
        isDisabled
      />
    ))

    expect(toJSON()).toMatchSnapshot()
  })
})
