//menu screen
import { Text, View, StyleSheet,Button, Image, Platform,} from 'react-native';


export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Menu</Text>
      <Text
      style ={{
        display:"flex",
        flex:0,
        justifyContent:"center",
        top:0,
        marginTop:10,
        }}
      >
        search bar    
      </Text>
      <View
      id="top buttons"
      style={{
        display:"flex",
        flex:0,
        flexDirection:"row",
        maxWidth:600,
        maxHeight:60,
        justifyContent:"flex-start",
        alignItems:"center",
      

      }}
      >
        <View
        style={styles.itemButton}>
          <Button
          title="milk tea"
          color={Platform.select({
            ios: "#F2F1EB",
            android: "#688a65",
            default:"#688a65",
          })}
          onPress={()=>{
            console.log("milk tea");
          }}
          ></Button>
        </View>
        <View
        style={styles.itemButton}>
          <Button
          title="fruit tea"
          color={Platform.select({
            ios: "#F2F1EB",
            android: "#688a65",
            default:"#688a65",
          })}
          onPress={()=>{
            console.log("fruit tea");
          }}
          ></Button>
        </View>
        <View
        style={styles.itemButton}>
          <Button
          title="coffee"
          color={Platform.select({
            ios: "#F2F1EB",
            android: "#688a65",
            default:"#688a65",
          })}
          onPress={()=>{
            console.log("coffee");
          }}
          ></Button>
        </View>
        <View
        style={styles.itemButton} >
          <Button
          title="favorites"
          color={Platform.select({
            ios: "#F2F1EB",
            android: "#688a65",
            default:"#688a65",
          })}
          onPress={()=>{
            console.log("favorites");
          }}
          ></Button>
        </View>
      </View>
      <View>
      {history.map((item, index) => (

      <View
      id="menu items"
      style={{
        display:"flex",
        flex:1,
        minWidth:300,
        minHeight:150,
        maxWidth:400,
        maxHeight:200,
        marginBottom:0,
        flexDirection:"column",
        backgroundColor:"pink",
        borderRadius:15,
        borderColor:"614938",
        borderWidth:2,
        justifyContent:"flex-start",
        padding:0,
        marginTop:10,
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
          <Image
          src={item.itemImage}
          style={{
            flex:1,
           resizeMode:"contain",
          }}
          ></Image>
          <View
          style={styles.favorites}>
            <Button
            title="favorite"
            color={Platform.select({
              ios: "#F2F1EB",
              android: "#688a65",
              default:"#688a65",
            })}
            onPress={()=>{
              console.log("added to favorites");
            }}
            ></Button>
          </View>
        </View>
        <View
        id="middle"
        style={{
          display:"flex",
          flex:1,
          justifyContent:"center",
          flexDirection:"column",
         marginBottom:30,
        }}
        >
          <Text
          style={{
            display:"flex",
            flex:0,
            justifyContent:"center",
            marginBottom:10,
            textAlign:"center",
            flexDirection:"column",

          }}
          >{item.itemName}</Text>
          <Text
           style={{
            display:"flex",
            flex:0,
            justifyContent:"center",
            marginBottom:10,
            textAlign:"center",
            flexDirection:"column",

          }}
          > ${item.itemPrice}</Text>
        </View>
        <View
        id="bottom"
        style={{
          display:"flex",
          flex:0,
          flexDirection: "row",
          justifyContent:"space-between",
          
          
        }}
        >
          <View
          id="left"
          style={{
            display:"flex",
            flex:0,
          }}
         
          >
            <View
             style={styles.addbutton}>
              <Button
              title= "add to cart"
              color={Platform.select({
                ios: "#F2F1EB",
                android: "#688a65",
                default:"#688a65",
              })}
              onPress={()=>{
                console.log("added to cart");
              }}

          
              ></Button>
             </View>

          </View>
          <View
          id="right"
          style={{
            display:"flex",
            flex:0,

          }}
          >
            <View
            style={styles.itemCustomization}
            >
              <Button
              title="customize item"
              color={Platform.select({
                ios: "#F2F1EB",
                android: "#688a65",
                default:"#688a65",

              })}
              onPress={()=>{
                console.log("customize item");
              }}
              ></Button>
            </View>
          </View>

        </View>

        </View>
      ))}
        

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F1EB',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    color: '#33261D',
    top :0,
    fontSize:30,

  }, itemButton:{
    color:"#33261d", 
    borderRadius:5,
    maxHeight:60, 
    minWidth:100,
   marginHorizontal:2,
    alignItems:'center',
    padding:10,

    }, addbutton:{
    color:'#33261D',
    flex:1,
    borderRadius:5,
    minWidth:125,
    maxHeight:50,  
    position:'absolute',
    left:5,
    top:-45,

    
  }, itemCustomization:{
    color:'#33261D',
    flex:1,
    borderRadius:5,
    minWidth:125,
    maxHeight:50,  
    position:'absolute',
    right:5,
    top:-45,
   
  }, favorites:{
    color:'#33261D',
    flex:1,
    borderRadius:5,
    minWidth:60,
    maxHeight:50,
    position:'absolute',
    padding:5,



  }
});


var item1={
  itemName:"milk tea",
  itemPrice:5,
  itemDescription:"milk tea with boba",
  itemImage:"https://www.eatingbirdfood.com/wp-content/uploads/2021/04/iced-matcha-latte-hero.jpg",
  itemAvailable:true,
}

var item2={
  itemName:"fruit tea",
  itemPrice:4,
  itemDescription:"tea with fruit",
  itemImage:"https://myveganminimalist.com/wp-content/uploads/2022/04/Strawberry-Milk-Tea-Boba-11.jpg",
  itemAvailable:true,
}

var item3={
  itemName:"coffee",
  itemPrice: 3,
  itemDescription:"coffee",
  itemImage:"https://wallpapersok.com/images/hd/bubble-tea-classic-brown-sugar-1ovssntxjtitoj65.jpg",
  itemAvailable:true,
}


var history=[item1, item2, item3];
