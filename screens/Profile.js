import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
const Profile = () => {
    return (
        <View className="w-full h-full">
            <View className="w-[100%] h-[40%]">
                <ImageBackground
                    source={require('.././assets/back1.png')}
                >
                    <LinearGradient colors={['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.6)']}>
                        <View className="flex items-center w-[100%] h-[100%]  ">
                            <View className="pt-2 w-20 h-20 flex items-center justify-center rounded-full bg-white ">
                                <Text>J</Text>
                            </View>
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </View>
            <View className="-mt-10 p-5 w-[100%] h-[100%] rounded-3xl bg-[#fff]">
                <Text>skfkhfshgs</Text>
            </View>
        </View>
    )
}

export default Profile
