import { Dimensions, StyleSheet } from 'react-native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default StyleSheet.create({
    mainView: { width: width, height: height, alignContent: "center", alignItems: "center", marginVertical: 40 },
    textView: {
        fontFamily: 'Cookie',
        color: '#17c3b2',
        fontSize: 42,
        alignItems: 'center',
        justifyContent: 'center', flex: 1,
    }
})