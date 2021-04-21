import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './LoginScreen';
import ContactsScreen from './ContactsScreen';
import Contact from './components/Contact';
import SignupScreen from './SignupScreen';
import Pets from './components/Pets';
import PetScreen from './PetScreen';

export default function App() {
  return (
    <View style={styles.container}>
  
   <PetScreen/>
     
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   //marginTop:50
   flex: 1
  }
});
