import React from 'react';
import {Text, View} from 'react-native';

import AppText from './AppText';

function StyleComponenent(props) {
  return (
    <>
      {/* Borders and Shadows */}
      {/* 
        <View style={{
            backgroundColor:'white',
            justifyContent:'space-around',
            alignItems:"center",
            flex:1,
            flexDirection:'row'
            
           }}>
                   
                    <View style={{
                    backgroundColor:'gold',
                    width:100,
                    height:100,
                    borderColor:'dodgerblue',
                    borderWidth:10,
                // borderRadius:50 // Perfect Circle
                borderTopLeftRadius:50
                    }}>

                    </View>
                   

                    <View style={{
                    backgroundColor:'gold',
                    width:100,
                    height:100,
                    shadowColor:'red',
                    shadowOffset: {width:10,height:10},
                    shadowOpacity:1,
                    elevation:40
                    }}>

                    </View>
        </View>
 */}

      {/* Padding */}
      {/* 
        <View style={{
            backgroundColor:'white',
            justifyContent:'space-around',
            alignItems:"center",
            flex:1,
            flexDirection:'row'
            
           }}>
           
                        <View style={{
                        backgroundColor:'dodgerblue',
                        width:100,
                        height:100,
                        padding:10
                    
                        }}>
                                <View style={{
                            backgroundColor:'gold',
                            width:50,
                            height:50,
                        
                            }}>
                                
                            </View>
                         </View>
              
             
        </View>
        */}

      {/* Margins */}
      {/*
        <View style={{
            backgroundColor:'white',
            justifyContent:'center',
            alignItems:"center",
            flex:1,
            flexDirection:'row'
            
           }}>
            
                        <View style={{
                        backgroundColor:'dodgerblue',
                        width:100,
                        height:100,
                       margin:20
                    
                        }}>
                              
                         </View>
              
               <View style={{
            backgroundColor:'gold',
            width:100,
            height:100,
           
            }}>

              </View>
             
        </View>
        */}

      {/* Text Styling */}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: 'Rubik-Black',
            fontSize: 30,
            fontWeight: '300',
            fontStyle: 'italic',
            color: 'blue',
            textAlign: 'center',
            textTransform: 'capitalize',
            lineHeight: 30,
          }}>
          I love react native ! This is my first sample react native app. Here's
          adding some more text to explain line height
        </Text>
        {/* Custom components */}
        <AppText>Hi Custom components</AppText>
      </View>
    </>
  );
}

export default StyleComponenent;
