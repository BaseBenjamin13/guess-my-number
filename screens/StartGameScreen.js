
import { View, TextInput, StyleSheet } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput />
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
        backgroundColor: '#72063c',
        borderRadius: 8,
        elevation: 8,// for android
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 7},
        shadowRadius: 6,
        shadowOpacity: 0.5,
    }
})

