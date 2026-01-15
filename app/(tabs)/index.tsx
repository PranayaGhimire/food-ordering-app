
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'
import {Eye, SquarePen, Trash} from 'lucide-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGetFoods } from '@/utils/apis/foodApi'
import { router } from 'expo-router'
import MyButton from '../components/MyButton'
import { useCreateOrder } from '@/utils/apis/orderApi'
import { useGetProfile } from '@/utils/apis/userApi'
import Toast from 'react-native-toast-message'

const Home = () => {
  const {data:profile} = useGetProfile();
  const {data:foods} = useGetFoods();
  const {mutate:createOrder} = useCreateOrder();
  const isDarkMode = useColorScheme() === 'dark';
  const onOrder = () => {
    const data ={user:profile?.data?._id,food:foods?.data?._id}
    createOrder(data,{
      onSuccess: (response) => {
        Toast.show({
          type:"success",
          text1:response.message
        })
      },
      onError: () => Toast.show({type:'error',text1:'Oops! Something Went Wrong'})
    })
  }
  return (
    <SafeAreaView className={`${isDarkMode && 'bg-stone-800'} flex-1`}>
        <View className='flex-1 gap-3 p-5'>
            <Text className={`${isDarkMode && 'text-white'} text-2xl font-semibold`}>All Foods</Text>
            {/* <MyButton title='Add Food' onPress={onAddFood}/> */}
            <View className='mb-8'>
                <FlatList 
                data={foods?.data}
                keyExtractor={item => item._id}
                contentContainerClassName='gap-3'
                renderItem={({item}) => <View  className={`${isDarkMode ? 'bg-stone-600':'bg-white'} p-5 gap-2 rounded-md`}>
                      <Text className={`${isDarkMode && 'text-white'} text-xl font-medium`}>{item.name}</Text>
                      <Text className={`${isDarkMode ? 'text-stone-300' : 'text-stone-500'} text-[18px]`}>Rs. {item.price}</Text>
                      <Image source={{uri:item.image}} className='w-30 h-40 rounded-md'/>
                      <MyButton title='Order' onPress={onOrder}/>
                  </View> }
                />
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})