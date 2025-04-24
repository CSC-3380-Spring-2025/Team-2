import React, { useEffect, useState } from 'react';
import { Link } from 'expo-router';
import { Button, Dimensions, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { db } from '@/FirebaseConfig';
import { collection, addDoc, arrayUnion, getDocs, updateDoc, deleteDoc, doc, query, where, } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

async function deleteItem(docId: any) { // works but screen needs to be refreshed to see results
  //import the docRef that was created in login here
  await deleteDoc(doc(db, "menu", docId));
  // router.reload();
}

function FetchMenu() {
  const [merch, setMerch] = useState<any[]>([]); //list of objects from firebase

  useEffect(() => {
    const fetchMerch = async () => {
      const docRef = collection(db, "menu");
      const docSnap = await getDocs(docRef);
      const merchList: any[] = [];

      if (!docSnap.empty) {
        docSnap.forEach((doc) => {
          merchList.push({ id: doc.id, ...doc.data() });
        });
        setMerch(merchList);
      }
    };

    fetchMerch();
  }, []);

  return (
    <View style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    }}>
      {merch.map((item) => (
        <View
          id='drink'
          style={{
            display: 'flex',
            flex: 1,
            borderWidth: 3.5,
            borderColor: "#2c341b",
            backgroundColor: '#D3F5DE',
            minWidth: 150,
            maxWidth: 150,
            minHeight: 200,
            maxHeight: 2000,
            borderRadius: 15,
            marginBottom: 20,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <View
            id='top'
            style={{
              flexDirection: 'column',
              display: 'flex',
              flex: 2 / 3,
              margin: 'auto'
            }}
          >
            <Image
              source={require('@/assets/images/cart.png')}
              style={{
                minHeight: 70,
                minWidth: 70,
                width: 70,
                height: 70,
                maxHeight: 70,
                maxWidth: 70,
                margin: 'auto'
                , backgroundColor: '#D3F5DE'
                , borderRadius: 80,
              }}
              resizeMode="contain"
            />
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <Text>{'$' + item.price}</Text>
            <Text>{'type: ' + item.itemtype}</Text>
          </View>
          <View
            id='bottom'
            style={{
              display: 'flex',
              flex: 1 / 6,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}

          >
            <TouchableOpacity
              onPress={() => {
                router.push({
                  pathname: '/edititem',
                  params: { docID: item.id}
                });
              }}>
              <Ionicons size={25} name="create-outline" color="#2c341b" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { deleteItem(item.id) }}>
              <Ionicons size={25} name="trash-sharp" color="#FF4365" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}

export default function EditMenu() {
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
        <TouchableOpacity onPress={() => { router.back() }}>
          <View id='pfp' style={{
            backgroundColor: '',
            minHeight: 70,
            minWidth: 70,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'

          }}>
            <Ionicons
              name="arrow-back-circle-outline"
              size={50} color="#614938"
            />
          </View>
        </TouchableOpacity>
        <View id='title' style={{ backgroundColor: '', display: 'flex', justifyContent: 'center', }}>
          <Text style={styles.title}>{'update menu'}</Text>
        </View>
        <View style={{
          backgroundColor: '',

        }}>
          <TouchableOpacity onPress={() => { router.navigate('/cart') }}> {/*signs the user out to login page */}
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
      <View id='add-item' style={styles.rowCentered}>
        <View style={styles.button}>
          <TouchableOpacity // if we have time, we should design a button component that has all these features.
            onPress={() => { router.navigate('/additem') }}
          >
            <View style={{
              display: 'flex',
              flex: 1,
              backgroundColor: '#688a65',
              minWidth: 275,
              minHeight: 35,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
              <Text style={{ fontWeight: 'bold', color: '#F2F1EB' }}>{'Add Item'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        id='body'
        style={{ display: 'flex', flex: 1, }}
      >
        <FetchMenu />
      </View>
    </SafeAreaView>

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
  ButtonAdd: {// hopefully will be the add items button 
    color: '#33261D',//adjust color later
    // want to be in the top 
    flex: 1,
    borderRadius: 5,
    minWidth: 250,
    maxHeight: 50,
    top: 30,
    left: 50,
    position: 'absolute',
    alignItems: 'center',
  },
  ButtonDelete: {
    color: '#33261D',
    flex: 1,
    borderRadius: 5,
    minWidth: 250,
    maxHeight: 50,
    position: 'absolute',
    top: 30,
    right: 150,
    alignItems: 'center',
  },
  itemContainer: {
    flex: 1,
    color: '#33261D',
    height: 50,
    width: 30,
    position: 'absolute',

  },
  editButton: {
    color: '#33261D',
    flex: 1,
    borderRadius: 5,
    minWidth: 125,
    maxHeight: 50,
    position: 'absolute',
    marginTop: 100,

  },
  onBoxDeleteButton: {
    color: '#33261D',
    flex: 1,
    borderRadius: 5,
    minWidth: 125,
    maxHeight: 50,
    position: 'absolute',
    marginTop: 100,
    left: 150,
  },
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
  },
  cancelBtn: {
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

var testItem = {
  itemName: "matcha",
  itemType: "tea", // coffee, smoothie, etc
  itemDescription: "something intresting info",
  itemAvaliability: true,
  itemImage: '@/assets/images/splash-icon.png',
  itemPrice: 5.00,

};