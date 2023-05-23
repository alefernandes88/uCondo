import React from 'react'
import { useFonts } from 'expo-font'
import {
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold
} from '@expo-google-fonts/rubik'
import {
  Roboto_400Regular
} from '@expo-google-fonts/roboto'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'react-native'
import { stackList } from './src/components/header-navigator/constraints'

const Stack = createNativeStackNavigator()

const App = () => {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
    Roboto_400Regular
  })

  if (!fontsLoaded) {
    return null
  }

  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#622490'
            },
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: '#622490'
            },
            animation: 'fade_from_bottom'
          }}
        >
            {stackList.map(({ name, options, component }) => (
                <Stack.Screen
                    key={name}
                    name={name}
                    component={component}
                    options={options}
                />
            ))}
        </Stack.Navigator>
        <StatusBar backgroundColor="#622490" />
      </NavigationContainer>
  )
}

export default App
