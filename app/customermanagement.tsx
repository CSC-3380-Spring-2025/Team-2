import { Text, View, StyleSheet,Button, Image, Platform,} from 'react-native';
import react from 'react';

export default function CustomerManagement() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>manage customers</Text>
            <Text
            style={{
                display:"flex",
                flex:0,
                justifyContent:"center",
                top:0,
                marginTop:10,

            }}
            > search bar</Text>

            {history.map((person)=>(
            <View
            id= "person box"
            style={{
                display:"flex",
        flex:1,
        minWidth:300,
        minHeight:80,
        maxWidth:400,
        maxHeight:20,
        marginBottom:0,
        flexDirection:"column",
        backgroundColor:"pink",
        borderRadius:15,
        borderColor:"614938",
        borderWidth:2,
        justifyContent:"flex-start",
        padding:0,
        marginTop:10,

            }}>
            
        <View
        id= "left"
        style={{
            flex:1,
            display:"flex",
            flexDirection:"column",
            maxWidth:600,
            maxHeight:60,
            justifyContent:"flex-start",
            

        }}>
         <Text
         style={{
            display:"flex",
            flex:0,
            justifyContent:"center",
            marginBottom:10,
            textAlign:"left",
            flexDirection:"column",
            right:-40,
            bottom:-10,
         }}
         >{person.name}</Text>
         <Text
         style={{
            display:"flex",
            flex:0,
            justifyContent:"center",
            marginBottom:10,
            textAlign:"left",
            flexDirection:"column",
            right:-40,
            bottom:-10,
         }}
         >{person.phone}</Text>

        </View>
        <View
        id= "right"
        style={{
            display:"flex",
            flex:0,
            justifyContent:"center",
            marginBottom:10,
            flexDirection:"column",
        }}>
            <View
            style={styles.viewProfileButton}>
                <Button
                title="View Profile"
                color={Platform.select({
                    ios: "#F2F1EB",
                    android: "#688a65",
                    default:"#688a65",
                })}
                onPress={()=>{
                    console.log(
                        person.name,
                        person.email, 
                        person.phone,
                        person.address,
                        person.joinDate,

                    )
                
                }}
                ></Button>
            </View>
        </View>
        </View>
        ))}
        
    
        </View>
        

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1 ,
        backgroundColor:"#F2F1EB",
        //justifyContent:"center",
        alignItems:"center",
       
    }, text:{
        color:"#33261D",
        fontSize:25,
    },viewProfileButton:{
        color:"#33261d",
        flex:1,
        borderRadius:5,
        minWidth:250,
        maxHeight:50, 
        right:-50,
        top:-25,
        position:'absolute',
        alignItems:'center',
        
    }
})

var person1={
    name:"Bob",
    email:"person1@gmail.com",
    phone:1231231234,
    address: "123 bob street",
    joinDate:"1/1/2025",
       
}
var person2={
    name:"randy",
    email:"person2@gmail.com",
    phone:1231231234,
    address: "123 randy street",
    joinDate:"1/1/2025",

}
var person3={
    name:"jill",
    email:"person3@gmail.com",
    phone:1231231234,
    address: "123 jill street",
    joinDate:"1/1/2025",

}
var person4={
    name:"steve",
    email:"person4@gmail.com",
    phone:1231231234,
    address: "123 steve street",
    joinDate:"1/1/2025",

}

var history=[person1,person2,person3, person4];

