import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from  './Screens/HomeScreen';
import PredecirGenero from './Screens/PredecirGenero';
import DetectorEdad from './Screens/DetectorEdad';
import EncontrarUni from './Screens/EncontrarUniversidad';
import Clima from './Screens/Clima';
import Noticias from './Screens/Noticias';
import Acerca from './Screens/Acerca';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen name="Principal" component={HomeScreen} />
        <Stack.Screen name="Genero" component={PredecirGenero} />
        <Stack.Screen name="Edad" component={DetectorEdad} />
        <Stack.Screen name="Universidades" component={EncontrarUni} />
        <Stack.Screen name="Clima" component={Clima} />
        <Stack.Screen name="Noticias" component={Noticias} />
        <Stack.Screen name="Acerca" component={Acerca} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
