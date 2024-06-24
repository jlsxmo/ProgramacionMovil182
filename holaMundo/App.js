import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
// import React, { useState } from 'react';

export default function App() {

  return (    
    <View style={styles.container}>

      <FlatList data={
        [
          {key: '1', name: 'Juan'},
          {key: '2', name: 'Pedro'},
          {key: '3', name: 'Maria'},
          {key: '4', name: 'Ana'},
          {key: '5', name: 'Jose'},
          {key: '6', name: 'Carlos'},
          {key: '7', name: 'Luis'},
          {key: '8', name: 'Jorge'},
          {key: '9', name: 'Rosa'},
          {key: '10', name: 'Laura'},
          {key: '11', name: 'Luisa'},
          {key: '12', name: 'Marta'},
          {key: '13', name: 'Carmen'},
          {key: '14', name: 'Lucia'},
          {key: '15', name: 'Sofia'},
          {key: '16', name: 'Pablo'},
          {key: '17', name: 'Fernando'},
          {key: '18', name: 'Ricardo'},
          {key: '19', name: 'Javier'},
          {key: '20', name: 'Roberto'},
          {key: '21', name: 'Miguel'},
          {key: '22', name: 'Eduardo'},
          {key: '23', name: 'Ismael'},
          {key: '24', name: 'Alfredo'},
          {key: '25', name: 'Rodrigo'},          
        ]
      }
      renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}      
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 70,
  },
  item: {
    padding: 10,
    fontSize: 30,
    height: 50,
    borderColor: 'silver',
    borderBottomWidth: 4,
  },
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