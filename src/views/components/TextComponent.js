import React from 'react';
import { View,Text } from 'react-native';

/**
 * 
 * Topics 
 * 1. Text
 * 2. [Custom Fonts] create react-native-config.js file in root for adding custom fonts
 * 2a) Download Fonts from Google Fonts
 * 2b) create react-native.config.js file and add the code
 * 2c) npx react-native-asset
 * 2d) restart the project
 * 
 */

function TextComponent() {
    return (
        <View style={
          { 
              backgroundColor:"pink",
              flex:1
          }
          }>
        <Text style={{
            fontSize:20,
            color:'blue',
            fontFamily:"Rubik-ExtraBold",
        }}>React Native Text</Text>
        </View>
      );
}


export default TextComponent;