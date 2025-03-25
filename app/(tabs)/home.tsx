//home screen
import React from 'react';
import { Link } from 'expo-router';
import { Button, Dimensions, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { auth } from '@/FirebaseConfig';
import { getAuth } from 'firebase/auth';
import { router } from 'expo-router';

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

    function changeDets() { // functional
        setDets(dets => !dets);
    }

   /* getAuth().onAuthStateChanged((user) => {
        if (!user) {
            router.replace('/login')
        };
    });*/

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
                    <Text style={styles.title}>bubble</Text>
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
                                backgroundColor: ''
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
                    {/* <Text>Rewards</Text>
                    <Text>60 Points</Text> // this should not be hard coded!!! */}
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
                                <View /*style={styles.button}*/>
                                    <TouchableOpacity // if we have time, we should design a button component that has all these features.
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
                        <View style={styles.divider3}>
                            <View style={styles.rowCentered}>
                                <View /*style={styles.button}*/>
                                    <TouchableOpacity // if we have time, we should design a button component that has all these features.
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
                                            <Text style={{ fontWeight: 'bold', color: '#688a65' }}>RECENTS</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
