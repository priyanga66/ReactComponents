import React from 'react';
import {View} from 'react-native';
import CoreComponentScreen from './src/views/screens/CoreComponentScreen';
import ViewImageScreen from './src/views/screens/ViewImageScreen';
import WelcomeScreen from './src/views/screens/WelcomeScreen';
import ListingScreen from './src/views/screens/ListingScreen';
import MyImagePicker from './src/views/screens/MyImagePicker';

import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigations/StackNavigator';
import TabNavigation from './src/navigations/TabNavigation';
import LoginScreen from './src/views/screens/LoginScreen';
import RegisterScreen from './src/views/screens/RegisterScreen';
import AuthNavigator from './src/navigations/AuthNavigator';
import AccountScreen from './src/views/screens/AccountScreen';
import ListingEditSreen from './src/views/screens/ListingEditSreen';
import FeedNavigator from './src/navigations/FeedNavigator';

import LoginNavigator from './src/navigations/LoginNavigator';
const App = () => {
  return (
    //  Explains individual components
    // <CoreComponentScreen />

    //Explains the sample app
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <ListingScreen />

    //Explains the native module access
    // <MyImagePicker />

    //Stack navigation
    // <NavigationContainer>
    //   <StackNavigator />
    // </NavigationContainer>

    //Tab Navigation
    // <NavigationContainer>
    //   <TabNavigation />
    // </NavigationContainer>

    // <LoginScreen />
    // <RegisterScreen />

    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>

    // <AccountScreen />
    // <ListingEditSreen />

    // <NavigationContainer>
    //   <FeedNavigator />
    // </NavigationContainer>

    //Nesting Tab inside a stack
    // <NavigationContainer>
    //   <LoginNavigator />
    // </NavigationContainer>
  );
};

export default App;
