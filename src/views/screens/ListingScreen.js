import React from 'react';
import { FlatList } from 'react-native';
import CardComponent from '../components/CardComponent';

const data = [
    {
    id:"1",
    image:require("../../assets/Images/roomBkg.png"),
    hotelName:"Hotel Nature",
    price:"$200"
},
    {
    id:"2",
    image:require("../../assets/Images/roomBkg1.png"),
    hotelName:"Hotel Shine",
    price:"$300"
},
    {
    id:"3",
    image:require("../../assets/Images/singlebedRoom.png"),
    hotelName:"Home Style Hotel",
    price:"$500"
},
    {
    id:"4",
    image:require("../../assets/Images/MirrorRooms.png"),
    hotelName:"Hotel Lake View",
    price:"$800"
},
]

function ListingScreen(props) {
    return (
       <FlatList
         data={data}
         renderItem={({item})=><CardComponent cardData = {item}/>}
         keyExtractor = {(item)=>{item.id}}
       />
    );
}

export default ListingScreen;