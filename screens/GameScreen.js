
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Title from '../components/ui/Title';
import Guess from '../components/game/Guess';

function generateRandomNumBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if(rndNum === exclude) {
        return generateRandomNumBetween(min, max, exclude);
    }else {
        return rndNum;
    }
}

function GameScreen({ userNumber }) {

    const initGuess = generateRandomNumBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initGuess);

  return (
    <View style={styles.screen}>
        
        <Title title={"Opponent's Guess"} />
        <Guess currentGuess={currentGuess}></Guess>
        <View>
            <Text>Higher or Lower?</Text>

        </View>
        <View></View>
    </View>
  )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
});
