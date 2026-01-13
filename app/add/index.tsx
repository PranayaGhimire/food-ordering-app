import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Label } from '@react-navigation/elements'
import * as DocumentPicker from 'expo-document-picker'

const Add = () => {
  const pickFile = async () => {
    const result = await DocumentPicker.getDocumentAsync({
        type:"*/*",
        copyToCacheDirectory:true
    });

    if(!result.canceled) {
        console.log(result.assets[0].uri);
        console.log(result.assets[0].name);
    }
  };
  return (
    <SafeAreaView className='p-5 gap-5'>
      <Text className='text-xl font-semibold'>Add New Food</Text>
      <View className='p-5 bg-white rounded-md gap-5'>
        <View className=' gap-2'>
             <Label className=''>Food Name</Label>
             <TextInput placeholder='Enter Food Name' className='bg-cyan-200 rounded-md px-3 '/>
        </View>
        <View className='gap-2'>
            <Label>Food Price</Label>
            <TextInput keyboardType='numeric' placeholder='Enter Food Price' className='bg-cyan-200 rounded-md px-3'/>
        </View>
        <View className='gap-2'>
            <Label>Food Image</Label>   
            <TouchableOpacity className='bg-cyan-200 p-2.5 rounded-md' onPress={pickFile}>
                <Text className='text-center'>Upload Image</Text>    
            </TouchableOpacity> 
        </View>
        <TouchableOpacity className='bg-cyan-500 p-2.5 rounded-md'><Text className='text-white text-center'>Submit</Text></TouchableOpacity>   
      </View>
    </SafeAreaView>
  )
}

export default Add

const styles = StyleSheet.create({})