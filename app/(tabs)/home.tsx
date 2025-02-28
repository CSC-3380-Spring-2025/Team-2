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
    divider1: {
        display: "flex",
        backgroundColor: "#97ac82",
        minHeight: 600,
        // border: "",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        justifyContent: "flex-end",
    },
    divider2: {
        display: "flex",
        backgroundColor: "#688a65",
        height: 350,
        // border: "",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        justifyContent: "flex-end",
    },
    divider3: {
        display: "flex",
        backgroundColor: "#2c341b",
        height: 210,
        // border: "",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        justifyContent: "center",
    },
    header: {
        alignContent: 'center',
        // backgroundColor: 'lightblue',
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        maxHeight: 50,
        marginBottom: 30,
        marginTop: 50,

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
        backgroundColor: "white",
        height: 100 * vh,
    },
});

export default function Home() {
    let [dets, setDets] = React.useState(false);

    function changeDets() { // functional
        setDets(dets => !dets);
    }

    return (
        <ScrollView style={styles.scrollview}>
            <View style={styles.view}>
                <View style={styles.header}>
                    <Text>PFP</Text>
                    <Text style={styles.title}>bubble</Text>
                    <Image
                        source={require('C:/Users/witch/Projects/Team-2/assets/images/splash-icon.png')}
                        style={{
                            width: 5 * vw,
                            height: 5 * vw,

                        }}
                        resizeMode="contain"
                    />
                </View>
                <View
                    style={{
                        display: "flex",
                        justifyContent: "flex-end"
                    }}>
                    <View style={styles.divider1}>
                        <Button
                            title="details"
                            onPress={changeDets}></Button>
                        <View style={{ display: dets ? 'flex' : 'none' }}>
                            <Text style={{ color: 'white' }}>
                                <ul>
                                    <li>20 points: topping</li>
                                    <li>40 points: drink</li>
                                    <li>60 points: bakery item</li>
                                    <li>80 points: food item</li>
                                    <li>100 points: merchandise</li>
                                </ul>
                            </Text>
                        </View>
                        <View style={styles.divider2}>
                            <Button title="favorites"></Button>
                            <View style={styles.divider3}>
                                <Button title="recents"></Button>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}