import { useGetProfile } from '@/utils/apis/userApi';
import { Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {data:profile} = useGetProfile();
  console.log(profile);
  
  return (
    <SafeAreaView className={`${isDarkMode && 'bg-stone-800'} flex-1 p-5`}>
      <Text className={`${isDarkMode && 'text-white'} text-xl font-semibold`}>Profile</Text>
      <Image source={profile?.data?.profileImageUrl} className='w-20 h-20'/>
      <Text className={`${isDarkMode && 'text-white'}`}>{profile?.data?.fullName}</Text>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})