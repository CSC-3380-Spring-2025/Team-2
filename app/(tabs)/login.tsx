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
    scrollview: {
        width: 100 * vw,
        maxWidth: 500,
        paddingLeft: 4 * vw,
        paddingRight: 4 * vw,
    },
    text: {
        color: '#33261D'
    },
    view: {
        backgroundColor: "#8ceeda",
        height: 100 * vh,
    },
    textInput: {
        backgroundColor: "white",
    },
    Button: {
        maxHeight: 50,
        backgroundColor: "#a2b08b"
    }

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
                <Image
                    source={require('C:/Users/witch/Projects/Team-2/assets/images/splash-icon.png')}
                    style={{
                        width: 20 * vw,
                        height: 10 * vw,
                        backgroundColor: 'red'
                    }}
                    resizeMode="contain"
                />
                <TextInput
                    onChangeText={setEmail} // uses setEmail funct to update variable email as users types
                    placeholder="EMAIL"
                    style={styles.textInput}
                    textContentType="emailAddress"
                    value={email} // passes email variable
                ></TextInput>
                <TextInput
                    onChangeText={setPassword} // uses setPassword funct to update variable password as users types
                    textContentType="password"
                    placeholder="PASSWORD"
                    style={styles.textInput}
                    value={password} // passes password variable
                ></TextInput>
                <Text>forgot password</Text>
                <Button
                    title="login"
                    onPress={() => {
                        console.log("Pressed!");
                        printEmail(email), printPass(password);
                    }} />
                <Text>don't have an account?</Text>
                <Button title="signup" />
            </View>
        </ScrollView>
    );
}