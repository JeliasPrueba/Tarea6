import React from 'react';
import { View, Button, StyleSheet, ImageBackground } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground 
      source={require('../assets/images/Herramientas.png')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Button title="Predecir Genero" onPress={() => navigation.navigate('Genero')} />
        <Button title="Prededcir Edad" onPress={() => navigation.navigate('Edad')} />
        <Button title="Encotrar Universidades" onPress={() => navigation.navigate('Universidades')} />
        <Button title="Clima en Dominicana" onPress={() => navigation.navigate('Clima')} />
        <Button title="Ultimas noticias" onPress={() => navigation.navigate('Noticias')} />
        <Button title="Acerca de mi" onPress={() => navigation.navigate('Acerca')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Para que el contenido sea legible sobre la imagen de fondo
    width: '100%',
  },
});

