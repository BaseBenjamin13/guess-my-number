
import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function Guess({ currentGuess }) {
  return (
    <View style={styles.container}>
        <Text style={styles.guess}>{currentGuess}</Text>
    </View>
  )
}

export default Guess;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    guess: {
        color: Colors.accent500,
        fontSize: 36,
        fontWeight: 'bold',
    },
})
