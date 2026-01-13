
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {Eye, SquarePen, Trash} from 'lucide-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGetFoods } from '@/utils/apis/foodApi'
import { router } from 'expo-router'

const Home = () => {
  const {data:foods} = useGetFoods();
  console.log(foods);
  
  return (
    <SafeAreaView>
        <ScrollView className='p-5'>
            <Text className='text-xl font-semibold'>All Foods</Text>
            <TouchableOpacity className='bg-cyan-500 p-2.5 rounded-md w-24 mt-4' onPress={() => router.push("/add")}><Text className='text-white'>Add Food</Text></TouchableOpacity>
            <View className='gap-3 mt-5'>
                {foods?.data?.map((d:{_id:string,name:string,price:number,image:string}) => 
                  <View key={d._id} className='p-5 gap-2 bg-white rounded-md'>
                      <Text className='text-xl font-medium'>{d.name}</Text>
                      <Text className='text-[18px]'>{d.price}</Text>
                      <Image src={d.image} className='w-30 h-28 rounded-md'/>
                      <View className='flex-row gap-2'>
                        <TouchableOpacity className='bg-gray-500 p-2.5 rounded-md' activeOpacity={0.7}>
                            <Text className='flex-row gap-2 items-center text-white'><Eye color="white" size={20}/>View</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='bg-cyan-500 p-2.5 rounded-md' activeOpacity={0.7}>
                          <Text className='text-white'><SquarePen color="white" size={20}/>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='bg-red-500 p-2.5 rounded-md' activeOpacity={0.7}>
                            <Text className='text-white'><Trash color="white" size={20} />Delete</Text>
                        </TouchableOpacity>
                      </View>
                  </View>
                )}
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})