import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function homeScreen({navigation}){
  return(
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Ir a detalles"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Esto va a ser el examen</Text>
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
