import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function NewListButton(props) {
  return (
    <TouchableOpacity style={styles.parentContainer} onPress={props.onPress}>
      <Icon name={'plus-circle'} size={50} color={'white'} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    height: 80,
    width: 80,
    borderRadius: 40,
    bottom: 20,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default NewListButton;
