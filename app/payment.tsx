import React, { useState } from 'react';
import { Link } from 'expo-router';
import { Button, Dimensions, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { auth } from '@/FirebaseConfig';
import { getAuth } from 'firebase/auth';
import { router } from 'expo-router';

export default function Payment() {
    let stores: string[] = ["College Dr.", "Corporate Dr."];
    let [show, setShow] = useState<boolean>(true);
    let [choice, setChoice] = useState<string>("Choose Store");

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#F2F1EB',
        }}>
            <View style={styles.rowCentered}>
                <View style={{ display: "flex", flex: 1, flexDirection: 'column' }}>
                    <TouchableOpacity
                        style={{ flex: 1, }}
                        onPress={() => { setShow(show => !show); }}>
                        <View
                            style={{
                                display: 'flex',
                                flex: 1,
                                backgroundColor: '#688A65',
                                minWidth: 275,
                                minHeight: 35,
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row'
                            }}>
                            <Text style={{ fontWeight: 'bold', color: '#F2F1EB' }}>{choice}</Text>
                            <Ionicons name="caret-down-circle-outline" size={20} color={'#F2F1EB'} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ flex: 1, display: true ? "flex" : "none" }}>
                        {
                            stores.map((item) => (
                                <TouchableOpacity style={{flex: 1}} onPress={() => setChoice(item)}>
                                    <Text style={{color: 'black', flex: 1}}>{item}</Text>
                                </TouchableOpacity>
                            ))}
                    </View>
                </View>
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