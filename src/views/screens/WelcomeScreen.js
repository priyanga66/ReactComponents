import React from 'react';
import {Image, View, StyleSheet, ImageBackground, Text} from 'react-native';
import AppButton from '../components/AppButton';
import Color from '../../config/Color';

function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
      style={styles.parentContainer}
      source={require('../../assets/Images/loginbkg.png')}>
      <View style={{flex: 6, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../assets/Images/logo.png')}
          style={{width: 100, height: 100, bottom: 10}}
        />
        <Text style={{fontWeight: 'bold'}}>Get Set Go!!</Text>
      </View>

      {/* Version 1 */}
      {/*  
        <View style={{flex:1,height:50,backgroundColor:'#FFc733'}}>   
        </View>
        <View style={{flex:1,height:50,backgroundColor:'#5ed674'}}>
        </View> 
       */}

      {/* Version 2 */}

      <AppButton
        title="Login"
        onPress={() => navigation.navigate('LoginScreen')}
        buttonColor={Color.lightOrange}
      />
      <AppButton
        title="Register"
        onPress={() => navigation.navigate('RegisterScreen')}
        buttonColor={Color.lightGreen}
      />
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
});
