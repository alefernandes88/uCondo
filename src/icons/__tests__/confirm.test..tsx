import React from 'react'
import { render } from '@testing-library/react-native'
import ConfirmIcon from '../confirm'

describe('Icons -> Back', () => {
  it('should render with a normal style', () => {
    const { toJSON } = render((
      <ConfirmIcon />
    ))

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render with a custom style', () => {
    const { toJSON } = render((
      <ConfirmIcon
        color="red"
        height={30}
        width={30}
        strokeSize={1.5}
      />
    ))

    expect(toJSON()).toMatchSnapshot()
  })
})
