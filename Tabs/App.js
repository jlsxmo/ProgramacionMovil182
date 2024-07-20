import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen({navigation}) { //Panel de inicio/origen
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Inicio</Text>
      <Button
        title="Ir a Configuración"
        onPress={() => navigation.navigate('Configuración')}
      />
    </View>
  );
}

function SettingsScreen({navigation}) { //Panel de configuración
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Configuración</Text>
      <Button
        title="Ir a Inicio"
        onPress={() => navigation.navigate('Inicio')}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={HomeScreen} options={{tabBarBadge:4}}/>
        <Tab.Screen name="Configuración" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

