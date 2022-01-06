import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
const width = Dimensions.get('window').width; //full width

export default StyleSheet.create({
    text: {
        fontFamily: 'Cookie',
        color: '#17c3b2',
        fontSize: 42,
    },
    input: {
        marginVertical: 10,
    },
    link: {
        color: "#BBBBBB",
        fontWeight: "700",
        fontSize: 14
    },
    lupaSandi: {
        alignItems: "flex-end",
    },
    button: {
        paddingVertical: 9,
        marginTop: 30,
        borderRadius: 5,
        backgroundColor: '#17c3b2'

    },
    titleButton: {
        fontSize: 16,
        fontWeight: "700",
    },
    mainView: {
        alignItems: 'center', justifyContent: 'center', flex: 1,
    },
    formView: {
        width: width, paddingHorizontal: 30
    }, 
    viewPass: {
        flexDirection: 'row',
        alignContent: "center",
        alignItems: "center",
        borderColor: '#CCCCCC',
        borderWidth: 1,
        fontFamily: Platform.OS === 'ios' ? 'OpenSansRegular' : 'OpenSansRegular',
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 5
    },
    pass: {
        flex: 1,
        borderWidth: 0,
        fontFamily: Platform.OS === 'ios' ? 'OpenSansRegular' : 'OpenSansRegular',
        paddingVertical: 0,
        paddingHorizontal: 0,
        backgroundColor: '#FFFFFF',
        borderRadius: 5
    },

})