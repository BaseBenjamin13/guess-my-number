import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {

    const [enteredNumber, setEnteredNumber] = useState('');

    function confirmInputHandler() {
        console.log('yoyo')
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
        backgroundColor: '#3b021f',
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
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        borderLeftColor: '#ddb52f',
        borderLeftWidth: 1,
        borderRightColor: '#ddb52f',
        borderRightWidth: 1,
        color: '#ddb52f',
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

