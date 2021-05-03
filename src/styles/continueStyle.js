import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width; 

export default StyleSheet.create({
    appbarStyle: {
        backgroundColor: "#FFFFFF",
        elevation: 0,
        paddingLeft: 20 
    },
    viewForm: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginHorizontal: 30
    },
    imageForm: {
        width: width / 5, height: width / 5
    },
    nameText: {
        fontFamily: "OpenSansSemiBold",
        textAlign: "center",
    },
    subtitleText: {
        textAlign: "center",
        fontSize: 14,
        color: "#BBBBBB"
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
        width:'100%',
        flex: 1,
        borderWidth: 0,
        fontFamily: Platform.OS === 'ios' ? 'OpenSansRegular' : 'OpenSansRegular',
        paddingVertical: 0,
        paddingHorizontal: 0,
        backgroundColor: '#FFFFFF',
        borderRadius: 5
    },
    buttonForgetPass: {
        alignSelf: "flex-end"
    },
    textForgetPass: {
        fontSize: 14,
        color: "#BBBBBB"
    },
    viewButton: {
        position: "absolute",
        bottom: 0,
        alignItems: "center",
        alignContent: "center",
        width: width 
    },
    button: {
        alignItems: "center",
        backgroundColor: "#ff9f1c",
        width: width - 40,
        paddingVertical: 10,
        borderRadius: 5 
    },
    textButton: {
        color: "#ffffff",
        fontFamily: "OpenSansSemiBold"
    }
})