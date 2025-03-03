import React from 'react';
import { Button, Dimensions, Image, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

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
        backgroundColor: Platform.select({ ios: '#688a65', android: 'transparent' }),
        borderColor: '#2c341b',
        borderWidth: Platform.select({ ios: 2, android: 0 }),
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,

    },
    columnCentered: {
        display: 'flex',
        flexDirection: 'column',
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
        // backgroundColor: 'lightblue',
    },
    rowEnd: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
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

// function print loginUI 
export default function Login() {
    // create email variable and setEmail funct
    let [email, setEmail] = React.useState('');

    // create password variable and setPassword funct
    let [password, setPassword] = React.useState('');

    // printEmail take string variable 'e' and prints it
    function printEmail(e: string) { // testing function; will be replaces soon
        console.log(e);
    }

    // printPass take string variable 'p' and prints it 
    function printPass(p: any) {
        console.log(p);
    }

    return (
        <ScrollView style={styles.scrollview}>
            <View style={styles.view}>
                <View style={styles.rowCentered}><Image
                    source={require('C:/Users/witch/Projects/Team-2/assets/images/splash-icon.png')}
                    style={{
                        width: 40 * vw,
                        height: 40 * vw,
                        backgroundColor: ''
                    }}
                    resizeMode="contain"
                /></View>
                <View style={styles.row}>
                    <TextInput
                        onChangeText={setEmail} // uses setEmail funct to update variable email as users types
                        placeholder="email * "
                        style={styles.textInput}
                        placeholderTextColor='black'
                        textContentType="emailAddress"
                        value={email} // passes email variable
                    ></TextInput>
                </View>
                <View style={styles.row}>
                    <TextInput
                        onChangeText={setPassword} // uses setPassword funct to update variable password as users types
                        textContentType="password"
                        placeholder="password * "
                        placeholderTextColor='black'
                        style={styles.textInput}
                        value={password} // passes password variable
                    ></TextInput>
                </View>
                <View style={styles.rowEnd}>
                    <Text style={{ height: 30 }}>forgot password?</Text>
                </View>



                <View style={{ marginTop: 90 }}>
                    <View style={styles.rowCentered}>
                        <View style={styles.button}>
                            <Button
                                title="login"
                                color={Platform.select({ ios: '#F2F1EB', android: '#688a65' })}
                                onPress={() => {
                                    console.log("Pressed!");
                                    printEmail(email), printPass(password);
                                }} />
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 30 }}>
                    <View style={styles.rowCentered}>
                        <Text style={{ height: 30 }}>don't have an account?</Text>
                    </View>
                    <View style={styles.rowCentered}>
                        <View style={styles.button}>
                            <Button title="signup" color={Platform.select({ ios: '#F2F1EB', android: '#688a65' })} />
                        </View>
                    </View>
                </View>

            </View>

        </ScrollView>
    );
}