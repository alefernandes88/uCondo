import React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from './types'

const TrashIcon = ({
  height = 20,
  width = 20,
  color = '#C4C4D1',
  strokeSize = 1.5
}: IconProps) => (
    <Svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none" >
        <Path
            d="M2.5 5H4.16667H17.5"
            stroke={color}
            strokeWidth={strokeSize}
            strokeLinecap="round"
            strokeLinejoin="round"/>
        <Path
            d="M6.66668 5.00002V3.33335C6.66668 2.89133 6.84227 2.4674 7.15484 2.15484C7.4674 1.84228 7.89132 1.66669 8.33335 1.66669H11.6667C12.1087 1.66669 12.5326 1.84228 12.8452 2.15484C13.1578 2.4674 13.3333 2.89133 13.3333 3.33335V5.00002M15.8333 5.00002V16.6667C15.8333 17.1087 15.6578 17.5326 15.3452 17.8452C15.0326 18.1578 14.6087 18.3334 14.1667 18.3334H5.83335C5.39132 18.3334 4.9674 18.1578 4.65483 17.8452C4.34227 17.5326 4.16668 17.1087 4.16668 16.6667V5.00002H15.8333Z"
            stroke={color}
            strokeWidth={strokeSize}
            strokeLinecap="round"
            strokeLinejoin="round"/>
    </Svg>
)

export default TrashIcon
