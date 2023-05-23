import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import { mockOptions } from '../__mocks__/transaction-list'
import TransactionList from '../index'

describe('Components -> Transaction List', () => {
  const onEraseSpy = jest.fn()
  const onSelectSpy = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render with a normal style', () => {
    const { toJSON } = render((
      <TransactionList
        data={mockOptions}
        onErase={onEraseSpy}
        onSelect={onSelectSpy}
      />
    ))

    expect(toJSON()).toMatchSnapshot()
  })

  it('should select the item', async () => {
    const { findByTestId } = render((
      <TransactionList
        data={mockOptions}
        onErase={onEraseSpy}
        onSelect={onSelectSpy}
      />
    ))

    const item = await findByTestId('transaction-item-1')
    fireEvent.press(item)
    expect(onSelectSpy).toBeCalledWith(mockOptions[0])
  })

  it('should erase the item', async () => {
    const { findByTestId } = render((
      <TransactionList
        data={mockOptions}
        onErase={onEraseSpy}
        onSelect={onSelectSpy}
      />
    ))

    const item = await findByTestId('transaction-item-2.1-erase')
    fireEvent.press(item)
    expect(onEraseSpy).toBeCalledWith(mockOptions[2])
  })
})
