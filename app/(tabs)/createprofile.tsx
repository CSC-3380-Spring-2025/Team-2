import React from 'react';
import { Button, Dimensions, Image, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
const { height, width, } = Dimensions.get('window');
const vw = width / 100;
const vh = height / 100;

const styles = StyleSheet.create({
    backBtn: {
        maxHeight: 50,
        maxWidth: 70,
        backgroundColor: '',
        position: 'absolute',
        left: 0,
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
    view: {
        backgroundColor: "F2F1EB",
        height: 100 * vh,
    },

});

export default function CreateProfile() {
    let [first, setFirst] = React.useState('');
    let [last, setLast] = React.useState('');
    let [phone, setPhone] = React.useState('');
    let [email, setEmail] = React.useState('');
    let [password, setPass] = React.useState('');
    let [cPassword, setCPass] = React.useState('');

    function onSumbit() { // functional
        alert("First: " + first + "\nLast: " + last + "\nPhone: " + phone + "\nEmail: " + email + "\nPassword: " + password + "\nCPassword: " + cPassword);
    }

    return (
        <ScrollView style={styles.scrollview}>
            <View style={styles.view}>
                <View style={styles.rowCentered}>
                    <View
                        id='backBtn'
                        style={styles.backBtn}>
                        <Ionicons name='arrow-back-circle-outline' size={50} color='#614938' />
                    </View>
                    <View id='logo' style={styles.logo}>
                        <View style={{}}>
                            <Image
                                source={require('C:/Users/witch/Projects/Team-2/assets/images/splash-icon.png')}
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
                            placeholder='email'
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
                <View id="btnRow" style={styles.rowCentered}>
                    <View style={styles.button}>
                        <Button
                            title='create account'
                            color={Platform.select({ ios: '#F2F1EB', android: '#688a65' })}
                            onPress={onSumbit}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}