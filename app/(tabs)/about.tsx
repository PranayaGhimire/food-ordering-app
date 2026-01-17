import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const About = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView className={`${isDarkMode && 'bg-stone-800'} flex-1 p-5`}>
      <Text className={`${isDarkMode && 'text-white'} text-xl font-semibold`}>About Us</Text>
    </SafeAreaView>
  )
}

export default About

const styles = StyleSheet.create({})