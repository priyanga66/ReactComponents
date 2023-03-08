import React from 'react';
import {View,StyleSheet,Dimensions, SafeAreaView} from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';

/**
 * Detecting Device orientation and setting the view width
 * npm i @react-native-community/hooks and rerun
 * In order to detect the dimensions in device orientation, go for hooks
 */

function DimensionComponent(props) {
    console.log("Dimensions::",Dimensions.get("screen"))
    console.log("Current Dimenstion",useDeviceOrientation())
    const orientation = useDeviceOrientation();
    return (
        
        <View style={{
            width:"100%",
            height:orientation == "landscape"?"100%":"30%",
            backgroundColor:"blue"
        }}>

        </View>
       
       
    );
}

export default DimensionComponent;
const styles = StyleSheet.create({
    parentContainer:{
        width:"100%",
        height:"30%",
        backgroundColor:"blue"
    }
})