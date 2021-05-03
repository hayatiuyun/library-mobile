import { StyleSheet } from "react-native";

export default StyleSheet.create({
    appbarHeader: {
        backgroundColor: '#17c3b2',
        justifyContent: "space-between", marginHorizontal: 20,
    },
    appbarButton: {
        backgroundColor: '#17c3b2'
    },
    appbarContent: {
        backgroundColor: '#17c3b2',
        alignItems: "center" 
    },
    appbarTitleStyle: {
        color: "white", fontWeight: "700", fontFamily: 'OpenSansRegular', fontSize: 17
    },
    errorView: {
        backgroundColor: '#f65c5c',
        padding: 10,
        borderRadius: 5
    },
    successView: {
        backgroundColor: '#72b3f3',
        padding: 10
    },
    errorText: {
        color: 'white',
        fontSize: 14,
    }
})