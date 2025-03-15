import React from 'react';
import { Button, Dimensions, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const { height, width, } = Dimensions.get('window');
const vw = width / 100;
const vh = height / 100;

const styles = StyleSheet.create({
    button: {
        minHeight: 50,
        minWidth: 275,
        maxWidth: 300,
        backgroundColor: Platform.select({ ios: '#688a65', android: 'transparent', default: 'transparent' }),
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
        minHeight: 70,
        marginBottom: 30,
        backgroundColor: '',
        // paddingLeft: 16,
        // paddingRight: 16,
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
    safearea: {
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


/**
 * Need to figure out how to tie the database to this file
 * I think setting isComplete to false may cause an error, not sure where though
 * Merch function may need a parameter
 */
export default class Merchandise {
    private merchName: string;
    private cost: number;
    private description: string;
    private ingredients: string;
    private allergens: string;
    private sale: boolean; // is it on sale for 50% off or something
    private seasonal: boolean; // is it a seasonal items
    private image: string; // href or src
    private customer: string;
    private location: string;
    private isComplete: boolean;
    private dateOrdered: string;

    public constructor(name: string, amt: any, desc: any, ingred: any, aller: any, sale: any, seas: any, img: any) {
        this.merchName = name;
        this.cost = amt;
        this.description = desc;
        this.ingredients = ingred;
        this.allergens = aller;
        this.sale = sale;
        this.seasonal = seas;
        this.image = img;
        this.customer = ''; //essentially null
        this.location = ''; //essentially null
        this.isComplete = false; //essentially null 
        this.dateOrdered = ''; //essentially null
    }

    getInfo() {
        return (this.allergens + this.cost + this.description + this.image + this.ingredients + this.merchName + this.sale + this.seasonal);
    }

    complete(customer: string) {
        // sends a notif to customer
        this.isComplete = true;
        alert(customer + " order is complete");
    }

    cancel(customer: string) {
        // sends a notif to customer
        this.isComplete = false;
        alert(customer + " order is canceled");
    }

    Merch() { // should be used for the ordermanagement screen and it ma
        return (
            <View
                id='drink'
                style={{
                    display: 'flex',
                    flex: 1,
                    minWidth: 350,
                    minHeight: 150,
                    maxWidth: 400,
                    maxHeight: 240,
                    marginBottom: 30,
                    flexDirection: 'column',
                    backgroundColor: 'pink',
                    borderRadius: 15,
                    borderColor: '#614938',
                    borderWidth: 2,
                    justifyContent: 'flex-end'
                }}>
                <View id='top' style={{ display: 'flex', flex: 1, flexDirection: 'row', }}>
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
                            }}>{this.dateOrdered}</Text>
                            <Image
                                src={this.image}
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
                            marginTop: 30,
                            marginRight: 25,
                        }}>
                            <View>
                                <Text style={{ textAlign: 'right' }}>
                                    Name: {this.customer}
                                </Text>
                            </View>
                            <View>
                                <Text style={{ textAlign: 'right' }}>Location: {this.location}</Text>
                            </View>
                            <View>
                                <Text style={{ textAlign: 'right' }}>Order: {this.merchName}</Text>
                            </View>
                        </View>

                    </View>
                </View>
                <View
                    id='bottom'
                    style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                    <View style={styles.cancelBtn}>
                        <Button
                            title='cancel'
                            color={Platform.select({
                                ios: '#F2F1EB',
                                android: 'red',
                                default: 'red'
                            })}
                            onPress={() => {
                                this.cancel(this.customer);
                            }}
                        />
                    </View>
                    <View style={styles.completeBtn}>
                        <Button
                            title='complete'
                            color={Platform.select({
                                ios: '#F2F1EB',
                                android: '#688a65',
                                default: '#688a65'
                            })}
                            onPress={() => {
                                this.complete(this.customer);
                            }}
                        />
                    </View>
                </View>
            </View>
        );
    }
}