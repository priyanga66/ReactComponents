import React from 'react';
import { View,StyleSheet,Text,Image } from 'react-native';
import AppText from './AppText';

function CardComponent({cardData}) {
    return (
        <>
       <View style={styles.cardContainer}>
        <Image source={cardData.image}style={styles.cardImage}></Image>
        <View style ={styles.detailContainer}>
            <AppText style = {{color:'black',fontFamily:"Rubik-Medium",fontSize:25}}>{cardData.hotelName}</AppText>
            <AppText style = {{color:'green',fontFamily:"Rubik-MediumItalic",fontSize:25}}>Price : {cardData.price}</AppText>
        </View>   
       </View>

       {/* <View style={styles.cardContainer}>
        <Image source={require("../../assets/Images/MirrorRooms.png")}style={styles.cardImage}></Image>
        <View style ={styles.detailContainer}>
            <AppText style = {{color:'black',fontFamily:"Rubik-Medium",fontSize:25}}>Mirror Rooms</AppText>
            <AppText style = {{color:'green',fontFamily:"Rubik-MediumItalic",fontSize:25}}>Price : Rs.4500 / Day</AppText>
        </View>   
       </View> */}
       </>
    )
}

export default CardComponent;

const styles = StyleSheet.create({
    cardContainer:{
       // flex:1,
        height:300,
        backgroundColor:'#F0F0F0',
        // borderColor:'red',
        // borderWidth:1,
        margin:15,
        borderRadius:8,
        
    },
    cardImage:{
        width:"100%",
        height:220
    },
    detailContainer:{
        marginHorizontal:5,
        padding:5,
        alignItems:'flex-start',
        // borderColor:'blue',
        // borderWidth:1
    }
})