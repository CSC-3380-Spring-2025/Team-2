import React, { useEffect, useState } from 'react';
import { Button, Dimensions, Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { db } from '@/FirebaseConfig';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where, } from 'firebase/firestore';

let data: any = [
    {
        merchName: 'matcha',
        cost: 7.50,
        description: 'yumm~',
        ingredients: 'love',
        allergens: 'n/a',
        sale: false,
        seasonal: false,
        image: 'url',
        customer: 'Leia',
        location: 'Coporate Dr',
        isComplete: false,
        dateOrdered: '03/25/2025',
    },
    {
        merchName: 'brown sugar',
        cost: 8.50,
        description: 'yumm~',
        ingredients: 'love',
        allergens: 'n/a',
        sale: false,
        seasonal: false,
        image: 'url',
        customer: 'Steven',
        location: 'College Dr',
        isComplete: false,
        dateOrdered: '04/03/2025',
    }

];


async function fetchDataFromFireStore() {
    const querySnapshot = await getDocs(collection(db, "menu"));
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
    });
    console.log(data);
    return data;
}

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
                        backgroundColor: 'white',
                        borderRadius: 15,
                        borderColor: '#614938',
                        borderWidth: 2,
                        justifyContent: 'flex-end',
                        paddingLeft: 10,
                        paddingRight: 10,
                    }}>
                    <View
                        id='top'
                        style={{
                            display: 'flex',
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                        <View
                            id='left'
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                flex: 1,
                            }}>
                            <Text style={{
                                display: 'flex',
                                flex: 1 / 4,
                                alignContent: 'center',
                                marginBottom: 10,
                                backgroundColor: ''
                            }}>{item.dateOrdered}</Text>
                            <View style={{
                                display: 'flex',
                                flex: 3 / 4,
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}>

                                <Image
                                    source={require('@/assets/images/cart.png')}
                                    style={{
                                        flex: 1,
                                        minHeight: 70,
                                        minWidth: 70,
                                        width: 70,
                                        height: 70,
                                        maxHeight: 70,
                                        maxWidth: 70,
                                        backgroundColor: ''
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
                            }}>
                                <View>
                                    <Text style={{ textAlign: 'right' }}>
                                        Name: {item.customer}
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{ textAlign: 'right' }}>
                                        Location: {item.location}
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{ textAlign: 'right' }}>
                                        Order: {item.dateOrdered}
                                    </Text>
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

    // useEffect(() => {
    //     async function fetchData() {
    //         const data: any = await fetchDataFromFireStore();
    //         setMerch(data);
    //     }
    //     fetchData();
    // }, []);

    return (
        <SafeAreaView style={styles.safearea}>
            <StatusBar
                animated={true}
                backgroundColor="#688a65"
                barStyle={'light-content'}
                showHideTransition={'fade'}
                networkActivityIndicatorVisible={true}
                translucent={true} />
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
                    <Text style={styles.title}>current orders</Text>
                </View>
                <View style={{
                    backgroundColor: '',

                }}>
                    <TouchableOpacity onPress={() => auth.signOut()}> {/*signs the user out to login page */}
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
            <View id='body' style={{
                display: 'flex',
                flex: 1,
                alignItems: 'center'
            }}>
                <GenerateOrders />
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