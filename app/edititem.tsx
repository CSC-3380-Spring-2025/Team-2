import React, { useEffect, useState } from 'react';
import { Link, useLocalSearchParams } from 'expo-router';
import { Button, Dimensions, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { db } from '@/FirebaseConfig';
import { collection, addDoc, arrayUnion, getDocs, updateDoc, setDoc, deleteDoc, doc, query, where, DocumentData, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export default function EditMenu() {
    let { docID }: any = useLocalSearchParams();
    const docRef = doc(db, "menu", docID);
    const [stuff, setStuff] = useState<DocumentData>();

    let [name, setName] = React.useState<string>(stuff?.name);
    let [price, setPrice] = React.useState<string>(stuff?.price);
    let [type, setType] = React.useState(stuff?.itemtype);
    let [img, setImg] = React.useState(stuff?.img);
    let [sale, setSale] = React.useState<boolean>(false);
    let [descr, setDescr] = React.useState('');

    useEffect(() => {
        async function fetchStuff() {
            const docSnap = await getDoc(docRef); // functional
            if (docSnap.exists()) { // outputs true
                const data = docSnap.data(); // functional
                setStuff(data);
                setName(data.name);
                setPrice(data.price);
                setType(data.itemtype);
                setImg(data.img);
                setSale(data.sale || false);
            } else {
                alert("No Stuff Found");
            }
        }
        fetchStuff();
    }, []);

    async function onSubmit() {
        // alert('Name: ' + name + '\nPrice: ' + price + '\nType: ' + type + '\nImg: ' + img + '\nsale: ' + sale);
        await updateDoc(docRef, {
            img: img,
            itemtype: type,
            name: name,
            price: parseFloat(price),
            sale: sale,
        });
        alert('updated item');
    }

    function checkBox() {
        if (sale == false) {
            setSale(true);
        }
        else {
            setSale(false);
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
                                width: 200,
                                height: 200,
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
                        placeholder={stuff?.name}
                        placeholderTextColor='black'
                        onChangeText={setName}
                        value={name}
                    />
                </View>
                <View style={styles.row}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'$' + stuff?.price}
                        placeholderTextColor='black'
                        onChangeText={setPrice}
                        value={price}
                    />
                </View>
                <View style={styles.row}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={stuff?.itemtype}
                        placeholderTextColor='black'
                        value={type}
                        onChangeText={setType}
                    />
                </View>
                <View style={styles.row}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={stuff?.img}
                        placeholderTextColor='black'
                        onChangeText={setImg}
                        value={img}
                    />
                </View>
                <View style={{
                    display: 'flex', flexDirection: 'row', height: 50,
                    margin: 10,
                    minHeight: 50,
                }}>
                    <Text>{'Sale?'}</Text>
                    <TouchableOpacity
                        style={{ marginLeft: 10, flex: 1, minHeight: 20, minWidth: 20, maxHeight: 20, maxWidth: 20, borderWidth: 3, backgroundColor: sale ? '#1F645F' : 'transparent' }}
                        onPress={() => { checkBox() }}>
                        <Ionicons name='checkmark-sharp' color="white" />
                    </TouchableOpacity>

                </View>
            </View>
            <View style={styles.rowCentered}>
                <View style={styles.button}>
                    <TouchableOpacity // if we have time, we should design a button component that has all these features.
                        onPress={() => { onSubmit(); }}
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

const styles = StyleSheet.create({
    backBtn: {
        maxHeight: 50,
        maxWidth: 70,
        position: 'absolute',
        left: 10,
        top: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#F2F1EB',
        justifyContent: 'center',
        //paddingTop:80,
        //alignItems: 'center'
    },
    text: {
        color: '#33261D',
    },
    ButtonAdd: {// hopefully will be the add items button 
        color: '#33261D',//adjust color later
        // want to be in the top 
        flex: 1,
        borderRadius: 5,
        minWidth: 250,
        maxHeight: 50,
        top: 30,
        left: 50,
        position: 'absolute',
        alignItems: 'center',
    },
    ButtonDelete: {
        color: '#33261D',
        flex: 1,
        borderRadius: 5,
        minWidth: 250,
        maxHeight: 50,
        position: 'absolute',
        top: 30,
        right: 150,
        alignItems: 'center',
    },
    itemContainer: {
        flex: 1,
        color: '#33261D',
        height: 50,
        width: 30,
        position: 'absolute',

    },
    editButton: {
        color: '#33261D',
        flex: 1,
        borderRadius: 5,
        minWidth: 125,
        maxHeight: 50,
        position: 'absolute',
        marginTop: 100,

    },
    logo: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "",
        width: 55,
        maxHeight: 250
    },
    onBoxDeleteButton: {
        color: '#33261D',
        flex: 1,
        borderRadius: 5,
        minWidth: 125,
        maxHeight: 50,
        position: 'absolute',
        marginTop: 100,
        left: 150,
    },
    button: {
        minHeight: 50,
        minWidth: 275,
        maxWidth: 300,
        // borderColor: 'black',
        backgroundColor: Platform.select({ ios: 'transparent', android: 'transparent', default: 'transparent' }),
        borderWidth: Platform.select({ ios: 2, android: 0, default: 0 }),
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    cancelBtn: {
        flex: 1,
        width: 50,
        height: 50,
        backgroundColor: Platform.select({ ios: 'red', android: 'transparent', default: 'transparent' }),
        borderWidth: Platform.select({ ios: 2, android: 0, default: 0 }),

    },
    completeBtn: {
        flex: 1,
        width: 50,
        height: 50,
        backgroundColor: Platform.select({ ios: '#688a65', android: 'transparent', default: 'transparent' }),
        borderWidth: Platform.select({ ios: 2, android: 0, default: 0 }),

    },
    divider1: {
        display: "flex",
        flex: 1,
        backgroundColor: "#97ac82",
        minHeight: 600,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        justifyContent: "flex-end",
        borderColor: 'red',
    },
    divider2: {
        display: "flex",
        flex: 1 / 2,
        backgroundColor: "#688a65",
        minHeight: 350,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        justifyContent: "flex-end",
        borderColor: 'orange',
        marginTop: 30,
    },
    divider3: {
        display: "flex",
        flex: 1 / 2,
        backgroundColor: "#2c341b",
        minHeight: 210,
        borderColor: 'yellow',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        justifyContent: "center",
        marginTop: 30,
    },
    header: {
        alignContent: 'center',
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        minHeight: 70,
        marginBottom: 30,
        backgroundColor: '',
    },
    rowCentered: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '',
    },
    row: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
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
});