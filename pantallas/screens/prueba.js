import {Entypo, FontAwesome5} from '@expo/vector-icons';
import React, {useState} from 'react';
import { View, Text, Modal, TouchableOpacity, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

export default function prueba() {
  const [modal, setModal] = useState(false);
  return (
    <View
      style={{
        flex: 1,        
        justifyContent: 'center',
        alignItems: 'center',              
      }}
    >
      
      <Modal visible={modal} animationType='slide'>
        <View 
        style={{
          flex: 1, 
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',          
        }}>

          <View
            style={{
              width: width * 0.9,
              height: height * 0.4,
              backgroundColor: '#fff',
              borderRadius: width * 0.1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>Este es un modal</Text>
          
          <TouchableOpacity onPress={() => setModal(false)}
            style={{
              position: 'absolute',
              backgroundColor: '#0088f0',
              borderRadius: width * 0.1,
              top: 15,
              right: 15,
              width: width * 0.15,
              padding: width * 0.02,
              alignItems: 'center',
            }}
          >
            <FontAwesome5 name="times" size={width * 0.1} color="#fff"/>            
          </TouchableOpacity>

          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => setModal(true)}
        style={{
          width: width * 0.8,
          height: height * 0.07,
          backgroundColor: '#0088f0',
          borderRadius: width * 0.1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text 
        style={{
          color: '#fff', 
          fontWeight: "700", 
          fontSize: width * 0.04
          }}
          >
            Abrir modal
          </Text>
      </TouchableOpacity>      
    </View>
  );
}