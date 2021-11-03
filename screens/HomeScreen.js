import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";

import { selectAuthor } from "../slices/appSlice";
const HomeScreen = () => {
    const navigation = useNavigation();
  const Author = useSelector(selectAuthor);
  return (
    <SafeAreaView style={tw`h-full p-5  flex justify-center items-center`}>
      <Text style={tw`font-bold text-2xl `}>Glad You Find Us</Text>
      <TouchableOpacity
      onPress={() =>{
        navigation.navigate('AboutScreen');
      }}
        style={tw`bg-indigo-800 w-2/3 px-10 py-3 rounded-md my-4`}
      >
        <Text style={tw`text-white`}>About</Text>
      </TouchableOpacity>
      <Text>Template by {Author}</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
