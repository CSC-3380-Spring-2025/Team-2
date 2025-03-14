import { Text, View, StyleSheet, Button,Platform, } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Manage Menu</Text>
      <View style={styles.Button}>
        <Button
        title= "Add Item"
        color={Platform.select({
            ios: '#F2F1EB',
            android: '#688a65',
            default: '#688a65'
        })}
        onPress={()=>{
            console.log("add item");
        }}
         >   

        </Button>
      </View>
    </View>   
  );
}
// <Button style={styles.Button} title="Add Item" onPress={() => alert('Add Item')} />
  //test
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2F1EB',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#33261D',
    },
    Button:{// hopefully will be the add items button 
        color: '#33261D',//adjust color later
        // want to be in the top 
        minHeight:35,
        minWidth:35,
        maxWidth:45,
        marginTop:20,
    }
  });
