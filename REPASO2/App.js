import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Dimensions, TextInput, TouchableHighlight, FlatList, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {    

  const pelis = [
    'El Padrino',
    'Alien',
    'La Lista de Schindler',
    'Pulp Fiction',
    'El Señor de los Anillos',
    'Titanic',
    'El Rey León',
    'El Resplandor',
    'Blade Runner',
    'El Gran Dictador',
    'El Exorcista',
    'El Pianista',
    'La Naranja Mecánica',
    'La Vida es Bella',
    'El Caballero Oscuro',
    'El Silencio de los Corderos',
    'El Club de la Pelea',
    'El Laberinto del Fauno',
    'El Viaje de Chihiro',
    'El Castillo Ambulante',
    'La Toalla del Mojado',
  ];

  const [buscarTitulo, setBuscarTitulo] = useState('');
  const [filtroPelis, setFiltroPelis] = useState([]);

  const buscarPeli = () => {
    if (!buscarTitulo) {
      setFiltroPelis(pelis);
    } else {
      const resultados = pelis.filter(peli => peli.toLowerCase().includes(buscarTitulo.toLowerCase()));
      if (resultados.length > 0) {
        setFiltroPelis(resultados);
      } else {
        Alert.alert('Sin resultados',':c No se encontraron coincidencias');
        setFiltroPelis([]);
      }
    }
  };  

  return (
    <ImageBackground source={require('./assets/fondo.jpg')} style={styles.fondo}>
      
      <Text style={styles.encabezado}>
        Buscador de Películas
      </Text>

      <TextInput style={styles.buscador}
        placeholder="Título o parte..."
        value={buscarTitulo}
        onChangeText={setBuscarTitulo}
      />

      <TouchableHighlight style={styles.boton} onPress={buscarPeli}>
        <Text style={styles.textoBoton}>BUSCAR</Text>      
      </TouchableHighlight>

      <FlatList style={styles.FlatList}
        data={filtroPelis}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />

      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
 fondo: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  encabezado: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 40,
  },
  buscador: {
    backgroundColor: 'white',
    fontSize: 20,
    padding: 10,
    margin: 20,
    borderRadius: 10,
    borderWidth: 2,    
  },
  boton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 10,
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  textoBoton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  FlatList: {
    margin: 20,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderBottomColor: 'silver',
    borderBottomWidth: 2,
  },

});