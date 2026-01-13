import { StyleSheet} from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { BookOpen, Contact, Home} from 'lucide-react-native'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{headerShown: false}}>
        <Tabs.Screen name='index' options={{title:"Home",tabBarIcon: () => <Home/>}}/>
        <Tabs.Screen name='about' options={{title:"About Us",tabBarIcon: () => <BookOpen/>}}/>
        <Tabs.Screen name='contact' options={{title:"Contact Us", tabBarIcon: () => <Contact/>}}/>
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})