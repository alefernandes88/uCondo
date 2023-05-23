import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import { ActionButton } from '../index'
import ConfirmIcon from '../../../icons/confirm'
import { ScreenName } from '../types'

describe('Components -> Header Navigator', () => {
  const navigateSpy = jest.fn()
  const onPressSpy = jest.fn()
  const pathMock = ScreenName.HOME

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render with a icon', () => {
    const { toJSON } = render((
      <ActionButton
        navigation={{
          navigate: navigateSpy
        } as any}
        icon={ConfirmIcon}
        onPress={onPressSpy}
        path={pathMock}
      />
    ))

    expect(toJSON()).toMatchSnapshot()
  })

  it('should trigger action when pressed', async () => {
    const navigateSpy = jest.fn()
    const onPressSpy = jest.fn()
    const pathMock = ScreenName.HOME

    const { findByTestId } = render((
      <ActionButton
        navigation={{
          navigate: navigateSpy
        } as any}
        icon={ConfirmIcon}
        onPress={onPressSpy}
        path={pathMock}
      />
    ))

    const button = await findByTestId('header-action-button')
    fireEvent.press(button)

    expect(navigateSpy).toBeCalledWith(pathMock)
    expect(onPressSpy).toBeCalled()
  })
})
