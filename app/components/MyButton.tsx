import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { IButtonProps } from '@/utils/interfaces/buttonPropsInterface'

const MyButton = ({title,onPress,icon}:IButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} className={`w-36 bg-cyan-500 p-1.5 rounded-md`} activeOpacity={0.7}>
      <Text className='text-white text-xl text-center'>{title}</Text>
      {icon}
    </TouchableOpacity>
  )
}

export default MyButton