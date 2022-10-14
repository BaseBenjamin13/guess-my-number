
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function Title({ title }) {
  return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
        </View>
  )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.accent500,
        textAlign: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 7},
        shadowRadius: 7,
        shadowOpacity: 0.8,
    },
    titleContainer: {
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 12,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 7},
        shadowRadius: 7,
        shadowOpacity: 1,
    },
});