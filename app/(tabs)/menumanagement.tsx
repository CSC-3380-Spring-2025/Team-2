//fixed buttons

import { Text, View, StyleSheet, Button, Platform, Dimensions, Image, } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';


const { height, width, } = Dimensions.get('window');
const vw = width / 100;
const vh = height / 100;


export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.ButtonAdd}>
        <Button
        title= "Add Item"
        color={Platform.select({
            ios: '#F2F1EB',
            android: '#688a65',
            default: '#688a65',
        })}
        onPress={()=>{
            console.log("add item");
        }}
         > 
        </Button>
      </View>
      <View style={styles.ButtonDelete}>
        <Button
        title="Delete Item"
        color={Platform.select({
          ios:'#F2F1EB',
          android:"#688a66",
          default:"#688a66",
        })}
        onPress={()=>{
          console.log("delete item");
        }}>

        </Button>
      </View>
      <View
      id= "drink"
      style={{
        display:'flex',
        flex:5,
        minWidth:300,
        minHeight:150,
        maxWidth:400,
        maxHeight:200,
        marginBottom:60,
        flexDirection:"column",
        backgroundColor:"pink",
        borderRadius:15, 
        borderColor:"614938",
        borderWidth:2,
        justifyContent:"flex-end",
        padding:40,
        
      }}
      >
        <View
        id="top"
        style={{
          display:"flex",
          flex:1,
          flexDirection:"row",
        }}
        >
          
        </View>
        <View
        id="left"
        style={{
          display:"flex",
          flex:0,
          justifyContent:"center",
          padding:100,
        }}
          ></View>
        <Text
        style={{
          display:"flex",
          flex:0,
          justifyContent:"center",
          marginBottom:10,
          textAlign:"right",
          alignItems: "flex-start",
        }}>
          Name: {testItem.itemName}
        </Text>
        <Text
        style={{
          display:"flex",
          flex:0,
          justifyContent:"center",
          marginBottom:10,
          textAlign:"right",
          alignItems: "flex-end",
        }}

        >
          Item type: {testItem.itemType}
        </Text>
        <Text
        style={{
          display:"flex",
          flex:0,
          justifyContent:"center",
          marginBottom:10,
          textAlign:"right",
          alignItems: "flex-end",
        }}
        >
         Description: {testItem.itemDescription}
        </Text>
        <Text
        style={{
          display:"flex",
          flex:0,
          justifyContent:"center",
          marginBottom:10,
          textAlign:"right",
          alignItems: "flex-end",
        }}>
          price: {testItem.itemPrice}
        </Text>
        <Image
      src={testItem.itemImage}
      style={{
        flex:1,
      }}
      resizeMode="contain"
      ></Image>
         <View
      id="right"
      style={{
        display:"flex",
        flex:1,
      }}
      >
      </View> 
      <View
      id= "text"
      style={{
        display:"flex",
        flex:1,
        justifyContent:"center",
        alignItems:"flex-end",
        marginTop:30,
        marginRight:25,
      }}
      >
      </View>
      <View
      id= "bottom"
      style={{
        flex:1,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
      }}
      >
   <View
        style={styles.editButton }>
          <Button
          title= "edit Item"
          
          color={Platform.select({
            ios: "#F2F1EB",
            android: "#688a65",
            default:"#688a65",
          })}
          onPress={()=>{
            console.log("edit item");
          }}>
          </Button>
        </View> 
          <View
        style={styles.onBoxDeleteButton}>
          <Button
          title="delete item"
        
          color={Platform.select({
            ios:"#F2F1EB",
            android:"red",
            default:"red",
          })}
          
          ></Button>
        </View>
      </View>     
      </View>    
      </View>   
  );
}
//add image to top  under the item name
       
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2F1EB',
      justifyContent: 'center',
      //paddingTop:80,
      //alignItems: 'center'
    },
    text: {
      color: '#33261D',
    },
    ButtonAdd:{// hopefully will be the add items button 
        color: '#33261D',//adjust color later
        // want to be in the top 
        flex:1,
        borderRadius:5,
        minWidth:250,
        maxHeight:50, 
        top:30,
        left:50,
        position:'absolute',
        alignItems:'center',
    },
    ButtonDelete:{
      color:'#33261D',
      flex:1,
      borderRadius:5,
      minWidth:250,
      maxHeight:50,  
      position:'absolute',
      top:30,
      right:150,
      alignItems:'center',
    },
    itemContainer:{
      flex:1,
      color:'#33261D',
      height:50,
      width:30,
      position:'absolute',
      
    }, 
    editButton:{
      color:'#33261D',
      flex:1,
      borderRadius:5,
      minWidth:125,
      maxHeight:50,  
      position:'absolute',
      marginTop:100,
      
    },
    onBoxDeleteButton:{
      color:'#33261D',
      flex:1,
      borderRadius:5,
      minWidth:125,
      maxHeight:50,  
      position:'absolute',
      marginTop:100,
      left:150,
    }
  });
 
var testItem={
itemName:"matcha",
itemType:"tea", // coffee, smoothie, etc
itemDescription:"something intresting info",
itemAvaliability: true ,
itemImage:'@/assets/images/splash-icon.png',
itemPrice: 5.00,

};