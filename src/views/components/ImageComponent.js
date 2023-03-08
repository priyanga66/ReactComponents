import React from 'react';
import { View,Text,Image } from 'react-native';

/**
 * Topics 
 * 1. Images
 * 2. Adding Image in Asset folder
 * 3. Close the metro bundler and rerun the app
 * 4. Explore the properties in dev documentation
 * 5. Image returns the number
 */

function ImageComponent(props) {
    console.log("require returns the index number of the image in assets folder ==> ",require("../../assets/Images/RNIcon.png"))
    return (
        <View style={
          { 
              backgroundColor:"yellow",
              flex:1,
              alignItems:'center',
              justifyContent:'center'
          }
          }>
        <Text style={{
            fontSize:20,
            color:'blue',
            fontFamily:"Rubik-ExtraBold",
        }}>React Native Text</Text>

{/* React native will take the metadata of the image when the image is stored locally but anyhow we can add width and height */}
         <Image source={require("../../assets/Images/RNIcon.png")}
                style={{width:200,height:200}}/> 
 {/* Download network Image (Width and height is mandatory here*/}
        <Image source={{uri:"https://picsum.photos/200/300"}}
          style={{width:200,height:200}}
         />      
        </View>
      );}

export default ImageComponent;