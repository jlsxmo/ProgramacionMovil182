import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, View, TouchableOpacity, Dimensions } from 'react-native';
import Prueba from './screens/prueba';
import BottomSheet, { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import React, { useRef, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

export default function App() {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = [width * 0.3, width * 0.5, width * 0.9];

  const hey = () => {
    bottomSheetModalRef?.current?.present();
  }
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <BottomSheetModalProvider>
      <BottomSheetModal>
      </BottomSheetModal>2

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <TouchableOpacity onPress={()=> hey()}>
            <Text>Hola</Text>
          </TouchableOpacity>
      </View>
    </BottomSheetModalProvider>
    </GestureHandlerRootView>
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
