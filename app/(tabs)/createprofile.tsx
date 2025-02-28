import React from 'react';
import { Button, Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
const { height, width, } = Dimensions.get('window');
const vw = width / 100;
const vh = height / 100;

const styles = StyleSheet.create({
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#33261D',
    },
    container: {
        flex: 1,
        backgroundColor: '#F2F1EB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    cRow: {
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
        backgroundColor: '#99999C',
    },
    text: {
        color: '#33261D'
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
        backgroundColor: "white",
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
                <View style={styles.cRow}>
                    <View id='backBtn' style={{ maxHeight: 50, maxWidth: 60, position: 'fixed', top: 20, left: 20, }}>
                        <Button title='back' />
                    </View>

                    <View style={{ backgroundColor: "", width: (55 * vw), alignItems: 'center' }}>
                        <View id='logo' style={{ maxHeight: 250 }}>
                            <Image
                                source={require('C:/Users/witch/Projects/Team-2/assets/images/splash-icon.png')}
                                style={{
                                    marginTop: 20,
                                    width: 40 * vw,
                                    height: 40 * vw,
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
                            onChangeText={setFirst}
                            value={first}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder='last name *'
                            onChangeText={setLast}
                            value={last}
                        />
                    </View>
                    <View style={styles.row}>
                        <TextInput
                            style={styles.textInput}
                            placeholder='phone number *'
                            onChangeText={setPhone}
                            value={phone}
                        />
                    </View>
                    <View style={styles.row}>
                        <TextInput
                            style={styles.textInput}
                            placeholder='email'
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                    <View style={styles.row}>
                        <TextInput
                            style={styles.textInput} placeholder='password *'
                            onChangeText={setPass}
                            value={password}
                        />
                    </View>
                    <View style={styles.row}>
                        <TextInput
                            style={styles.textInput}
                            placeholder='confirm password * '
                            value={cPassword}
                            onChangeText={setCPass}
                        />
                    </View>
                </View>
                <View id="btnRow" style={styles.cRow}>
                    <View style={{
                        flex: 1,
                        borderRadius: 5, maxWidth: 200, backgroundColor: "red", marginTop: 70,
                    }}>
                        <Button
                            title='create account'
                            color="#a2b08b"
                            onPress={onSumbit}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}