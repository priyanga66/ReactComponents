import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListingEditSreen from '../views/screens/ListingEditSreen';
import ListingScreen from '../views/screens/ListingScreen';
import AccountScreen from '../views/screens/AccountScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NewListButton from '../views/components/NewListButton';

const Tab = createBottomTabNavigator();
function FeedNavigator(props) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarLabelStyle: {fontSize: 15},
      }}>
      <Tab.Screen
        name={'ListingScreen'}
        component={ListingScreen}
        options={{
          tabBarIcon: () => <Icon name={'home'} size={25} color={'tomato'} />,
        }}
      />
      <Tab.Screen
        name={'ListingEditSreen'}
        component={ListingEditSreen}
        options={({navigation}) => ({
          tabBarButton: () => (
            <NewListButton
              onPress={() => navigation.navigate('ListingEditSreen')}
            />
          ),
        })}
      />
      <Tab.Screen
        name={'Account'}
        component={AccountScreen}
        options={{
          tabBarIcon: () => (
            <Icon name={'account'} size={25} color={'tomato'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default FeedNavigator;
