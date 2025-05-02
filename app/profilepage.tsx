import React, { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView, View, Text, StyleSheet, Dimensions, Button, Image, Platform, TouchableOpacity } from 'react-native';

import { db } from '@/FirebaseConfig';
import { auth } from '@/FirebaseConfig';
import { getAuth } from 'firebase/auth';
import { collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc, doc, query, where, Timestamp, DocumentData } from 'firebase/firestore';
import { router } from 'expo-router';


export default function ProfileScreen() {
    const [pf, setPF] = useState<DocumentData>();

    useEffect(() => {
        async function loadProfile() {
            const docID: any = getAuth().currentUser?.email; // functional: gets the email of who's currently logged in
            const docRef = doc(db, "users", docID); // functional
            const docSnap = await getDoc(docRef); // functional
            if (docSnap.exists()) { // outputs true
                const data = docSnap.data(); // functional
                setPF(data);
            } else {
                alert("No Profile Found");
            }
        }
        loadProfile();
    }, []);

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#F2F1EB',
            paddingLeft: 16,
            paddingRight: 16,
        }}>
            <View id='header' style={styles.header}>
                <View id='pfp' style={{
                    backgroundColor: '',
                    minHeight: 70,
                    minWidth: 70,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'

                }}>
                    <TouchableOpacity onPress={() => { router.navigate('/(tabs)/home') }}>
                        <Ionicons
                            name="arrow-back-circle-outline"
                            size={50} color="#614938"
                        />
                    </TouchableOpacity>
                </View>
                <View id='title' style={{ backgroundColor: '', display: 'flex', justifyContent: 'center', }}>
                    <Text style={styles.title}>account</Text>
                </View>
                <View style={{
                    backgroundColor: '',

                }}>
                    <Image
                        source={require('@/assets/images/cart.png')}
                        style={{
                            minHeight: 50,
                            minWidth: 50,
                            width: 50,
                            height: 50,
                            maxHeight: 50,
                            maxWidth: 50,
                            backgroundColor: ''
                        }}
                        resizeMode="contain"
                    />
                </View>
            </View>

            <View id='body' style={styles.profileContainer}>
                <Text style={styles.label}>First Name:</Text>
                <Text style={styles.value}>{pf?.first}</Text>

                <Text style={styles.label}>Last Name:</Text>
                <Text style={styles.value}>{pf?.last}</Text>

                <Text style={styles.label}>Birthday:</Text>
                <Text style={styles.value}>{pf?.dob.toDate().toDateString()}</Text>

                <Text style={styles.label}>Phone:</Text>
                <Text style={styles.value}>{pf?.phone}</Text>

                <Text style={styles.label}>Email:</Text>
                <Text style={styles.value}>{pf?.email}</Text>
            </View>
            <View style={styles.rowCentered}>
                <View style={styles.button}>
                    <TouchableOpacity // if we have time, we should design a button component that has all these features.
                        onPress={() => {
                            auth.signOut();
                            router.navigate('/(auth)/login');
                        }}
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
                            <Text style={{ fontWeight: 'bold', color: '#F2F1EB' }}>Sign Out</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.rowCentered}>
                <View style={styles.button}>
                    <TouchableOpacity // if we have time, we should design a button component that has all these features.
                        onPress={() => {
                            auth.signOut();
                            router.navigate('/(auth)/login');
                        }}
                    >
                        <View style={{
                            display: 'flex',
                            flex: 1,
                            backgroundColor: '#FF4365',
                            minWidth: 275,
                            minHeight: 35,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                        }}>
                            <Text style={{ fontWeight: 'bold', color: '#F2F1EB' }}>Delete Account</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        borderRadius: 5,
        maxWidth: 275,
        maxHeight: 50,
        marginTop: 70,
        backgroundColor: Platform.select({ ios: '#688a65', android: 'transparent' }),
        borderColor: '#2c341b',
        borderWidth: Platform.select({ ios: 2, android: 0 }),
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,

    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F2F1EB',
        justifyContent: 'center',
    },
    profileContainer: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 5,
    },
    text: {
        color: '#33261D'
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#614938',
        marginBottom: 4,
    },
    value: {
        fontSize: 16,
        color: '#33261D',
        marginBottom: 12,
    },
    emptyText: {
        fontSize: 18,
        color: '#614938',
        textAlign: 'center',
    },
    header: {
        alignContent: 'center',
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        minHeight: 30,
        marginBottom: 30,
        backgroundColor: '',
        // paddingLeft: 16,
        // paddingRight: 16,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    rowCentered: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '',
    },
});