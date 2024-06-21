import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Guardar = () => {

    /*alert(`Formulario Enviado\n\nNombre: ${nombre}\nEmail: ${email}\nPassword: ${password}`);*/

    
    Alert.alert(
      `Formulario Enviado`, `\nNombre: ${nombre}\nEmail: ${email}\nPassword: ${password}`
    );
    
  };

  return (

    <ImageBackground source={require('./assets/fondo.png')} style={styles.container}>
      <View style={styles.form}>

        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={Guardar}>
          <Text style={styles.buttonText}>GUARDAR</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E7E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    borderRadius: 10,
    backgroundColor: '#85C1E9',
    width: '80%',
    padding: 20,
  },
  label: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gold',
    borderWidth: 4,
    borderRadius: 5,
    backgroundColor: '#FFF',
    marginBottom: 20,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});