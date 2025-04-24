import React, { useEffect, useState } from 'react';
import { Link } from 'expo-router';
import { Button, Dimensions, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { db } from '@/FirebaseConfig';
import { collection, addDoc, arrayUnion, getDoc, getDocs, updateDoc, deleteDoc, doc, query, where, } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

async function addItem(itemID: any) {
    //import the docRef that was created in login here
    alert("added " + itemID);
    const merchRef = doc(db, "menu", itemID);
    const merchSnap = await getDoc(merchRef);
    const data = merchSnap.data();

    const dbEmail: any = getAuth().currentUser?.email;
    let docRef: any = doc(db, 'users', dbEmail);
    await updateDoc(docRef, {
        cart: arrayUnion(data)
    });
    
}

function GenerateFav() { // gets all unprocesss orders from database and displays them; only visible to admin
    const [favs, setFavs] = useState<any[]>([]); //list of objects from firebase

    useEffect(() => {
        async function fetchFavs() {
            const docID: any = getAuth().currentUser?.email; // functional
            const docRef = doc(db, "users", docID); // functional
            const docSnap = await getDoc(docRef); // functional
            if (docSnap.exists()) { // outputs true
                const data = docSnap.data(); // functional
                //cart = data?.cart; // functional
                setFavs(data?.favorites);
            }
            return [];
        }

        fetchFavs();
    }, []);

    return ( //item.whatever has to be the same property name as set in the database. Any typos or alterations will not reflect in the app.
        <View>
            {favs.map((item: any) => (
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
                            justifyContent: 'flex-end',
                        }}
                    >
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
                        > {'$' + item.price}</Text>
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
                            <TouchableOpacity onPress={() => { alert('edit drink') }}>
                                <Ionicons name='create-outline' size={35} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    )
}

export default function Favorites() {
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
                    <Text style={styles.title}>{'favorites'}</Text>
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
            <View id='body'>
                <GenerateFav />
            </View>
        </SafeAreaView>
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