import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SectionList, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import Prueba from './screens/prueba';

export default function App() {


  
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(data=>{setUser(data); setLoading(false);})
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Cargando</Text>
      </View>
    );
  }
  

  /*
  return ( 
    
    <View style={styles.container}>      
      
      <Text>USUARIOS CARGADOS</Text>

      <FlatList data={user}    
      renderItem={({item}) => <Text style={styles.item}>{item.username} {item.address.city}</Text>}      
      />      
                 
      <StatusBar style="auto" />
      
      <Prueba />
    </View>

    
    
  );
  */
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
    paddingLeft: 70,
    fontSize: 20,
    height: 34,
    borderBottomColor: 'silver',
    borderBottomWidth: 3,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
