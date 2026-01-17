
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
 
  const isDarkMode = useColorScheme() === 'dark';
 
  return (
    <SafeAreaView className={`${isDarkMode && 'bg-stone-800'} flex-1`}>
        <View className='flex-1 gap-3 p-5'>
            <Text className={`${isDarkMode && 'text-white'} text-xl font-semibold`}>The Momo House</Text>
        </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})