
import { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

import Title from '../components/ui/Title';
import Guess from '../components/game/Guess';
import PrimaryButton from '../components/ui/PrimaryButton';

function generateRandomNumBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if(rndNum === exclude) {
        return generateRandomNumBetween(min, max, exclude);
    }else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber }) {

    const initGuess = generateRandomNumBetween(minBoundary, maxBoundary, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initGuess);

    function nextGuessHandler(direction) {
        if(
            (direction === 'lower' && currentGuess < userNumber) || 
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie", 'you know',[{ text: 'Sorry!', style: 'cancel' },]);
            return;
        }
        if(direction === 'lower') {
            maxBoundary = currentGuess;
        }else if(direction === 'greater') {
            minBoundary = currentGuess + 1;
        }else return
        const newRndNum = generateRandomNumBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNum);
    }

  return (
    <View style={styles.screen}>
        
        <Title title={"Opponent's Guess"} />
        <Guess currentGuess={currentGuess}></Guess>
        <View>
            <Text>Higher or Lower?</Text>
            <View>
                <PrimaryButton onClick={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                <PrimaryButton onClick={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
            </View>
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
