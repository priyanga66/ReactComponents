import React from 'react';
import {View,StyleSheet, Image} from 'react-native';
import Color from "../../config/Color";

function ViewImageScreen(props) {
    return (
       <View style={styles.parentContainer}>
        <View style = {styles.topContainer}>
        <View style = {styles.leftContainer}>

        </View>
        <View style = {styles.rightContainer}>

        </View>
        </View>
        <View style = {styles.bottomContainer}>
            <Image source={require("../../assets/Images/loginbkg.png")} style={{width:"100%",height:"100%"}}></Image>
        </View>
       </View>
    );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
    parentContainer:{
        flex:1,
        backgroundColor:'white'
    },
    topContainer:{
        flex:1,
        margin:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
      
    },
    bottomContainer:{
        flex:5,
      
        margin:20
    },
    leftContainer:{
    // flex:1,
    backgroundColor:Color.lightGreen,
    width:70,
    height:70
    
    },
    rightContainer:{
      //  flex:1,
        backgroundColor:Color.lightOrange,
        width:70,
        height:70
    }

})