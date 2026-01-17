import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
const Contact = () => {
  const isDarKMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView className={`${isDarKMode && 'bg-stone-800'} flex-1 p-5`}>
      <Text className={`${isDarKMode && 'text-white'} text-xl font-semibold`}>Contact Us</Text>
    </SafeAreaView>
  )
}

export default Contact

const styles = StyleSheet.create({})