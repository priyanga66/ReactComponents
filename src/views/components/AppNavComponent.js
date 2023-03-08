import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AppText from './AppText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function AppNavComponent(props) {
  return (
    <View style={[styles.parentContainer, {marginTop: props.compStyle}]}>
      <AppText style={styles.textStyle}>{props.title}</AppText>
      <Icon name={'chevron-right'} size={29} color={'black'} />
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textStyle: {
    textAlign: 'left',
    fontFamily: 'Rubik-Regular',
    fontSize: 20,
    color: 'black',
    textTransform: 'none',
  },
});
export default AppNavComponent;
