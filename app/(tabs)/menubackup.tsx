import React from 'react';
import { Link } from 'expo-router';
import { Button, Dimensions, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { db } from '@/FirebaseConfig';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where, } from 'firebase/firestore';

let data: any = [
  {
    name: 'matcha',
    cost: 7.50,
  },
  {
    name: 'brown sugar',
    cost: 5.50,
  },
  {
    name: 'strawberry',
    cost: 8.50,
  },
];

// async function fetchDataFromFireStore() {
//   const querySnapshot = await getDocs(collection(db, "menu"));
//   querySnapshot.forEach((doc) => {
//     data.push({ id: doc.id, ...doc.data() });
//   });
//   console.log(data);
//   return data;
// }

function GenerateMerch() { // gets all unprocesss orders from database and displays them; only visible to admin
  function add(customer: string) {// adds to cart
    alert("item added!");
  }

  return ( //item.whatever has to be the same property name as set in the database. Any typos or alterations will not reflect in the app.
    <View>
      {data.map((item: any) => (
        <View
          id='merch'
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            borderRadius: 15,
            borderColor: '#614938',
            borderWidth: 3,
            minHeight: 150,
            margin: 16,
          }}>
          <View
            id='left'
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              paddingLeft: 10,

            }}
          >
            <Text>{item.name}</Text>
            <Text>{'$'}{item.cost}</Text>
          </View>
          <View
            id='right'
            style={{
              display: 'flex',
              flex: 1,
              backgroundColor: 'pink',
              padding: 10,
            }}
          >
            <Image
              src={item.url}
              style={{
                flex: 1,
                backgroundColor: 'yellow'
              }}
              resizeMode="contain"
            />
          </View>
        </View>
      ))}
    </View>
  )
}

export default function Menu() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F2F1EB',
      }}>
      <StatusBar
        animated={true}
        backgroundColor="#688a65"
        barStyle={'light-content'}
        showHideTransition={'fade'}
        networkActivityIndicatorVisible={true}
        translucent={true}
      />
      <View id='header' style={styles.header}>
        <View id='pfp' style={{
          backgroundColor: '',
          minHeight: 70,
          minWidth: 70,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'

        }}>
          <Ionicons
            name="person-circle-outline"
            size={50} color="#614938"
          />
        </View>
        <View id='title' style={{ backgroundColor: '', display: 'flex', justifyContent: 'center', }}>
          <Text style={styles.title}>{'menu'}</Text>
        </View>
        <View style={{
          backgroundColor: '',

        }}>
          <TouchableOpacity onPress={() => { }}> {/*signs the user out to login page */}
            <Image
              source={require('@/assets/images/cart.png')}
              style={{
                minHeight: 70,
                minWidth: 70,
                width: 70,
                height: 70,
                maxHeight: 70,
                maxWidth: 70,
                backgroundColor: '',
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View id='body'>
        <GenerateMerch />
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 50,
    minWidth: 275,
    maxWidth: 300,
    // borderColor: 'black',
    backgroundColor: Platform.select({ ios: 'transparent', android: 'transparent', default: 'transparent' }),
    borderWidth: Platform.select({ ios: 2, android: 0, default: 0 }),
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  }, cancelBtn: {
    flex: 1,
    width: 50,
    height: 50,

    backgroundColor: Platform.select({ ios: 'red', android: 'transparent', default: 'transparent' }),
    borderWidth: Platform.select({ ios: 2, android: 0, default: 0 }),

  },
  completeBtn: {
    flex: 1,
    width: 50,
    height: 50,

    backgroundColor: Platform.select({ ios: '#688a65', android: 'transparent', default: 'transparent' }),
    borderWidth: Platform.select({ ios: 2, android: 0, default: 0 }),

  },
  divider1: {
    display: "flex",
    flex: 1,
    backgroundColor: "#97ac82",
    minHeight: 600,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: "flex-end",
    borderColor: 'red',
  },
  divider2: {
    display: "flex",
    flex: 1 / 2,
    backgroundColor: "#688a65",
    minHeight: 350,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: "flex-end",
    borderColor: 'orange',
    marginTop: 30,
  },
  divider3: {
    display: "flex",
    flex: 1 / 2,
    backgroundColor: "#2c341b",
    minHeight: 210,
    borderColor: 'yellow',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: "center",
    marginTop: 30,
  },
  header: {
    alignContent: 'center',
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    minHeight: 70,
    marginBottom: 30,
    backgroundColor: '',
  },
  rowCentered: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '',
  },
  row: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  text: {
    color: '#33261D'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  textInput: {
    backgroundColor: "#F2F1EB",
    borderBottomColor: "#4C4737",
    borderBottomWidth: 4,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flex: 1,
    height: 50,
    margin: 10,
    minHeight: 50,
  },
});