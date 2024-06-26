import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SectionList } from 'react-native';
// import React, { useState } from 'react';

export default function App() {

  const data = [{key: '1', name: 'Juan'}, 
    {key: '2', name: 'Pedro'}, 
    {key: '3', name: 'Maria'},
    {key: '4', name: 'Ana'},
    {key: '5', name: 'Jose'},
    {key: '6', name: 'Luis'},
    {key: '7', name: 'Carlos'},
    {key: '8', name: 'Javier'},
    {key: '9', name: 'Ricardo'},
    {key: '10', name: 'Jorge'},
    {key: '11', name: 'Miguel'},
  ];

  return ( 
    
    

    <View style={styles.container}>

      <SectionList

        sections={[
          {title: 'Grupo A', 
            data: [
              {key: '1', name: 'Juan'}, 
              {key: '2', name: 'Pedro'}, 
              {key: '3', name: 'Maria'},
              {key: '4', name: 'Ana'},
              {key: '5', name: 'Jose'},
              {key: '6', name: 'Luis'},
              {key: '7', name: 'Carlos'},
              {key: '8', name: 'Javier'},
              {key: '9', name: 'Ricardo'},
              {key: '10', name: 'Jorge'},
              {key: '11', name: 'Miguel'},
            ]
          },
          {title: 'Grupo B', 
            data: [
              {key: '12', name: 'Juan'}, 
              {key: '13', name: 'Pedro'}, 
              {key: '14', name: 'Maria'},
              {key: '15', name: 'Ana'},
              {key: '16', name: 'Jose'},
              {key: '17', name: 'Luis'},
              {key: '18', name: 'Carlos'},
              {key: '19', name: 'Javier'},
              {key: '20', name: 'Ricardo'},
              {key: '21', name: 'Jorge'},
              {key: '22', name: 'Miguel'},
            ]
          },
          {title: 'Grupo C',
            data: [
              {key: '23', name: 'Juan'}, 
              {key: '24', name: 'Pedro'}, 
              {key: '25', name: 'Maria'},
              {key: '26', name: 'Ana'},
              {key: '27', name: 'Jose'},
              {key: '28', name: 'Luis'},
              {key: '29', name: 'Carlos'},
              {key: '30', name: 'Javier'},
              {key: '31', name: 'Ricardo'},
              {key: '32', name: 'Jorge'},
              {key: '33', name: 'Miguel'},
            ]
          }
        ]}
        renderItem={({item})=> <Text style={styles.item}>{item.name}</Text>}
        renderSectionHeader={({section}) => <Text style={styles.section}>{section.title}</Text>}

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
    fontSize: 20,
    height: 34,
    borderBottomColor: 'silver',
    borderBottomWidth: 1,
  },
  section: {
    color: 'blue',
    fontSize:30,
    fontWeight:'bold',
    backgroundColor: 'gold',
    paddingTop: 4,
    paddingBottom: 4,
  }
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