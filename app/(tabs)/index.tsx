import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import Login from "./login";
import Profile from './createprofile';
import Home from './home';


export default function Index() {
  return (
    <Home />
  );
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