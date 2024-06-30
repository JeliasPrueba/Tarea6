import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default function GenderPredictor() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');

  const predictGender = async () => {
    try {
      const response = await axios.get(`https://api.genderize.io/?name=${name}`);
      setGender(response.data.gender);
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
      <Button title="Predecir el genero" onPress={predictGender} />
      {gender ? (
        <View style={[styles.result, { backgroundColor: gender === 'male' ? 'blue' : 'pink' }]}>
          <Text style={styles.resultText}>Genero: {gender}</Text>
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
  result: {
    marginTop: 16,
    padding: 16,
    borderRadius: 8,
  },
  resultText: {
    color: 'white',
    fontSize: 18,
  },
});
