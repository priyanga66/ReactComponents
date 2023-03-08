import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppButton from '../components/AppButton';

function ListingEditSreen(props) {
  return (
    <View style={styles.parentContainer}>
      <Icon name={'camera-account'} size={100} color={'gray'} />
      <TextInput style={styles.inputStyles} placeholder={'Title'} />
      <TextInput style={styles.inputStyles} placeholder={'Description'} />
      <TextInput style={styles.inputStyles} placeholder={'Price'} />
      <View style={{margin: 10}}></View>
      <AppButton title={'Post'} buttonColor={'#A2AD9C'} />
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  inputStyles: {
    margin: 10,
    width: '90%',
    backgroundColor: '#EBF4DA',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default ListingEditSreen;
