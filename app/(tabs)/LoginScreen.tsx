import React from 'react';
import { Button, Dimensions, ScrollView, StyleSheet, TextInput, View } from 'react-native';

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

});

export default function LoginScreen() {
    let [email, setEmail] = React.useState(''); // '' initializes it, leaving it blank results in ghost errors.
    let [password, setPassword] = React.useState('');

    function printEmail(em: any) { // testing function; will be replaces soon
        console.log(em);
    }
    function printPass(pa: any) {
        console.log(pa);
    }

    return (
        <ScrollView style={styles.scrollview}>
            <View style={styles.view}>
                <img
                    alt="Bubble Shoppe"
                    width="20%"
                    src="http://www.csc.lsu.edu/~qywang/CS2610/LSU_logo.png"
                ></img>
                <TextInput
                    onChangeText={setEmail}
                    placeholder="EMAIL"
                    style={styles.textInput}
                    textContentType="emailAddress"
                    value={email}
                ></TextInput>
                <br />
                <TextInput
                    onChangeText={setPassword}
                    textContentType="password"
                    placeholder="PASSWORD"
                    style={styles.textInput}
                    value={password}
                ></TextInput>
                <p>forgot password</p>
                <br />
                <Button
                    title="login"
                    onPress={() => {
                        console.log("Pressed!");
                        printEmail(email);
                    }} />
                <br />
                <p>don't have an account?</p>
                <Button title="signup" />
            </View>
        </ScrollView>
    );
}

/*
class LoginScreenTest extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            email: "", // string varible email
            password: "", // string variable password
        };
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }
    setEmail(email: string) {
        this.setState({ email });
    }
    setPassword(password: string) {
        this.setState({ password });
    }
    render() {
        return (
            <ScrollView style={styles.scrollview}>
                <View style={styles.view}>
                    <img
                        alt="Bubble Shoppe"
                        width="20%"
                        src="http://www.csc.lsu.edu/~qywang/CS2610/LSU_logo.png"
                    ></img>
                    <TextInput
                        onChangeText={this.setEmail}
                        placeholder="EMAIL"
                        style={styles.textInput}
                        textContentType="emailAddress"
                        value={this.state.email}
                    ></TextInput>
                    <br />
                    <TextInput
                        textContentType="password"
                        placeholder="PASSWORD"
                        style={styles.textInput}
                    ></TextInput>
                    <p>forgot password</p>
                    <br />
                    <Button title="login"></Button>
                    <br />
                    <p>don't have an account?</p>
                    <Button title="signup"></Button>
                </View>
            </ScrollView>
        );
    }
}
*/
