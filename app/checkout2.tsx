import React from 'react';
import { Link } from 'expo-router';
import { Button, Dimensions, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { db } from '@/FirebaseConfig';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where, } from 'firebase/firestore';
import { routeToScreen } from 'expo-router/build/useScreens';


let data: any = [
    {
        name: 'Honey Lemon Ginger',
        cost: 7.50,
        key: 1,
    },
    {
        name: 'Thai Tea',
        cost: 5.55,
        key: 2,
    },
    {
        name: 'Strawberry Matcha',
        cost: 8.50,
        key: 3
    },
    {
        name: 'Honey Lemon Ginger',
        cost: 7.50,
        key: 1,
    },
    {
        name: 'Thai Tea',
        cost: 5.55,
        key: 2,
    },
    {
        name: 'Strawberry Matcha',
        cost: 8.50,
        key: 3
    },
];


function GenerateCart() {
    let totalCost = 43.1; // need a function for this
    return (
        <ScrollView style={styles.scrollView}>
            <View>
                {data.map((item: any) => (
                    <View style={styles.div2}>
                        <View style={styles.item}>
                            <Image
                                source={require('@/assets/images/cart.png')}
                                style={styles.image}>
                            </Image>
                            <Text style={styles.body}>
                                - 1 +
                            </Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.body}>
                                {item.name}
                            </Text>
                            <Text style={styles.body}>
                                ${item.cost}
                            </Text>
                        </View>
                    </View>

                ))}

                <View style={styles.div2}>
                    <Text style={styles.body}>{"Total: $" + totalCost}</Text>
                </View>
            </View>
        </ScrollView>

    )
}


const Checkout = () => {
    const onPress = () => router.push('/checkout')
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#688a65"
                barStyle={'light-content'}
                showHideTransition={'fade'}
                networkActivityIndicatorVisible={true}
                translucent={true}
            />
            <View id='header' style={styles.header}>
                <TouchableOpacity onPress={() => { router.navigate('/profilepage') }}>
                    <View id='pfp' style={{
                        backgroundColor: '',
                        minHeight: 70,
                        minWidth: 70,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'

                    }}>
                        <Ionicons
                            name="person-circle-outline"
                            size={50} color="#614938"
                        />
                    </View>
                </TouchableOpacity>
                <View id='title' style={{ backgroundColor: '', display: 'flex', justifyContent: 'center', }}>
                    <Text style={styles.title}>checkout</Text>
                </View>
                <View style={{
                    backgroundColor: '',

                }}>
                    <TouchableOpacity onPress={() => { router.navigate('/cart') }}> {/*signs the user out to login page */}
                        <Image
                            source={require('@/assets/images/cart.png')}
                            style={{
                                minHeight: 70,
                                minWidth: 70,
                                width: 70,
                                height: 70,
                                maxHeight: 70,
                                maxWidth: 70,
                                backgroundColor: '',
                            }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.div1}>
                <GenerateCart />
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    scrollView: {

    },

    container: {
        flex: 1,
        //padding: 20,
        backgroundColor: '#fff'
    },
    bottom: {
        display: 'flex',
        backgroundColor: '#7D5E49',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 144,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    div1: {
        display: "flex",
        flex: 1,
        padding: 20,
        backgroundColor: "#688a65",
        minHeight: 790,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        justifyContent: "flex-start",
        borderColor: 'red',
    },
    div2: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        maxHeight: 130,
        backgroundColor: '#f7eeda',
        borderRadius: 20,
        justifyContent: 'space-between',

        //rowGap: 10,
        margin: 20,

    },
    div3: {
        display: 'flex',
        backgroundColor: '#f7eeda'

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
    body: {
        textAlign: 'center',
        fontSize: 20,
        margin: 10,
        color: '#000',
    },
    item: {
        width: '50%'
    },
    image: {
        minHeight: 70,
        minWidth: 70,
        width: 70,
        height: 70,
        maxHeight: 70,
        maxWidth: 70,
        backgroundColor: '',
        alignSelf: 'center'
    },
    checkoutButton: {
        backgroundColor: '#989769',
        height: 67,
        width: 288,
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: '#33261D',
        borderWidth: 3,
        //flexDirection: 'row',

    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
    },
})

export default Checkout;