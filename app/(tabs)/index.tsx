import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F1EB',
    alignItems:'center',
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
})
