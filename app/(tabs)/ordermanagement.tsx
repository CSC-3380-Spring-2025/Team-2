import React, { useEffect, useState } from 'react';
import { Button, Dimensions, FlatList, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import Merchandise from '../../components/merchandise/merchandise';
import Ionicons from '@expo/vector-icons/Ionicons';

import { getAuth } from 'firebase/auth';
import { db } from '@/FirebaseConfig';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where, } from 'firebase/firestore';

const { height, width, } = Dimensions.get('window');
const vw = width / 100;
const vh = height / 100;


/*
var item1 = {
    customer: 'Leia',
    name: 'matcha latte',
    price: 7.50,
    dateOrder: 'Jan 01 2025',
    imageUrl: 'https://www.eatingbirdfood.com/wp-content/uploads/2021/04/iced-matcha-latte-hero.jpg',
    loca: 'College Dr',
    complete: false,
};

var item2 = {
    customer: 'Milo',
    name: 'brown sugar boba',
    price: 8.50,
    dateOrder: 'Jan 02 2025',
    imageUrl: 'https://wallpapersok.com/images/hd/bubble-tea-classic-brown-sugar-1ovssntxjtitoj65.jpg',
    loca: 'College Dr',
    complete: false,
};

var item3 = {
    customer: 'Jaime',
    name: 'strawberry tea',
    price: 6.50,
    dateOrder: 'Jan 03 2025',
    imageUrl: 'https://myveganminimalist.com/wp-content/uploads/2022/04/Strawberry-Milk-Tea-Boba-11.jpg',
    loca: 'Coporate Dr',
    complete: false,
};

var history = [item1, item2, item3];
*/

let data: any = [];

async function fetchDataFromFireStore() {
    const querySnapshot = await getDocs(collection(db, "testMerch"));

    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });

    });
    console.log(data);
    return data;
}

// const myData = collection(db, 'merchandise');

function GenerateOrders() { // gets all unprocesss orders from database and displays them; only visible to admin
    function complete(customer: string) {
        // sends a notif to customer
        alert(customer + " order is complete");
    }

    function cancel(customer: string) {
        // sends a notif to customer
        alert(customer + " order is canceled");
    }

    return ( //item.whatever has to be the same property name as set in the database. Any typos or alterations will not reflect in the app. 
        <View>
            {data.map((item: any) => (
                <View
                    id='drink'
                    style={{
                        display: 'flex',
                        flex: 1,
                        minWidth: 350,
                        minHeight: 150,
                        maxWidth: 400,
                        maxHeight: 240,
                        marginBottom: 30,
                        flexDirection: 'column',
                        backgroundColor: 'pink',
                        borderRadius: 15,
                        borderColor: '#614938',
                        borderWidth: 2,
                        justifyContent: 'flex-end'
                    }}>
                    <View id='top' style={{ display: 'flex', flex: 1, flexDirection: 'row', }}>
                        <View id='left'
                            style={{
                                display: 'flex',
                                flex: 1,
                            }}>
                            <View style={{
                                display: 'flex',
                                flex: 1,
                            }}>
                                <Text style={{
                                    display: 'flex',
                                    flex: 0,
                                    justifyContent: 'center',
                                    marginBottom: 10,
                                }}>{item.dateOrder}</Text>
                                <Image
                                    src={item.img}
                                    style={{
                                        flex: 1,
                                    }}
                                    resizeMode="contain"
                                />
                            </View>
                        </View>

                        <View
                            id='right'
                            style={{
                                display: 'flex',
                                flex: 1,

                                flexDirection: 'column'
                            }}>

                            <View id='text' style={{
                                display: 'flex',
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'flex-end',
                                marginTop: 30,
                                marginRight: 25,
                            }}>
                                <View>
                                    <Text style={{ textAlign: 'right' }}>
                                        Name: {item.cust}
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{ textAlign: 'right' }}>Location: {item.loca}</Text>
                                </View>
                                <View>
                                    <Text style={{ textAlign: 'right' }}>Order: {item.name}</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                    <View
                        id='bottom'
                        style={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>
                        <View style={styles.cancelBtn}>
                            <Button
                                title='cancel'
                                color={Platform.select({
                                    ios: '#F2F1EB',
                                    android: 'red',
                                    default: 'red'
                                })}
                                onPress={() => {
                                    cancel(item.cust);
                                }}
                            />
                        </View>
                        <View style={styles.completeBtn}>
                            <Button
                                title='complete'
                                color={Platform.select({
                                    ios: '#F2F1EB',
                                    android: '#688a65',
                                    default: '#688a65'
                                })}
                                onPress={() => {
                                    complete(item.cust);
                                }}
                            />
                        </View>
                    </View>
                </View>
            ))}
        </View>
    )
}

export default function OrderManagement() {
    const [myMerch, setMerch]: any = useState(); // myMerch is DATA

    useEffect(() => {
        async function fetchData() {
            const data: any = await fetchDataFromFireStore();
            setMerch(data);
        }
        fetchData();
    }, []);

    return (
        <SafeAreaView style={styles.safearea}>
            <StatusBar
                animated={true}
                backgroundColor="#688a65"
                barStyle={'light-content'}
                showHideTransition={'fade'}
                networkActivityIndicatorVisible={true}
                translucent={true} />
            <View id='body' style={{
                display: 'flex',
                flex: 1,
                alignItems: 'center'
            }}>
                <GenerateOrders />
                {/* <FlatList
                    data={myMerch}
                    renderItem={({ item }) =>
                        <Item
                            name={item.name}
                            img={item.img}
                            cust={item.customer}
                            loca={item.location}
                            dateOrdered={item.dateOrdered}
                        />}
                /> */}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button: {
        minHeight: 50,
        minWidth: 275,
        maxWidth: 300,
        backgroundColor: Platform.select({ ios: '#688a65', android: 'transparent', default: 'transparent' }),
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
        backgroundColor: "#97ac82",
        minHeight: 600,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        justifyContent: "flex-end",
        borderColor: 'red',
    },
    divider2: {
        display: "flex",
        backgroundColor: "#688a65",
        height: 350,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        justifyContent: "flex-end",
        borderColor: 'orange',
        marginTop: 30,
    },
    divider3: {
        display: "flex",
        backgroundColor: "#2c341b",
        height: 210,
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
        // paddingLeft: 16,
        // paddingRight: 16,
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
    safearea: {
        flex: 1,
        backgroundColor: '#F2F1EB',
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