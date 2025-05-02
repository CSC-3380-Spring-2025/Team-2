import React, { useEffect, useState } from 'react';
import { Button, Dimensions, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { getAuth } from 'firebase/auth';
import { router } from 'expo-router';
import { db } from '@/FirebaseConfig';
import { getDoc, doc, DocumentData } from 'firebase/firestore';

const { height, width, } = Dimensions.get('window');
const vw = width / 100;
const vh = height / 100;

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

export default function Home() {
    let [dets, setDets] = React.useState(false);
    const [auth, setAuth] = useState<boolean>();

    function changeDets() { // functional
        setDets(dets => !dets);
    }

    const [pts, setPt] = useState<DocumentData>();

    useEffect(() => {
        async function loadProfile() {
            const docID: any = getAuth().currentUser?.email; // functional: gets the email of who's currently logged in
            const docRef = doc(db, "users", docID); // functional
            const docSnap = await getDoc(docRef); // functional
            if (docSnap.exists()) { // outputs true
                const data = docSnap.data(); // functional
                setPt(data.points);
                setAuth(data.auth);
            } else {
                alert("No Profile Found");
            }
        };
        loadProfile();
    }, []);

    return (
        <SafeAreaView style={{
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
                <TouchableOpacity onPress={() => { router.navigate('/profilepage') }}>
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
                </TouchableOpacity>
                <View id='title' style={{ backgroundColor: '', display: 'flex', justifyContent: 'center', }}>
                    <Text style={styles.title}>bubble</Text>
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
            <View
                id='body'
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    flex: 1,
                }}>
                <View style={styles.divider1}>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ fontSize: 40, color: '#F2F1EB' }}>{'Rewards'}</Text>
                        <Text style={{ fontSize: 30, color: '#F2F1EB' }}>{pts + ' Points'}</Text>
                    </View>
                    <View style={{ marginBottom: 30 }}>
                        <View style={styles.rowCentered}>
                            <TouchableOpacity // if we have time, we should design a button component that has all these features.
                                onPress={() => {
                                    changeDets();
                                }}
                            >
                                <View style={{
                                    display: 'flex',
                                    flex: 1,
                                    backgroundColor: '#F2F1EB',
                                    minWidth: 275,
                                    minHeight: 35,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 10,
                                }}>
                                    <Text style={{ fontWeight: 'bold', color: '#688a65' }}>DETAILS</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View
                        style={{
                            display: dets ? 'flex' : 'none',
                            flexDirection: "row",
                            justifyContent: 'center',
                            borderRadius: 5,
                            paddingTop: 10,
                        }}>
                        <View>
                            <Text style={{ color: 'white' }}>☆  20 points: topping</Text>
                            <Text style={{ color: 'white' }}>☆  40 points: drink</Text>
                            <Text style={{ color: 'white' }}>☆  60 points: bakery item</Text>
                            <Text style={{ color: 'white' }}>☆  80 points: food item</Text>
                            <Text style={{ color: 'white' }}>☆  100 points: merchandise</Text>
                        </View>
                    </View>
                    <View style={styles.divider2}>
                        <View style={{ marginBottom: 30 }}>
                            <View style={styles.rowCentered}>
                                <View style={{ display: 'flex', flexDirection: 'column' }}>
                                    <View style={{ flex: 1 }}>
                                        <TouchableOpacity // if we have time, we should design a button component that has all these features.
                                            onPress={() => { router.push('/(tabs)/menu') }}>
                                            <View style={{
                                                display: 'flex',
                                                flex: 1,
                                                backgroundColor: '#F2F1EB',
                                                minWidth: 275,
                                                minHeight: 35,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 10,
                                            }}>
                                                <Text style={{ fontWeight: 'bold', color: '#688a65' }}>MENU</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                        </View>
                        <View style={styles.divider3}>
                            <View style={{ marginBottom: 30 }}>
                                <View style={styles.rowCentered}>
                                    <View>
                                        <TouchableOpacity
                                            style={{ display: auth ? "flex" : "none", flex: 1 }}
                                            onPress={() => router.push('/(tabs)/admindash')}>
                                            <View style={{
                                                display: 'flex',
                                                flex: 1,
                                                backgroundColor: '#F2F1EB',
                                                minWidth: 275,
                                                minHeight: 35,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 10,
                                            }}>
                                                <Text style={{ fontWeight: 'bold', color: '#688a65' }}>ADMIN DASHBOARD</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={{ display: !auth ? "flex" : "none", flex: 1 }}
                                            onPress={() => router.push('/favorites')}>
                                            <View style={{
                                                display: 'flex',
                                                flex: 1,
                                                backgroundColor: '#F2F1EB',
                                                minWidth: 275,
                                                minHeight: 35,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 10,
                                            }}>
                                                <Text style={{ fontWeight: 'bold', color: '#688a65' }}>FAVORITES</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}