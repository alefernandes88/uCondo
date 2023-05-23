import React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from './types'

const ConfirmIcon = ({
  height = 16,
  width = 20,
  color = '#FFF'
}: IconProps) => (
    <Svg width={width} height={height} viewBox="0 0 20 16" fill="none">
        <Path d="M19.375 0.453125H17.7367C17.507 0.453125 17.2891 0.558594 17.1484 0.739062L7.48517 12.9805L2.85157 7.10938C2.78148 7.02038 2.69214 6.94842 2.59025 6.8989C2.48836 6.84937 2.37658 6.82357 2.26329 6.82344H0.625013C0.467982 6.82344 0.381263 7.00391 0.477357 7.12578L6.89689 15.2586C7.19689 15.6383 7.77345 15.6383 8.07579 15.2586L19.5227 0.753125C19.6188 0.633594 19.532 0.453125 19.375 0.453125Z"
              fill={color}/>
    </Svg>
)

export default ConfirmIcon
