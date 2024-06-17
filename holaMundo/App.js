import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';

/*
const Texto = ({ contenido, actualizarContenido }) => {
  return (<Text>{contenido}</Text>);
};

export default function App() {
  const [contenido, setContenido] = useState('Hola mundo');
  const actualizarContenido = () => {
    setContenido('State actualizo este texto');
  }

  return (
    <View style={styles.container}>
      <Texto contenido={contenido}/>
      
      <Button title='Presioname' color="#000000" onPress={actualizarContenido} />
      
      <StatusBar style="auto" />
    </View>
  );
}
*/

/*
const Texto = ({estilo}) => {
  const [contenido, setContenido] = useState('Hola mundo');
  const actualizarContenido = () => {
    setContenido('State actualizo este texto');
  }
  return (<Text style={[styles.text,estilo]} onPress={actualizarContenido}>{contenido}</Text>)
}*/


export default function App() {

  const [text, setText] = useState('valor default')

  return (    
    <View style={styles.container}>

      <Text> Componente TextInput: {text}</Text>
      
      <TextInput style={styles.input} placeholder='Soy una entrada' onChangeText={(t)=>setText(t)} value={text}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#dfd5ed',
    height: 40,
    width: 150,
    margin: 10,
    borderWidth: 2,
    borderColor: 'gold',
    padding: 10,
  },
  /*
  text:{
    color : 'yellow',
    fontSize : 25,
    height: 150,
    //width: 150,
  },
  red:{
    backgroundColor: 'red',
    //flex: 1,
  },
  blue:{
    backgroundColor: 'blue',
    //flex: 2,
  },
  green:{
    backgroundColor: 'green',
    //flex: 3,
  },*/
});
