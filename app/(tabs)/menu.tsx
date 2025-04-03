//menu screen
import { Text, View, StyleSheet,Button, Image, Platform,} from 'react-native';

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Menu screen</Text>
      <Text
      style ={{
        display:"flex",
        flex:0,
        justifyContent:"center",
        top:30,
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
        maxWidth:400,
        maxHeight:100,
        justifyContent:"flex-end",

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
          ></Button>
        </View>
      </View>
      <View
      id="menu items"
      style={{
        display:"flex",
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
          src={testItem.itemImage}
          style={{
            flex:1,
          }}
          ></Image>
        </View>
        <View
        id="middle"
        style={{
          display:"flex",
          flex:0,
          justifyContent:"center",
          flexDirection:"column",
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
          >{testItem.itemName}</Text>
          <Text
           style={{
            display:"flex",
            flex:0,
            justifyContent:"center",
            marginBottom:10,
            textAlign:"center",
            flexDirection:"column",

          }}
          > ${testItem.itemPrice}</Text>
        </View>
        <View
        id="bottom"
        style={{
          display:"flex",
          flex:0
        }}
        >
          <View
          id="left"
          style={{
            display:"flex",
            flex:0,
          }}
          >

          </View>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F1EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#33261D',

  }, itemButton:{
    color:"#33261d", 
    borderRadius:5,
    maxHeight:50, 
    minWidth:250,
    position:'absolute',
    alignItems:'center',
  }, addbutton:{
    color:'#33261D',
    flex:1,
    borderRadius:5,
    minWidth:125,
    maxHeight:50,  
    position:'absolute',
    marginTop:100,

  }, itemCustomization:{
    color:'#33261D',
    flex:1,
    borderRadius:5,
    minWidth:125,
    maxHeight:50,  
    position:'absolute',
    marginTop:100,

  }, 
});

var testItem={
  itemName:"milk tea",
  itemPrice:5,
  itemDescription:"milk tea with boba",
  itemImage:'@/assets/images/splash-icon.png',
  itemAvailable:true,
}
