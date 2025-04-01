import React from 'react';
import { Button, Dimensions, Image, Platform, SafeAreaView, ScrollView, StatusBar, StatusBarStyle, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { router, useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage'
// import {createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@react-navigation/native';
const { height, width, } = Dimensions.get('window');
const vw = width / 100;
const vh = height / 100;

import { getAuth } from 'firebase/auth';
import { db } from '@/FirebaseConfig';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where, setDoc, Timestamp } from 'firebase/firestore';

/* trying to implement a date picker
const newTheme = (theme) => createTheme({
    ...theme,
    components: {
        MuiPickersCalendarHeader: {
            styleOverrides: {
                root: {
                    color: '#F2F1EB',
                    borderRadius: '0',
                    borderWidth: '1',
                    borderColor: '#e91e63',
                    border: '1 solid',
                    backgroundColor: '#F2F1EB'
                }
            }
        }
    }
})
<ThemeProvider theme={newTheme}>
    <DesktopDatePicker />
</ThemeProvider>*/

const styles = StyleSheet.create({
    backBtn: {
        maxHeight: 50,
        maxWidth: 70,
        position: 'absolute',
        left: 10,
        top: 10,
    },
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
        backgroundColor: '#F2F1EB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "",
        width: (55 * vw),
        maxHeight: 250
    },
    row: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    rowCentered: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '',
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
    textInput: {
        backgroundColor: "#F2F1EB",
        borderBottomColor: "#614938",
        borderBottomWidth: 4,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        flex: 1,
        height: 50,
        margin: 10,
        minHeight: 50,
        color: '#614938',
    },
    miniTextInput: {
        backgroundColor: "#F2F1EB",
        borderBottomColor: "#614938",
        borderBottomWidth: 4,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        flex: 1 / 4,
        height: 50,
        margin: 10,
        minHeight: 50,
        color: '#614938',
    },
    view: {
        backgroundColor: "F2F1EB",
        height: 100 * vh,
    },

});

interface PCButtonProps { //PC short for profile creation
    dest: any;
    title: string;
    color?: string;
}

function PCButton({ dest, title }: PCButtonProps) {
    return (

        <TouchableOpacity onPress={() => { router.navigate(dest) }}>
            <View style={{
                display: 'flex',
                flex: 1,
                backgroundColor: '#688A65',
                minWidth: 275,
                minHeight: 35,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text
                    style={{
                        fontWeight: 'bold',
                        color: '#F2F1EB',
                    }}
                >{title}</Text>
            </View>
        </TouchableOpacity>

    );
}

export default function CreateProfile() {
    let [first, setFirst] = React.useState('');
    let [last, setLast] = React.useState('');
    let [phone, setPhone] = React.useState('');
    let [email, setEmail] = React.useState('');
    let [password, setPass] = React.useState('');
    let [cPassword, setCPass] = React.useState('');
    let [day, setDay] = React.useState('');
    let [month, setMonth] = React.useState('');
    let [year, setYear] = React.useState('');
    /*
        async function onSumbit() {
            try {
                const userProfile = {
                    first,
                    last,
                    bday,
                    phone,
                    email,
                    password,
                };
                await AsyncStorage.setItem('userProfile', JSON.stringify(userProfile));
                alert('Account created!');
            } catch (e) {
                console.error('Account creation failed :(', e);
            }
        }
    */
    async function onSubmit() { // there's an issue with db here dob -> bday -> "02/14/2005"
        // adds user to user table in firebase setting their email as their doc.id
        const birthday = new Date(year + "-" + month + "-" + day);
        const birthdayTimestamp = Timestamp.fromDate(birthday);

        await setDoc(doc(db, "users", email), {
            dob: birthdayTimestamp,
            email: email,
            first: first,
            last: last,
            password: cPassword,
            phone: parseInt(phone),
        });

        alert("Account Created for " + email); // should print the email that the user submitted
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#F2F1EB',
            paddingLeft: 16,
            paddingRight: 16,
        }}>
            <StatusBar
                animated={true}
                backgroundColor="#688a65"
                barStyle={'default'}
                showHideTransition={'fade'}
                networkActivityIndicatorVisible={true}
                translucent={true}
            />
            <View style={styles.rowCentered}>
                <View
                    id='backBtn'
                    style={styles.backBtn}>
                    <Ionicons name='arrow-back-circle-outline' size={50} color='#614938' />
                </View>
                <View id='logo' style={styles.logo}>
                    <View style={{}}>
                        <Image
                            source={require('@/assets/images/splash-icon.png')}
                            style={{
                                width: 40 * vw,
                                height: 40 * vw,
                                backgroundColor: ""
                            }}
                            resizeMode="contain"
                        />
                    </View>
                </View>
            </View>
            <View id='enterInfo'>
                <View style={styles.row}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='first name *'
                        placeholderTextColor='black'
                        onChangeText={setFirst}
                        value={first}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='last name *'
                        placeholderTextColor='black'
                        onChangeText={setLast}
                        value={last}
                    />
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: "row",
                    justifyContent: 'space-between',
                }}>
                    <TextInput
                        style={styles.miniTextInput}
                        placeholder='Birth MM *'
                        placeholderTextColor='black'
                        onChangeText={setMonth}
                        value={month}
                    />
                    <TextInput
                        style={styles.miniTextInput}
                        placeholder='Birth DD *'
                        placeholderTextColor='black'
                        onChangeText={setDay}
                        value={day}
                    />
                    <TextInput
                        style={styles.miniTextInput}
                        placeholder='Birth YYYY *'
                        placeholderTextColor='black'
                        onChangeText={setYear}
                        value={year}
                    />
                </View>
                <View style={styles.row}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='phone number *'
                        placeholderTextColor='black'
                        onChangeText={setPhone}
                        value={phone}
                    />
                </View>
                <View style={styles.row}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='email *'
                        placeholderTextColor='black'
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.row}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='password *'
                        placeholderTextColor='black'
                        onChangeText={setPass}
                        value={password}
                    />
                </View>
                <View style={styles.row}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='confirm password * '
                        placeholderTextColor='black'
                        value={cPassword}
                        onChangeText={setCPass}
                    />
                </View>
            </View>
            <View /*id="btnRow"*/ style={styles.rowCentered}>
                <View style={styles.button}>
                    <TouchableOpacity // if we have time, we should design a button component that has all these features.
                        onPress={() => { onSubmit() }}
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
                            <Text style={{ fontWeight: 'bold', color: '#F2F1EB' }}>SUBMIT</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    );
}

/** OLD CODE
 *      // const docRef = await addDoc(collection(db, "users"), {
        //     dob: birthdayTimestamp,
        //     email: email,
        //     first: first,
        //     last: last,
        //     password: cPassword,
        //     phone: parseInt(phone),
        // });
 */