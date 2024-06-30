import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';


export default function AgePredictor() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');
  const [imagePath, setImagePath] = useState('');

  const predictAge = async () => {
    try {
      const response = await axios.get(`https://api.agify.io/?name=${name}`);
      const age = response.data.age;
      setAge(age);
      if (age < 18) {
        setMessage('Eres joven');
        setImagePath(require('../assets/images/joven.png')); // Add your image path
      } else if (age < 60) {
        setMessage('Eres adulto');
        setImagePath(require('../assets/images/adulto.jpg')); // Add your image path
      } else {
        setMessage('Eres un anciano');
        setImagePath(require('../assets/images/anciano.jpg')); // Add your image path
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={name}
        onChangeText={setName}
      />
      <Button title="Predecir tu edad" onPress={predictAge} />
      {age ? (
        <View>
          <Text style={styles.resultText}>Edad: {age}</Text>
          <Text style={styles.resultText}>{message}</Text>
          <Image source={imagePath} style={styles.image} />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
  },
  resultText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 8,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});
