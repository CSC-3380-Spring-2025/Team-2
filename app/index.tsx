import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import { Link, Redirect } from 'expo-router';
import Login from "./login";
import Profile from './createprofile';
import Home from './(tabs)/home';


export default function Index() {
  return <Redirect href="/login"/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F1EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#33261D'
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#33261D',
  },
});