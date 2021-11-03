import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "./store";
import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>

      <SafeAreaProvider>

        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false}} />
          <Stack.Screen name="AboutScreen" component={AboutScreen} options={{ headerShown: false}} />
        </Stack.Navigator>
        
      </SafeAreaProvider>

      </NavigationContainer>
      
    </Provider>
  );
}


