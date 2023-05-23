import React from 'react'
import { Text } from 'react-native'
import { render } from '@testing-library/react-native'
import Container from '../index'

describe('Components -> Container', () => {
  it('should render with correct style', () => {
    const { toJSON } = render((
        <Container>
          <Text>
            Any Children
          </Text>
        </Container>
    ))

    expect(toJSON()).toMatchSnapshot()
  })
})
