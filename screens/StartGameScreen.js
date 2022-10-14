import { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constants/colors';

function StartGameScreen({ pickedNumberHandler }) {

    const [enteredNumber, setEnteredNumber] = useState('');

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid number',
                'Please enter a valid number between 1-99',
                [{ text: 'Okay', style: 'destructive', onPress: setEnteredNumber('')}]
                );
            return;
        }

        pickedNumberHandler(enteredNumber);

    } 

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} 
            keyboardType='number-pad'
            returnKeyType='done'
            keyboardAppearance='dark'
            value={enteredNumber}
            onChangeText={(input) => setEnteredNumber(input)}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onClick={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 25,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 8,// for android
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 7},
        shadowRadius: 6,
        shadowOpacity: 0.5,
    },
    numberInput: {
        alignSelf: 'center',
        hieght: 50,
        width: 75,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        borderLeftColor: Colors.accent500,
        borderLeftWidth: 1,
        borderRightColor: Colors.accent500,
        borderRightWidth: 1,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },

})

