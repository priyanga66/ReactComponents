import React from 'react';
import { Text,StyleSheet, Platform } from 'react-native';

// Platform specific codes explain

function AppText(props) {
    return (
        <Text style = {[styles.textStyle,props.style]}>
            {props.children}
        </Text>
    );
}

export default AppText;

const styles = StyleSheet.create({
    textStyle:{
        ...Platform.select({
            ios:{
                fontFamily:'Avenir',
                color:'green',
            },
            android:{
                fontFamily:'Rubik-Black',
                color:'tomato',
            }
        }),
       
        fontSize:30,
        fontWeight:'300',
        fontStyle:'normal',
       
        textAlign:'center',
        textTransform:'capitalize',
        lineHeight:30

    }
})