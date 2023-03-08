import React from 'react';
import { View,Text,Image,TouchableWithoutFeedback,TouchableOpacity ,Button,Alert,Dimensions} from 'react-native';

function TouchablesComponent(props) {
    console.log("Dimensions::",Dimensions.get("screen"))
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
        <TouchableOpacity onPress={()=>console.log("Pressed")}>
        {/* Download network Image (Width and height is mandatory here*/}
        <Image source={{uri:"https://picsum.photos/200/300"}}
                style={{width:200,height:200}}
                />   
        </TouchableOpacity>

        <Button title='My First Button' onPress={()=>alert("Button 1 Clicked")}/>
        {/* Alert is not a component with visual representation. 
        It is an object with 2 methods.
        API will get mapped to the native equivalent */}
        <Button title='My Second Button' onPress={()=>Alert.alert("My Title","My Message",[
            {text:"Yes",onPress:()=>alert("YES Clicked!")},
            {text:"No",onPress:()=>alert("NO Clicked!")}
        ])} color = {'red'}/>
        </View>
      );
}

export default TouchablesComponent;