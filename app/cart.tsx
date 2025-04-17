//home screen
import React, { useState, useEffect } from 'react';
import { Link } from 'expo-router';
import { Button, Dimensions, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { db } from '@/FirebaseConfig';
import { auth } from '@/FirebaseConfig';
import { getAuth } from 'firebase/auth';
import { collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc, doc, query, where, Timestamp } from 'firebase/firestore';
import { router } from 'expo-router';

const { height, width, } = Dimensions.get('window');
const vw = width / 100;
const vh = height / 100;

/*
// DO NOT FUCKING TOUCH!!!
let cart: any = fetchCart();
async function fetchCart() {
    const docID: any = getAuth().currentUser?.email; // functional
    const docRef = doc(db, "users", docID); // functional
    const docSnap = await getDoc(docRef); // functional
    if (docSnap.exists()) { // outputs true
        const data = docSnap.data(); // functional
        cart = data?.cart; // functional
    }
    return [];
}
// END OF DO NOT FUCKING TOUCH!!!
*/

let testCart: string[] = ["matcha", "peach", "strawberry"];

function GenerateCart() { // functional! just customize it properly
    const [cart, setCart] = useState<any[]>([]); //list of objects from firebase

    useEffect(() => {
        async function fetchCart() {
            const docID: any = getAuth().currentUser?.email; // functional
            const docRef = doc(db, "users", docID); // functional
            const docSnap = await getDoc(docRef); // functional
            if (docSnap.exists()) { // outputs true
                const data = docSnap.data(); // functional
                //cart = data?.cart; // functional
                setCart(data?.cart);
            }
            return [];
        }

        fetchCart();
    }, []);
    return ( //item.whatever has to be the same property name as set in the database. Any typos or alterations will not reflect in the app. needs ternary statment for when cart is empty
        <View>
            {cart.map((item: string) => ( // parameter is just a string
                <View
                    id='merch'
                    style={{
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'row',
                        borderRadius: 15,
                        borderColor: '#2c341b',
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
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item}</Text>
                        <Text style={{ fontSize: 20, }}>{'$$$'}</Text>
                    </View>
                    <View
                        id='right'
                        style={{
                            display: 'flex',
                            flex: 1,
                            backgroundColor: '#688a65',
                            padding: 10,
                            borderTopRightRadius: 12,
                            borderBottomRightRadius: 12,
                        }}
                    >
                        <Image
                            src={item}
                            style={{
                                flex: 1,
                                backgroundColor: ''
                            }}
                            resizeMode="contain"
                        />
                    </View>
                </View>
            ))}
        </View>
    )
}
export default function Cart() {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#F2F1EB',
            }}
        >
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
                    <Text style={styles.title}>{'cart'}</Text>
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
            <ScrollView id='body' style={{ flex: 1, backgroundColor: '' }}>
                <GenerateCart />
            </ScrollView>
            <View id='footer' style={{ flex: 1 / 6 }}>
                <View style={styles.rowCentered}>
                    <TouchableOpacity >
                        <View style={{
                            display: 'flex',
                            flex: 1,
                            backgroundColor: '#688A65',
                            minWidth: 275,
                            minHeight: 35,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{ fontWeight: 'bold', color: '#F2F1EB' }}>Checkout</Text>
                        </View>
                    </TouchableOpacity>
                </View>
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
    scrollview: {
        width: 100 * vw,
        maxWidth: 500,
        paddingLeft: 4 * vw,
        paddingRight: 4 * vw,
        backgroundColor: '#F2F1EB',
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
    view: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "#F2F1EB",
        height: 100 * vh,
        alignContent: 'flex-end',
    },
});