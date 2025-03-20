import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        <SafeAreaView style={styles.container}>
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
});