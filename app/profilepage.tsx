import React, { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView, View, Text, StyleSheet, Dimensions, Button, Image, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { height, width, } = Dimensions.get('window');
const vw = width / 100;
const vh = height / 100;

const styles = StyleSheet.create({
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
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 5,
    },
    scrollview: {
        width: 100 * vw,
        maxWidth: 500,
        paddingLeft: 4 * vw,
        paddingRight: 4 * vw,
        backgroundColor: '#F2F1EB',
        // backgroundColor: '#99999C',
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
});


export default function ProfileScreen() {
    const [profile, setProfile] = useState<{
        first: string;
        last: string;
        bday: string;
        phone: string;
        email: string;
    } | null>(null);

    useEffect(()=>{
        async function loadProfile() {
            try {
                const storedProfile = await AsyncStorage.getItem('userProfile');
                if (storedProfile) {
                    setProfile(JSON.parse(storedProfile));
                }
            } catch (e) {
                console.error('failed to load profile :(', e)
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
                    <Ionicons
                        name="arrow-back-circle-outline"
                        size={50} color="#614938"
                    /> 
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
            {profile ? (
                <View style={styles.profileContainer}>
                    <Text style={styles.label}>First Name:</Text>
                    <Text style={styles.value}>{profile.first}</Text>

                    <Text style={styles.label}>Last Name:</Text>
                    <Text style={styles.value}>{profile.last}</Text>

                    <Text style={styles.label}>Birthday:</Text>
                    <Text style={styles.value}>{profile.bday}</Text>

                    <Text style={styles.label}>Phone:</Text>
                    <Text style={styles.value}>{profile.phone}</Text>

                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.value}>{profile.email}</Text>
                </View>
            ):(
                <Text style={styles.emptyText}>No profile found.</Text>
            )}

        </SafeAreaView>
    )
}