import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function AppInputs(props) {
  return (
    <View style={styles.parentContainer}>
      <Icon name={props.icon} size={props.iconSize} color={props.iconColor} />
      <TextInput style={styles.textInputStyle} placeholder={props.hintText} />
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    width: '100%',
    height: 60,
    // borderColor: 'red',
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyle: {
    height: 50,
    width: '85%',
    // borderColor: 'green',
    // borderWidth: 1,
    backgroundColor: '#EBF4FA',
  },
});
export default AppInputs;
