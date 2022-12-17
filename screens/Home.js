import React from 'react'
import { Text, View } from 'react-native'
import Search from '../components/Search'

const Home = () => {
    return (
        <View >
            <Search />
            <Text className="text-xl text-[#000]"> text InComponent </Text>
        </View>
    )

}
export default Home
