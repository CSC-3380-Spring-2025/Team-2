import React, { useEffect, useState } from 'react';
import { Button, Dimensions, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { getAuth } from 'firebase/auth';
import { router } from 'expo-router';
import { db } from '@/FirebaseConfig';
import { collection, getDoc, addDoc, arrayUnion, getDocs, updateDoc, deleteDoc, doc, query, where, DocumentData } from 'firebase/firestore';

async function addItem(itemID: any) {
  //import the docRef that was created in login here
  const merchRef = doc(db, "menu", itemID);
  const merchSnap = await getDoc(merchRef);
  const data = merchSnap.data();

  const dbEmail: any = getAuth().currentUser?.email;
  let docRef: any = doc(db, 'users', dbEmail);
  await updateDoc(docRef, {
    cart: arrayUnion(data)
  });
  alert("added " + data?.name + " to cart!");
}

async function favorite(itemID: any) {
  //import the docRef that was created in login here
  const merchRef = doc(db, "menu", itemID);
  const merchSnap = await getDoc(merchRef);
  const data = merchSnap.data();

  const dbEmail: any = getAuth().currentUser?.email;
  let docRef: any = doc(db, 'users', dbEmail);
  await updateDoc(docRef, {
    favorites: arrayUnion(data)
  });
  alert("added " + data?.name + " to favorites!");
}

export default function MenuScreen() {
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
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#F2F1EB',
    }} >
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
          <Text style={styles.title}>{'menu'}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => { router.push('/cart') }}> {/*signs the user out to login page */}
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
      <View id='search-menu' style={{ display: 'flex', flex: 1, maxHeight: 70, flexDirection: 'row', justifyContent: 'space-around' }}>
        <View style={{ display: 'flex', flex: 3 / 5, }}>
          <TextInput style={{ borderWidth: 2, borderColor: '#2c341b', borderRadius: 10 }} placeholder='search drinks' />

        </View>
        <View style={{ display: 'flex', flex: 1 / 3, }}>
          <TouchableOpacity onPress={() => {
            router.push('/(tabs)/menumanagement')
          }}>
            <View style={{
              display: 'flex',
              flex: 1,
              backgroundColor: '#688A65',
              minWidth: 100,
              minHeight: 35,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{ fontWeight: 'bold', color: '#F2F1EB' }}>EDIT MENU</Text></View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        id="top buttons"
        style={{
          display: "flex",
          flex: 1,
          maxHeight: 40,
          flexDirection: "row",
          justifyContent: 'space-around'
        }}
      >
        <View
          style={styles.itemButton}>
          <TouchableOpacity onPress={() => {
            console.log("milk tea");
          }}>
            <View style={{
              display: 'flex',
              flex: 1,
              backgroundColor: '#688A65',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
            }}>
              <Text style={{ fontWeight: 'bold', color: '#F2F1EB' }}>{'MILK TEA'}</Text></View>
          </TouchableOpacity>
        </View>
        <View
          style={styles.itemButton}>
          <TouchableOpacity onPress={() => {
            console.log("fruit tea");
          }}>
            <View style={{
              display: 'flex',
              flex: 1,
              backgroundColor: '#688A65',
              padding: 5,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{ fontWeight: 'bold', color: '#F2F1EB' }}>{'FRUIT TEA'}</Text></View>
          </TouchableOpacity>
        </View>
        <View
          style={styles.itemButton}>
          <TouchableOpacity onPress={() => {
            console.log("coffee");
          }}>
            <View style={{
              display: 'flex',
              flex: 1,
              backgroundColor: '#688A65',
              minWidth: 75,
              minHeight: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Text style={{ fontWeight: 'bold', color: '#F2F1EB' }}>{'COFFEE'}</Text></View>
          </TouchableOpacity>
        </View>
        <View
          style={styles.itemButton} >
          <TouchableOpacity onPress={() => {
            console.log("favorites");
          }}>
            <View style={{
              display: 'flex',
              flex: 1,
              backgroundColor: '#688A65',
              minWidth: 75,
              minHeight: 20,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
            }}>
              <Text style={{ fontWeight: 'bold', color: '#F2F1EB' }}>{'FAVORITES'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        id='body'
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          margin: 'auto',
          minWidth: 350,
        }} >
        {merch.map((item) => (
          <View
            id="menu items"
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
              backgroundColor: "pink",
              borderRadius: 15,
              borderColor: '#2c341b',
              borderWidth: 2.5,
              justifyContent: "space-between",
              marginTop: 10,
              padding: 5,
              minHeight: 150,
            }}
          >
            <View
              id="left"
              style={{
                display: "flex",
                flex: 1 / 3,
                flexDirection: "column",
                justifyContent: 'space-between',
              }}
            >
              <TouchableOpacity onPress={() => { favorite(item.id) }}>
                <Ionicons name='heart-outline' size={35} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  addItem(item.id);
                }}>
                <Ionicons
                  name="add-circle"
                  size={40}
                  color="#2c341b" />
              </TouchableOpacity>

            </View>
            <View
              id="middle"
              style={{
                display: "flex",
                flex: 1 / 3,
                flexDirection: "column",
                justifyContent: 'space-between',
              }}
            >
              <Image
                src={item.img}
                style={{
                  flex: 1,
                  resizeMode: "contain",
                }}
              ></Image>
              <Text
                style={{
                  display: "flex",
                  flex: 0,
                  justifyContent: "center",
                  marginBottom: 10,
                  textAlign: "center",
                  flexDirection: "column",
                  fontWeight: 'bold',
                }}
              >{item.name}</Text>
              <Text
                style={{
                  display: "flex",
                  flex: 0,
                  justifyContent: "center",
                  marginBottom: 10,
                  textAlign: "center",
                  flexDirection: "column",

                }}
              > ${item.price}</Text>
            </View>
            <View
              id="right"
              style={{
                display: "flex",
                flex: 1 / 3,
                flexDirection: "column",
                justifyContent: 'flex-end',
              }}>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <TouchableOpacity onPress={() => { favorite(item.id) }}>
                  <Ionicons name='create-outline' size={35} />
                </TouchableOpacity>
              </View>

            </View>
          </View>

        ))
        }
      </ScrollView >
    </SafeAreaView >
  );

}
const styles = StyleSheet.create({
  rowCentered: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '',
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
  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#F2F1EB',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    color: '#33261D',
    top: 0,
    fontSize: 30,

  },
  itemButton: {
    color: "#33261d",
    borderRadius: 5,
    maxHeight: 40,
    minWidth: 110,
    alignItems: 'center',
  }, addbutton: {
    color: '#33261D',
    flex: 1,
    borderRadius: 5,
    minWidth: 125,
    maxHeight: 50,
    position: 'absolute',
    left: 5,
    top: -45,


  }, itemCustomization: {
    color: '#33261D',
    flex: 1,
    borderRadius: 5,
    minWidth: 125,
    maxHeight: 50,
    position: 'absolute',
    right: 5,
    top: -45,

  }, favorites: {
    color: '#33261D',
    flex: 1,
    borderRadius: 5,
    minWidth: 60,
    maxHeight: 50,
    position: 'absolute',
    padding: 5,



  }
});
