import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './LoginScreen';
import ContactsScreen from './ContactsScreen';
import contact from './components/Contact'

export default function App() {
  return (
    <View style={styles.container}>
      {/*<LoginScreen/>*/}
      <ContactsScreen/>
      {/*<Contact/>*/}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
