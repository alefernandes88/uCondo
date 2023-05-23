import React from 'react'
import { render } from '@testing-library/react-native'
import TrashIcon from '../trash'

describe('Icons -> Confirm', () => {
  it('should render with a normal style', () => {
    const { toJSON } = render((
      <TrashIcon />
    ))

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render with a custom style', () => {
    const { toJSON } = render((
      <TrashIcon
        color="red"
        height={30}
        width={30}
        strokeSize={1.5}
      />
    ))

    expect(toJSON()).toMatchSnapshot()
  })
})
