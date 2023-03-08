import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StackNavigator from './StackNavigator';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
//Version 1
//Setting Tab Navigation
/*
function TabNavigation(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
*/

//Version 2
//Customizing Tabs
/*
function TabNavigation(props) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: 'tomato',
        tabBarInactiveBackgroundColor: '#eee',
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
*/

//Version 3
//Customizing Tabs badge icons
/*
function TabNavigation(props) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: 'tomato',
        tabBarInactiveBackgroundColor: '#eee',
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Icon name={'home'} size={25} color={'blue'} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: () => <Icon name={'cog'} size={25} color={'blue'} />,
          tabBarLabelStyle: {fontSize: 15},
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
*/

//Version 4
//Nesting Navigation

function TabNavigation(props) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: 'tomato',
        tabBarInactiveBackgroundColor: '#eee',
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          tabBarIcon: () => <Icon name={'home'} size={25} color={'blue'} />,
          // headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: () => <Icon name={'cog'} size={25} color={'blue'} />,
          tabBarLabelStyle: {fontSize: 15},
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
