import React from 'react';
import { useState } from 'react';
import { View,StyleSheet ,Image,FlatList,TouchableHighlight,TouchableOpacity,Alert} from 'react-native';
import { Swipeable,GestureHandlerRootView } from 'react-native-gesture-handler';
import AppText from './AppText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
    {
        id:"1",
        image:require("../../assets/Images/face1.png"),
        title:"Priyanga",
        mail:"priya@gmail.com"
    },
    {
        id:"2",
        image:require("../../assets/Images/face2.png"),
        title:"Avanthi",
        mail:"avanthi@gmail.com"
    },
    {
        id:"3",
        image:require("../../assets/Images/face4.png"),
        title:"Laxmi",
        mail:"laxmi@gmail.com"
    },
];


function FlatlistComponent(props) {

     /************************************************************************************************* */
    // Version 5
    const [refresh,setRefresh] = useState(false);
     /************************************************************************************************* */

    /************************************************************************************************* */
    // Version 4
    const [message,setMessage] = useState(data);
     /************************************************************************************************* */

    /************************************************************************************************* */
    // Version 4
    const renderItemForSwipe = ({item}) =>{   
      return(
        <GestureHandlerRootView>
        <Swipeable renderRightActions={()=><RenderRightAction data = {item}/>}>
        <TouchableHighlight  onPress={()=>Alert.alert(item.title+" tab is Clicked!!") } underlayColor={"grey"}>
            <View style ={styles.parentContainer}>
                <View style={styles.leftContainer}>
                    <Image source={item.image} style={styles.imageStyle}/>
                </View>
                <View style = {styles.rightContainer}>
                    <AppText style={styles.textStyle}>{item.title}</AppText>
                    <AppText  style={styles.textStyle}>{item.mail}</AppText>
                </View>
            </View>
      </TouchableHighlight>
      </Swipeable>
</GestureHandlerRootView>
      )
    }

    const RenderRightAction = ({data}) =>{
        console.log("Item::",data)
        return(
        <TouchableOpacity style={{width:70,backgroundColor:'red', alignItems:'center',justifyContent:'center'}} onPress = {()=>handleDelete(data)}>
          <Icon name = {"delete"} color={"white"} size={50}/>
        </TouchableOpacity>);
    }

    const handleDelete = (item) =>{
     console.log("Delete::",item)
     const msg = message.filter((m)=>m.id!=item.id);
     setMessage(msg);
    }
   
 /************************************************************************************************* */


     // Version 1,2,3
        /************************************************************************************************* */
        /*
    const renderItem = ({item}) =>{   
        return(
          <TouchableHighlight  onPress={()=>Alert.alert(item.title+" tab is Clicked!!") } underlayColor={"grey"}>
              <View style ={styles.parentContainer}>
                  <View style={styles.leftContainer}>
                      <Image source={item.image} style={styles.imageStyle}/>
                  </View>
                  <View style = {styles.rightContainer}>
                      <AppText style={styles.textStyle}>{item.title}</AppText>
                      <AppText  style={styles.textStyle}>{item.mail}</AppText>
                  </View>
              </View>
        </TouchableHighlight>
        )
      }
 */
        /************************************************************************************************* */



    return (
        // Version 1
        /************************************************************************************************* */
        /*
        <View style ={styles.parentContainer}>
          <View style={styles.leftContainer}>
            <Image source={require("../../assets/Images/face1.png")} style={styles.imageStyle}/>
          </View>
          <View style = {styles.rightContainer}>
            <AppText style={styles.textStyle}>Priyanga</AppText>
            <AppText  style={styles.textStyle}>Priya@gmail.com</AppText>
          </View>
        </View>
        */
        /************************************************************************************************* */


        // Version 2
        /************************************************************************************************* */
        /*
        <View style={{flex:1,backgroundColor:'dodgerblue'}}>
         <FlatList
           data={data}
           renderItem={renderItem}
           keyExtractor={item => item.id}/>
        </View>
        */
        /************************************************************************************************* */


         // Version 3 //Touchables
        /************************************************************************************************* */
       /*
        <View style={{flex:1,backgroundColor:'dodgerblue'}}>
         <FlatList
           data={data}
           renderItem={renderItem}
           keyExtractor={item => item.id}
          />
        </View>
        */
        /************************************************************************************************* */

         // Version 4 //Swipeables
        /************************************************************************************************* */
         /*
         <FlatList
           data={message}
           renderItem={renderItemForSwipe}
           keyExtractor={item => item.id}
          />
          */
        /************************************************************************************************* */

        // Version 5 //Pull To Refresh
        /************************************************************************************************* */
        <FlatList
        data={message}
        renderItem={renderItemForSwipe}
        keyExtractor={item => item.id}
        refreshing = {refresh}
        onRefresh={()=>{
            setMessage([
                {
                    id:"1",
                    image:require("../../assets/Images/face1.png"),
                    title:"Priyanga",
                    mail:"priya@gmail.com"
                },
                {
                    id:"2",
                    image:require("../../assets/Images/face2.png"),
                    title:"Avanthi",
                    mail:"avanthi@gmail.com"
                },
                {
                    id:"3",
                    image:require("../../assets/Images/face4.png"),
                    title:"Laxmi",
                    mail:"laxmi@gmail.com"
                },
            ]);
        }}

       />
     /************************************************************************************************* */

 
    );
}

export default FlatlistComponent;
const styles = StyleSheet.create({
    parentContainer:{
        backgroundColor:'white',
       // height:70,
        marginVertical:20,
        flexDirection:'row',
        // borderColor:'green',
        // borderWidth:1
    },
    leftContainer:{
      flex:1,
    //   borderColor:'blue',
    //   borderWidth:1
    },
    rightContainer:{
     flex:3,
     marginLeft:10,
    //  borderColor:'red',
    //  borderWidth:1
    },
    imageStyle:{
        width:90,
        height:70
    },
    textStyle:{
        textAlign:'left',
        fontFamily:'Rubik-Regular',
        fontSize:20,
        color:'black',
        textTransform:"none"
    }
})