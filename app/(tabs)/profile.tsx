import { useGetProfile } from '@/utils/apis/userApi';
import { Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LogOut } from 'lucide-react-native';
import { useLogout } from '@/utils/apis/authApi';
import { Button } from '@/components/ui/button';

const Profile = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {data:profile} = useGetProfile();
  const {mutate} = useLogout();
  return (
    <SafeAreaView className={`${isDarkMode && 'bg-stone-800'} flex-1 p-5`}>
      <Text className={`${isDarkMode && 'text-white'} text-xl font-semibold`}>Profile</Text>
      <Image source={profile?.data?.profileImageUrl} className='w-20 h-20'/>
      <Text className={`${isDarkMode && 'text-white'}`}>{profile?.data?.fullName}</Text>
      <Button  className='w-36 bg-red-500 cursor-pointer' onPress={() => mutate()}>
        <LogOut color={'white'}/>
        <Text className='text-white text-xl'>Log Out</Text>
      </Button>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})