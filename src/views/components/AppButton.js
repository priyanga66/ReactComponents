import React from 'react';
import { Text,StyleSheet, TouchableOpacity } from 'react-native';

function AppButton({title,onPress,buttonColor}) {
    return (
        <TouchableOpacity style={[styles.buttonStyle,{backgroundColor:buttonColor}]} onPress={onPress}>
           <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

export default AppButton;

const styles = StyleSheet.create({
    buttonStyle:{
        width:"100%",
        height:50,
        backgroundColor:'gold',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        fontSize:20,
        color:'black',
        fontFamily:"Rubik-Black"
    }
})