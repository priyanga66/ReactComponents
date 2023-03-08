import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../views/screens/WelcomeScreen';
import LoginScreen from '../views/screens/LoginScreen';
import RegisterScreen from '../views/screens/RegisterScreen';
import FeedNavigator from './FeedNavigator';

const Stack = createStackNavigator();

function AuthNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#43C6DB'},
          headerTitle: 'Login',
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#43C6DB'},
          headerTitle: 'Register',
        }}
      />

      <Stack.Screen name={'FeedNavigator'} component={FeedNavigator} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
