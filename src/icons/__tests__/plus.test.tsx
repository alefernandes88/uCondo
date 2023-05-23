import React from 'react'
import { render } from '@testing-library/react-native'
import PlusIcon from '../plus'

describe('Icons -> Plus', () => {
  it('should render with a normal style', () => {
    const { toJSON } = render((
      <PlusIcon />
    ))

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render with a custom style', () => {
    const { toJSON } = render((
      <PlusIcon
        color="red"
        height={30}
        width={30}
        strokeSize={1.5}
      />
    ))

    expect(toJSON()).toMatchSnapshot()
  })
})
