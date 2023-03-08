import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../views/screens/LoginScreen';
import RegisterScreen from '../views/screens/RegisterScreen';
import ListingScreen from '../views/screens/ListingScreen';
import FeedNavigator from './FeedNavigator';
const Stack = createStackNavigator();

function LoginNavigator(props) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
      <Stack.Screen name={'FeedNavigator'} component={FeedNavigator} />
    </Stack.Navigator>
  );
}

export default LoginNavigator;
