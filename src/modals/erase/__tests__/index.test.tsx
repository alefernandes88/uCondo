import React from 'react'
import { render } from '@testing-library/react-native'
import { type Account } from '../../../types/account'
import EraseModal from '../index'

describe('Icons -> Back', () => {
  const onCloseSpy = jest.fn()
  const onEraseSpy = jest.fn()
  const account: Account = {
    parentAccount: '',
    code: '2',
    name: 'Account',
    transactionType: 'expenses',
    hasIncoming: false
  }

  it('should render with a normal style', () => {
    const { toJSON } = render((
      <EraseModal
        isOpen
        onClose={onCloseSpy}
        onErase={onEraseSpy}
        account={account}
      />
    ))

    expect(toJSON()).toMatchSnapshot()
  })
})
