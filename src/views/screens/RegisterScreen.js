import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import AppInputs from '../components/AppInputs';
import AppButton from '../components/AppButton';

function RegisterScreen(props) {
  return (
    <View style={styles.parentContainer}>
      <Image
        source={require('../../assets/Images/logo.png')}
        style={{width: 100, height: 100, bottom: 10}}
      />
      <AppInputs
        icon={'account'}
        iconSize={35}
        iconColor={'gray'}
        hintText={'Name'}
      />
      <AppInputs
        icon={'email'}
        iconSize={35}
        iconColor={'gray'}
        hintText={'Email ID'}
      />
      <AppInputs
        icon={'lock'}
        iconSize={35}
        iconColor={'gray'}
        hintText={'Password'}
      />
      <View style={{margin: 10}}></View>
      <AppButton title={'Register'} buttonColor={'#43C6DB'} />
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RegisterScreen;
