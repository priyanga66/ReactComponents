import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//Version 1
//Just creating two screens and put it inside a navigator
/*
const Stack = createStackNavigator();
const Landing = () => {
  return (
    <View style={{backgroundColor: 'pink', flex: 1}}>
      <Text>Landing screen</Text>
    </View>
  );
};
const Second = () => {
  return (
    <View style={{backgroundColor: 'yellow', flex: 1}}>
      <Text>Second screen</Text>
    </View>
  );
};
function StackNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Landing}></Stack.Screen>
      <Stack.Screen name="Next" component={Second}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default StackNavigator;
*/

// Version 2
// Navigating between screens
/*
const Stack = createStackNavigator();
const Landing = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'pink', flex: 1}}>
      <Text>Landing screen</Text>
      <Button title="Click me" onPress={() => navigation.navigate('Next')} />
    </View>
  );
};
const Second = () => {
  return (
    <View style={{backgroundColor: 'yellow', flex: 1}}>
      <Text>Second screen</Text>
    </View>
  );
};
function StackNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Landing}></Stack.Screen>
      <Stack.Screen name="Next" component={Second}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default StackNavigator;

*/

//Version 3
//Navigating from componenets
/*
const Stack = createStackNavigator();
const Link = () => {
  const navigation = useNavigation();
  return (
    <Button title="Click me" onPress={() => navigation.navigate('Next')} />
  );
};
const Landing = () => {
  return (
    <View style={{backgroundColor: 'pink', flex: 1}}>
      <Text>Landing screen</Text>
      <Link />
    </View>
  );
};
const Second = () => {
  return (
    <View style={{backgroundColor: 'yellow', flex: 1}}>
      <Text>Second screen</Text>
    </View>
  );
};
function StackNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Landing}></Stack.Screen>
      <Stack.Screen name="Next" component={Second}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default StackNavigator;
*/

//Version 4
//Passing params
/*
const Stack = createStackNavigator();
const Landing = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'pink', flex: 1}}>
      <Text>Landing screen</Text>
      <Button
        title="Click me"
        onPress={() => navigation.navigate('Next', {id: 1})}
      />
    </View>
  );
};
const Second = ({route}) => {
  return (
    <View style={{backgroundColor: 'yellow', flex: 1}}>
      <Text>Second screen ID {route.params.id}</Text>
    </View>
  );
};
function StackNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Landing}></Stack.Screen>
      <Stack.Screen name="Next" component={Second}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default StackNavigator;
*/

//Version 5
//Setting screen title
/*
const Stack = createStackNavigator();
const Landing = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'pink', flex: 1}}>
      <Text>Landing screen</Text>
      <Button
        title="Click me"
        onPress={() => navigation.navigate('Next', {id: 1})}
      />
    </View>
  );
};
const Second = ({route}) => {
  return (
    <View style={{backgroundColor: 'yellow', flex: 1}}>
      <Text>Second screen ID {route.params.id}</Text>
    </View>
  );
};
function StackNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Landing}
        // options={{title: 'Landing screen'}} // Static Title
      />
      <Stack.Screen
        name="Next"
        component={Second}
        options={({route}) => ({title: route.params.id})} //Dynamic Title
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
*/

//Version 6
//Customizing headers

const Stack = createStackNavigator();
const Landing = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'pink', flex: 1}}>
      <Text>Landing screen</Text>
      <Button
        title="Click me"
        onPress={() => navigation.navigate('Next', {id: 1})}
      />
    </View>
  );
};
const Second = ({route}) => {
  return (
    <View style={{backgroundColor: 'yellow', flex: 1}}>
      <Text>Second screen ID {route.params.id}</Text>
    </View>
  );
};
function StackNavigator(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'blue'},
        headerTintColor: 'white',
        //  headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={Landing}
        options={{
          headerStyle: {backgroundColor: 'green'},
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          //  headerShown: false,
        }}></Stack.Screen>
      <Stack.Screen name="Next" component={Second}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default StackNavigator;
