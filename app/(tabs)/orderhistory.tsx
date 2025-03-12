/**
 * Flex column reverse of items from newest to oldest. 
 */

import React from 'react';
import { Button, Dimensions, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const { height, width, } = Dimensions.get('window');
const vw = width / 100;
const vh = height / 100;

const styles = StyleSheet.create({
    button: {
        flex: 1,
        minHeight: 30,
        maxHeight: 50,
        maxWidth: 150,
        backgroundColor: Platform.select({ ios: '#688a65', android: 'transparent', default: 'transparent' }),
        borderWidth: Platform.select({ ios: 2, android: 0, default: 0 }),
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        justifyContent: 'center',
        alignContent: 'center'
    },
    divider1: {
        display: "flex",
        flex: 1,
        backgroundColor: "#97ac82",
        // height: 60 * vw,
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

var item1 = {
    name: 'matcha latte',
    price: 7.50,
    dateOrder: 'Jan 01 2025',
    imageUrl: 'https://www.eatingbirdfood.com/wp-content/uploads/2021/04/iced-matcha-latte-hero.jpg',
    color: 'red',
    loca: 'College Dr'
};

var item2 = {
    name: 'brown sugar boba',
    price: 8.50,
    dateOrder: 'Jan 02 2025',
    imageUrl: 'https://wallpapersok.com/images/hd/bubble-tea-classic-brown-sugar-1ovssntxjtitoj65.jpg',
    color: 'yellow',
    loca: 'College Dr'
};

var item3 = {
    name: 'strawberry tea',
    price: 6.50,
    dateOrder: 'Jan 03 2025',
    imageUrl: 'https://myveganminimalist.com/wp-content/uploads/2022/04/Strawberry-Milk-Tea-Boba-11.jpg',
    color: 'blue',
    loca: 'Coporate Dr'
};

var history = [item1, item2, item3];


function ItemList2() {
    function onSubmit(itemName: string) {
        alert(itemName + ' added to cart');
    }

    return (
        <View>
            {history.map((item) => (
                <View
                    id='drink'
                    style={{
                        display: 'flex',
                        minWidth: 350,
                        minHeight: 150,
                        maxWidth: 400,
                        maxHeight: 160,
                        marginBottom: 30,
                        flexDirection: 'row',
                        backgroundColor: 'pink',
                        borderRadius: 15,
                        borderColor: '#614938',
                        borderWidth: 2,
                    }}>
                    <View id='left'
                        style={{
                            display: 'flex',
                            flex: 1,
                        }}>
                        <View style={{
                            display: 'flex',
                            flex: 1,
                        }}>
                            <Text style={{
                                display: 'flex',
                                flex: 0,
                                justifyContent: 'center',
                                marginBottom: 10,
                            }}>{item.dateOrder}</Text>
                            <Image
                                src={item.imageUrl}
                                style={{
                                    flex: 1,
                                }}
                                resizeMode="contain"
                            />
                        </View>
                    </View>

                    <View
                        id='right'
                        style={{
                            display: 'flex',
                            flex: 1,

                            flexDirection: 'column'
                        }}>

                        <View id='text' style={{
                            display: 'flex',
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                        }}>
                            <View>
                                <Text>Location: {item.loca}</Text>
                            </View>
                            <View>
                                <Text>Order: {item.name}</Text>
                            </View>
                        </View>
                        <View style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            alignItems: 'center'
                        }}>
                            <View id='button' style={styles.button}>
                                <Button
                                    title='reorder'
                                    color={Platform.select({
                                        ios: '#F2F1EB',
                                        android: '#688a65',
                                        default: '#688a65'
                                    })}
                                    onPress={() => { onSubmit(item.name); }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    )
}

export default function OrderHistory() {
    return (
        <SafeAreaView style={styles.safeView}>
            <StatusBar
                animated={true}
                backgroundColor="#688a65"
                barStyle={'light-content'}
                showHideTransition={'fade'}
                networkActivityIndicatorVisible={true}
                translucent={true}
            />
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
                    <Text style={styles.title}>order again</Text>
                </View>
                <View style={{
                    backgroundColor: '',

                }}>
                    <Image
                        source={require('@/assets/images/splash-icon.png')}
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
            <View style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: ''
            }}>
                <ItemList2 />
            </View>
        </SafeAreaView>
    );
}