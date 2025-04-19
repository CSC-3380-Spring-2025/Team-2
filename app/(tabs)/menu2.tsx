//menu screen
import React, { useEffect, useState } from 'react';
import { Link } from 'expo-router';
import { Button, Dimensions, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { db } from '@/FirebaseConfig';
import { collection, addDoc, arrayUnion, getDocs, updateDoc, deleteDoc, doc, query, where, } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

async function addItem(item: String) {
  //import the docRef that was created in login here
  const dbEmail: any = getAuth().currentUser?.email;
  let docRef: any = doc(db, 'users', dbEmail);
  await updateDoc(docRef, {
    cart: arrayUnion(item)
  });
  alert("added " + item + " to cart!");
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
      <Text
        style={{
          display: 'flex',
          flexDirection: "row",
          justifyContent: 'center',
          borderRadius: 5,
          backgroundColor: '',
        }}
      >
        <TextInput
          placeholder='search drinks'
          style={{
            backgroundColor: "white",
            borderWidth: 2,
            borderColor: '#2c341b',
            borderRadius: 5,
            flex: 1,
            height: 50,
            margin: 10,
            minHeight: 50,
            color: '#614938',
          }} />
      </Text>
      <View
        id="top buttons"
        style={{
          display: "flex",
          flex: 0,
          flexDirection: "row",
          maxWidth: 600,
          maxHeight: 60,
          justifyContent: "flex-start",
          alignItems: "center",


        }}
      >
        <View
          style={styles.itemButton}>
          <Button
            title="milk tea"
            color={Platform.select({
              ios: "#F2F1EB",
              android: "#688a65",
              default: "#688a65",
            })}
            onPress={() => {
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
              default: "#688a65",
            })}
            onPress={() => {
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
              default: "#688a65",
            })}
            onPress={() => {
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
              default: "#688a65",
            })}
            onPress={() => {
              console.log("favorites");
            }}
          ></Button>
        </View>
      </View>
      <ScrollView id='body' style={{ display: 'flex', flex: 1, marginLeft: 25 }}>
        {merch.map((item) => (
          <View
            id="menu items"
            style={{
              display: "flex",
              flex: 1,
              minWidth: 300,
              minHeight: 150,
              maxWidth: 400,
              maxHeight: 200,
              marginBottom: 0,
              flexDirection: "column",
              backgroundColor: "pink",
              borderRadius: 15,
              borderColor: "614938",
              borderWidth: 2,
              justifyContent: "flex-start",
              padding: 0,
              marginTop: 10,
            }}
          >
            <View
              id="top"
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "row",
              }}
            >
              <Image
                src={item.img}
                style={{
                  flex: 1,
                  resizeMode: "contain",
                }}
              ></Image>
              <View
                style={styles.favorites}>
                <Button
                  title="favorite"
                  color={Platform.select({
                    ios: "#F2F1EB",
                    android: "#688a65",
                    default: "#688a65",
                  })}
                  onPress={() => {
                    console.log("added to favorites");
                  }}
                ></Button>
              </View>
            </View>
            <View
              id="middle"
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                flexDirection: "column",
                marginBottom: 30,
              }}
            >
              <Text
                style={{
                  display: "flex",
                  flex: 0,
                  justifyContent: "center",
                  marginBottom: 10,
                  textAlign: "center",
                  flexDirection: "column",

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
              id="bottom"
              style={{
                display: "flex",
                flex: 0,
                flexDirection: "row",
                justifyContent: "space-between",


              }}
            >
              <View
                id="left"
                style={{
                  display: "flex",
                  flex: 0,
                }}
              >
                <View
                  style={styles.addbutton}>
                  <Button
                    title="add to cart"
                    color={Platform.select({
                      ios: "#F2F1EB",
                      android: "#688a65",
                      default: "#688a65",
                    })}
                    onPress={() => {
                      addItem(item.name);
                    }}
                  ></Button>
                </View>

              </View>
              <View
                id="right"
                style={{
                  display: "flex",
                  flex: 0,

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
                      default: "#688a65",

                    })}
                    onPress={() => {
                      console.log("customize item");
                    }}
                  ></Button>
                </View>
              </View>

            </View>

          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
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

  }, itemButton: {
    color: "#33261d",
    borderRadius: 5,
    maxHeight: 60,
    minWidth: 100,
    marginHorizontal: 2,
    alignItems: 'center',
    padding: 10,

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


// var item1={
//   itemName:"milk tea",
//   itemPrice:5,
//   itemDescription:"milk tea with boba",
//   itemImage:"https://www.eatingbirdfood.com/wp-content/uploads/2021/04/iced-matcha-latte-hero.jpg",
//   itemAvailable:true,
// }

// var item2={
//   itemName:"fruit tea",
//   itemPrice:4,
//   itemDescription:"tea with fruit",
//   itemImage:"https://myveganminimalist.com/wp-content/uploads/2022/04/Strawberry-Milk-Tea-Boba-11.jpg",
//   itemAvailable:true,
// }

// var item3={
//   itemName:"coffee",
//   itemPrice: 3,
//   itemDescription:"coffee",
//   itemImage:"https://wallpapersok.com/images/hd/bubble-tea-classic-brown-sugar-1ovssntxjtitoj65.jpg",
//   itemAvailable:true,
// }
// var history=[item1, item2, item3];