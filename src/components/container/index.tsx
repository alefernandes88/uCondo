import React from 'react'
import { StyledView } from './styles'
import { type ContainerProps } from './types'

const Container = ({
  children
}: ContainerProps) => (
    <StyledView>
        {children}
    </StyledView>
)

export default Container
