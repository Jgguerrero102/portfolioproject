import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View } from 'react-native';
import LoginApp from './LoginApp'

import { StyleSheet, Text, Button, Image, View, TextInput } from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
        <LoginApp />
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    //flex: 1, 
    flexDirection: "row",
    height: 100,
    padding: 20,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00ffff',
  },
});