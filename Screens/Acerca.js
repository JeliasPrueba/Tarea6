import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function AboutView() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/Foto.jpeg')} style={styles.image} />
      <Text style={styles.name}>nombre: Jelias Octavio Garcia Sierra</Text>
      <Text style={styles.contact}>Contacto: garciassierra@hotmail.com</Text>
      <Text style={styles.contact}>Telefono: 829-616-4344</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  contact: {
    fontSize: 18,
    marginTop: 8,
  },
});
