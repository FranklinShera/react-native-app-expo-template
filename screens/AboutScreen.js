import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import tw from 'tailwind-react-native-classnames'

const AboutScreen = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={tw`h-full p-5  flex justify-center items-center`}>
        <Text style={tw`font-bold text-2xl `}>About Template</Text>

        <View style={tw`flex justify-center items-center`}>
        <Text style={tw`text-gray-700 `}>Redux</Text>
        <Text style={tw`text-gray-700 `}>React Navigation</Text>
        <Text style={tw`text-gray-700 `}>Stack Navigator</Text>
        <Text style={tw`text-gray-700 `}>Guesture Handler</Text>
        </View>

        <TouchableOpacity
        onPress={() =>{
          navigation.navigate('HomeScreen');
        }}
          style={tw`bg-indigo-800 w-2/3 px-10 py-3 rounded-md my-4`}
        >
          <Text style={tw`text-white`}>Go Home</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
}

export default AboutScreen

const styles = StyleSheet.create({})
