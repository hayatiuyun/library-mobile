import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width

export default StyleSheet.create({
    mainViewPhotoProfile: {
        alignItems: "center"
    },
    imgPhotoProfile: {
        width: width / 5,
        height: width / 5
    },
    textPhotoProfile: {
        color: "#ff9f1c",
        fontSize: 14,
        fontFamily: "OpenSansSemiBold" 
    },
    titleSection: {
        fontSize: 15,
        fontFamily: "OpenSansSemiBold" 
    },
    mainViewPrivateInformation: {
        flexDirection: "row",
        alignItems: "center" 
    },
    mainViewLabelInformation: {
        justifyContent: "space-between",
    },
    label: {
        paddingVertical: 13,
        color: "#BBBBBB",
        fontFamily: "OpenSansSemiBold",
        fontSize: 15
    },
    textInput: {
        borderBottomColor: '#DDDDDD',
        borderBottomWidth: 1,
        borderWidth: 0,
        paddingHorizontal: 3,
        paddingVertical: 0,
        marginVertical: 9,
    },
    labelPass: {
        color: "#BBBBBB",
        fontFamily: "OpenSansSemiBold",
        fontSize: 15
    },
    inputPass: {
        flex: 1,
        borderWidth: 0,
        paddingHorizontal: 0,
        paddingVertical: 0,
        marginVertical: 0,
    },
    viewPass: {
        flexDirection: 'row',
        alignContent: "center",
        alignItems: "center",
        borderBottomColor: '#DDDDDD',
        borderBottomWidth: 1,
        borderWidth: 0,
        paddingHorizontal: 3,
        paddingVertical: 0,
        marginVertical: 5,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#ff9f1c",
        width: width - 40,
        paddingVertical: 10,
        borderRadius: 5,
        bottom: 0,
        position: "relative"
    },
    textButton: { color: "#FFFFFF", fontFamily: "OpenSansSemiBold" }
})
