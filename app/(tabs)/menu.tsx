import { Text, View, StyleSheet } from 'react-native';

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Menu screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F1EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#33261D',
  },
});
