import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, ScrollView, Dimensions } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [text, setText] = useState('valor default')
  const [submit, setSubmit] = useState('')

  return (    
    <View style={styles.container}>

      <ScrollView style={styles.ScrollView}>  
      
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      
      <TextInput style={styles.input} placeholder='Soy una entrada' onChangeText={(t)=>setText(t)} value={text}/>

      <Button title='Presioname' onPress={()=>{setSubmit(text); alert('Texto enviado')}}/>

      </ScrollView>
      
      <TouchableOpacity style={styles.botonOpaco}>
        <Text>Presiona aquí</Text>
      </TouchableOpacity>

      <TouchableHighlight style={styles.botonResaltado} onPress={()=>alert('Tocaste el botón')}>
        <Text>Botón resaltado</Text>
      </TouchableHighlight>

      <TouchableWithoutFeedback onPress={()=>alert('Tocaste el botón')}>
        <View style={styles.botonResaltado}>
          <Text>Botón sin feedback</Text>
        </View>
      </TouchableWithoutFeedback>
      

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
  botonOpaco: {
    backgroundColor: 'yellow',
    padding: 10,
    margin: 10,    
  },
  botonResaltado: {
    backgroundColor: 'gold',
    padding: 10,
    margin: 10,    
  },
  ScrollView: {
    // Es más fácil usar Dimensions para obtener el ancho de la pantalla de cualquier dispositivo que usar un porcentaje
    width: Dimensions.get('window').width, // Ancho de la pantalla
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
  },
  */
});


/* Ejemplos básicos de uso de componentes
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
}
*/

/* Ejemplo de TouchableHighlight
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const App = () => {
  const handlePress = () => {
    alert('¡Botón presionado!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Presioname</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#841584',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;
*/