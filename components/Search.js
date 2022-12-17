import React from 'react'
import { TextInput, View } from 'react-native'

const Search = () => {
    return (
        <View className="shadow">
            <TextInput
                placeholder="keyword"
                className="bg-black"
            />
        </View>
    )
}

export default Search
