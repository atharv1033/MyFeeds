import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Main from './components/mainPage';
import Login from './components/loginPage';
import Signup from './components/signupPage';
import Feeds from './components/feedsPage';

export default function App() {

  const Stack = createStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" >
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Feeds" component={Feeds} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}