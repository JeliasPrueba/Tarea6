import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import foto from "../assets/images/Logo1.png"


const noticiasWordPress = [
    {
        titulo: "Los principales donantes demócratas se preguntan: ¿Qué hacer con Biden?",
        resumen: "Algunos propusieron intervenciones y se preguntaron cómo llegar a Jill Biden. Otros esperaban que el presidente se retirara de la carrera por su propia cuenta. Muchos aceptaron que las probabilidades de que lo hiciera eran bajas.",
        enlace: "https://www.nytimes.com/2024/06/29/us/politics/biden-donors-democrats.html"
    },
    {
        titulo: "Una serie de decisiones de la Corte Suprema golpean duramente las normas ambientales",
        resumen: "Cuatro casos respaldados por activistas conservadores en los últimos años se han combinado para disminuir el poder de la Agencia de Protección Ambiental.",
        enlace: "https://www.nytimes.com/2024/06/29/climate/supreme-court-epa.html"
    },
    {
        titulo: "Motos y caos en el este de Ucrania",
        resumen: "En la última táctica para asaltar trincheras, los rusos están usando motocicletas y vehículos para atravesar espacios abiertos a gran velocidad, a menudo en medio de una lluvia de disparos.",
        enlace: "https://www.nytimes.com/2024/06/29/world/europe/ukraine-russia-war-donbas.html"
    }
];

const NoticiasWordPress = () => {
    return (
        <View style={styles.container}>
          <Image style={styles.imagen} source={foto}></Image>
            {noticiasWordPress.map((noticia, index) => (
                <View key={index} style={styles.noticiaContainer}>
                
                    <Text style={styles.tituloNoticia}>{noticia.titulo}</Text>
                    <Text style={styles.resumenNoticia}>{noticia.resumen}</Text>
                </View>
            ))} 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20
    },
    noticiaContainer: {
        marginBottom: 40,
        alignItems: 'center'
    },
    imagen:{
      width: '100%'
    },
    tituloNoticia: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'red'
        
    },
    resumenNoticia: {
        fontSize: 16,
        textAlign: 'center'
    }
});

export default NoticiasWordPress;

