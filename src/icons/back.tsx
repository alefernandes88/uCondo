import React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from './types'

const BackIcon = ({
  width = 375,
  height = 267,
  color = '#622490'
}: IconProps) => (
    <Svg width={width} height={height} viewBox="0 0 375 267" fill="none">
        <Path d="M0 0H375V267H0V0Z" fill={color}/>
    </Svg>
)

export default BackIcon
