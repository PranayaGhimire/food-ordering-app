import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { IButtonProps } from '@/utils/interfaces/propsInterface'

const MyButton = ({title,onPress,icon:Icon,bgColor}:IButtonProps) => {
  return (
    <TouchableOpacity  onPress={onPress} className={`${bgColor} w-36 bg-cyan-500 p-1.5 justify-center rounded-md flex-row gap-2`} activeOpacity={0.7}>
      {Icon && <Icon color ="white" size={20}/>}
      <Text className='text-white text-xl text-center'>{title}</Text>
    </TouchableOpacity>
  )
}

export default MyButton