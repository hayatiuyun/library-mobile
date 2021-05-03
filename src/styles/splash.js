import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
const width = Dimensions.get('window').width; //full width

export default StyleSheet.create({
    text: {
        fontFamily: 'Cookie',
        color: '#17c3b2',
        fontSize: 42,
        alignItems: 'center',
        justifyContent: 'center', flex: 1,
    },
})