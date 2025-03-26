import React from "react";
import {Image, ScrollView, Text, View} from "react-native";
//import {images} from "@/images";
import Link from "expo-router";
import DrinkCard from '../components/DrinkCard';
import { globalStyles } from '../../assets/styles/globals'

export default function Cart() {
    return (
        <View style={globalStyles.header}>
            <ScrollView className="flex-1 px-5" >
                <Text style={globalStyles.headerText}>Checkout?</Text>
            </ScrollView>
        </View>
    )
}