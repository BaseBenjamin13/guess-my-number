
import { View, TextInput, StyleSheet } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} 
            keyboardType='number-pad'
            returnKeyType='done'
            keyboardAppearance='dark'
            />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 25,
        padding: 16,
        backgroundColor: '#4e0329',
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
    }
})

