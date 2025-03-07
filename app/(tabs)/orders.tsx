import React from 'react';
import { Button, Dimensions, Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const { height, width, } = Dimensions.get('window');
const vw = width / 100;
const vh = height / 100;

const styles = StyleSheet.create({
    button: {
        minHeight: 50,
        minWidth: 275,
        maxWidth: 300,
        marginTop: 30,
        // borderColor: 'black',
        backgroundColor: Platform.select({ ios: '#688a65', android: 'transparent', default: 'transparent' }),
        borderWidth: Platform.select({ ios: 2, android: 0, default: 0 }),
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    divider1: {
        display: "flex",
        backgroundColor: "#97ac82",
        minHeight: 600,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        justifyContent: "flex-end",
        borderColor: 'red',
    },
    divider2: {
        display: "flex",
        backgroundColor: "#688a65",
        height: 350,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        justifyContent: "flex-end",
        borderColor: 'orange',
        marginTop: 30,
    },
    divider3: {
        display: "flex",
        backgroundColor: "#2c341b",
        height: 210,
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
        minHeight: 30,
        marginBottom: 30,
        backgroundColor: '',
        // paddingLeft: 16,
        // paddingRight: 16,
    },
    output: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        minWidth: 300
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
    safeView: {
        flex: 1,
        backgroundColor: '#F2F1EB',
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
    view: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "#F2F1EB",
        height: 100 * vh,
        alignContent: 'flex-end',
    },
});


var testObject = { // need to figure out how to encapsulate this data, cannot be blatent info
    orderConfirmation: "Confirmed!",
    orderLocation: "College Dr",
    orderDate: "March 14th, 2025",
    orderNumber: 101,
    customerContact: "313 799 1809",
    itemsOrdered: ['(1x) Matcha Latte ',],
    total: 21.99,
};

export default function Orders() {
    return (
        <SafeAreaView style={styles.safeView}>
            <View id='header' style={styles.header}>
                <View id='pfp' style={{
                    backgroundColor: '',
                    minHeight: 70,
                    minWidth: 70,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'

                }}>
                    <Ionicons
                        name="arrow-back-circle-outline"
                        size={50} color="#614938"
                    />
                </View>
                <View id='title' style={{ backgroundColor: '', display: 'flex', justifyContent: 'center', }}>
                    <Text style={styles.title}>orders</Text>
                </View>
                <View style={{
                    backgroundColor: '',

                }}>
                    <Image
                        source={require('C:/Users/witch/Projects/Team-2/assets/images/splash-icon.png')}
                        style={{
                            minHeight: 70,
                            minWidth: 70,
                            width: 70,
                            height: 70,
                            maxHeight: 70,
                            maxWidth: 70,
                            backgroundColor: ''
                        }}
                        resizeMode="contain"
                    />
                </View>
            </View>
            <View
                id='main'
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    flex: 1,
                }}>
                <View style={styles.divider1}>
                    <View style={{
                        alignContent: 'space-evenly',
                        backgroundColor: "",
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'column',
                    }}>
                        <View id='info' style={{

                            display: 'flex',
                            flex: 1,
                            alignContent: 'center',
                            flexDirection: "column",
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <View style={{}}>
                                <View style={styles.output}>
                                    <Text>Order Status: </Text> {/* tells you whether it is confirmed or not */}
                                    <Text>{testObject.orderConfirmation}</Text>
                                </View>
                                <View style={styles.output}>
                                    <Text>Order Location: </Text>
                                    <Text>{testObject.orderLocation}</Text>
                                </View>
                                <View style={styles.output}>
                                    <Text>Order Date & Time: </Text>
                                    <Text>{testObject.orderDate}</Text>
                                </View>
                                <View style={styles.output}>
                                    <Text>Order Number: </Text>
                                    <Text>{testObject.orderNumber}</Text>
                                </View>
                                <View style={styles.output}>
                                    <Text>Customer Contact Info: </Text>
                                    <Text>{testObject.customerContact}</Text>
                                </View>
                                <View style={styles.output}>
                                    <Text>Items Ordered: </Text>
                                    <Text>{testObject.itemsOrdered}</Text>
                                </View>
                                <View style={styles.output}>
                                    <Text>Total: </Text>
                                    <Text>${testObject.total}</Text>
                                </View>
                            </View>
                        </View>
                        <View id='buttons' style={{ flex: 1 }}>
                            <View style={styles.rowCentered}>
                                <View style={styles.button}>
                                    <Button
                                        title='order pickup'
                                        color={Platform.select({
                                            ios: '#F2F1EB',
                                            android: '#2c341b',
                                            default: '#2c341b'
                                        })}
                                    />
                                </View>
                            </View>
                            <View style={styles.rowCentered}>
                                <View style={styles.button}>
                                    <Button
                                        title='view cart'
                                        color={Platform.select({
                                            ios: '#F2F1EB',
                                            android: '#2c341b',
                                            default: '#2c341b'
                                        })}
                                    />
                                </View>
                            </View>
                            <View style={styles.rowCentered}>
                                <View style={styles.button}>
                                    <Button
                                        title='previous orders'
                                        color={Platform.select({
                                            ios: '#F2F1EB',
                                            android: '#2c341b',
                                            default: '#2c341b'
                                        })}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}