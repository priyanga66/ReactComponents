import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import AppText from '../components/AppText';
import AppNavComponent from '../components/AppNavComponent';

function AccountScreen(props) {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.leftContainer}>
          <Image
            source={require('../../assets/Images/face1.png')}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.rightContainer}>
          <AppText style={styles.textStyle}>{'Priyanga'}</AppText>
          <AppText style={styles.textStyle}>{'asrpriya66@gmail.com'}</AppText>
        </View>
      </View>
      <AppNavComponent title={'My Listings'} compStyle={5} />
      <AppNavComponent title={'My Account'} />
      <AppNavComponent title={'Logout'} compStyle={10} />
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: '#E5E4E2',
  },
  innerContainer: {
    backgroundColor: 'white',
    // height:70,
    marginVertical: 20,
    flexDirection: 'row',
    // borderColor:'green',
    // borderWidth:1
  },
  leftContainer: {
    flex: 1,
    //   borderColor:'blue',
    //   borderWidth:1
  },
  rightContainer: {
    flex: 3,
    marginLeft: 10,
    //  borderColor:'red',
    //  borderWidth:1
  },
  imageStyle: {
    width: 90,
    height: 70,
  },
  textStyle: {
    textAlign: 'left',
    fontFamily: 'Rubik-Regular',
    fontSize: 20,
    color: 'black',
    textTransform: 'none',
  },
});
export default AccountScreen;
