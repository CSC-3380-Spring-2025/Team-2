import React from 'react';
import { Link, RelativePathString } from 'expo-router';
import { Button, Dimensions, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { getAuth } from 'firebase/auth';
import { db } from '@/FirebaseConfig';
import { collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc, doc, query, where, Timestamp } from 'firebase/firestore';
const { height, width, } = Dimensions.get('window');
const vw = width / 100;
const vh = height / 100;

// function print loginUI 
export default function Login() {
    // create email variable and setEmail funct
    let [email, setEmail] = React.useState('');

    // create password variable and setPassword funct
    let [password, setPassword] = React.useState('');

    async function signIn() { //FUNCTIONAL
        const docRef = doc(db, 'users', email); // goes to users collection and retrieve the user info ties to that email / doc.id
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
            alert("incorrect email");
        }
        else {
            const data = docSnap.data();
            const correct: string = data.password;
            if (correct === password) { // if password entered is correct
                router.navigate('/(tabs)/home');
            }
            else {
                alert("incorrect password");
            }
        }
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
                barStyle={'light-content'}
                showHideTransition={'fade'}
                networkActivityIndicatorVisible={true}
                translucent={true}
            />
            <View style={styles.rowCentered}>
                <Image
                    source={require('@/assets/images/splash-icon.png')}
                    style={{
                        width: 40 * vw,
                        height: 40 * vw,
                        backgroundColor: ''
                    }}
                    resizeMode="contain"
                />
            </View>
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

            <View style={{ marginTop: 90, marginBottom: 80 }}>
                <View style={styles.rowCentered}>
                    <TouchableOpacity // if we have time, we should design a button component that has all these features.
                        onPress={() => {
                            signIn();
                            // router.navigate('/(tabs)/home')
                        }}>
                        <View style={{
                            display: 'flex',
                            flex: 1,
                            backgroundColor: '#688A65',
                            minWidth: 275,
                            minHeight: 35,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{ fontWeight: 'bold', color: '#F2F1EB' }}>LOGIN</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ marginTop: 30 }}>
                <View style={styles.rowCentered}>
                    <Text style={{ height: 30 }}>don't have an account?</Text>
                </View>

                <View style={styles.rowCentered}>
                    <TouchableOpacity // if we have time, we should design a button component that has all these features.
                        onPress={() => {
                            // signUp();
                            router.push('/createprofile');
                        }}>
                        <View style={{
                            display: 'flex',
                            flex: 1,
                            backgroundColor: '#688A65',
                            minWidth: 275,
                            minHeight: 35,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{ fontWeight: 'bold', color: '#F2F1EB' }}>SIGNUP</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    );
}
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
        minWidth: 220,
        maxWidth: 275,
        minHeight: 50,
        backgroundColor: Platform.select({ ios: '#688a65', android: 'transparent', default: 'transparent' }),
        borderColor: '#2c341b',
        borderWidth: Platform.select({ ios: 2, android: 0, default: 2 }),
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
        flex: 1,
    },

});


// OLD CODE
// const signIn = async () => { // needs to check the database with the username entered
//     try {
//         const user = await signInWithEmailAndPassword(auth, email, password);
//         if (user) {
//             router.replace('/(tabs)/home');
//         };
//     } catch (error: any) {
//         console.log(error);
//         alert("Sign in failed\nPlease try again");
//     }
// }
// interface RButtonProps {
//     title: string,
// }
// interface CButtonProps {
//     dest: string;
//     title: string;
// }
// function RButton({ title }: RButtonProps) { // having issues being able to pass functions through this
//     return (
//         <TouchableOpacity >
//             <View style={{
//                 display: 'flex',
//                 flex: 1,
//                 backgroundColor: '#688A65',
//                 minWidth: 275,
//                 minHeight: 35,
//                 justifyContent: 'center',
//                 alignItems: 'center'
//             }}>
//                 <Text style={{ fontWeight: 'bold', color: '#F2F1EB', }}>{title}</Text>
//             </View>
//         </TouchableOpacity>
//     )
// }
//CButton short for Customer Button
// function CButton({ dest, title }: CButtonProps) { // plan to make this an accessible API
//     return (
//         <Link href={dest} asChild>
//             <TouchableOpacity>
//                 <View style={{
//                     display: 'flex',
//                     flex: 1,
//                     backgroundColor: '#688A65',
//                     minWidth: 275,
//                     minHeight: 35,
//                     justifyContent: 'center',
//                     alignItems: 'center'
//                 }}>
//                     <Text
//                         style={{
//                             fontWeight: 'bold',
//                             color: '#F2F1EB',
//                         }}
//                     >{title}</Text>
//                 </View>
//             </TouchableOpacity>
//         </Link>
//     );
// }
// const signUp = async () => {
//     try {
//         const user = await createUserWithEmailAndPassword(auth, email, password);
//         if (user) {
//             router.replace('/(tabs)/home');
//         };
//     } catch (error: any) {
//         console.log(error);
//         alert("Sign in failed\nPlease try again");
//     }
// }