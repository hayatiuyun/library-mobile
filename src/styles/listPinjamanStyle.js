import { StyleSheet, Dimensions } from 'react-native';
const height = Dimensions.get('window').height

export default StyleSheet.create({
    tabBarUnderlineStyle: {
        height: 3,
        backgroundColor: '#17c3b2',
        borderRadius: 3,
    },
    tabBarTextStyle: {
        fontSize: 15,
        letterSpacing: 0.35,
        fontFamily: "OpenSansRegular"
    },
    mainView: {
        flex: 1 
    },
    viewScrollTabView: {
        flex: 1, marginHorizontal: 20
    },
    viewDatanull: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginVertical: height/2.5
    },
    textNull: {
        color: "#CCCCCC"
    },
    mainViewItem: {
        borderBottomWidth: 0.4,
        borderBottomColor: "#bbbbbb",
        paddingVertical: 10
    },
    viewDate: {
        flexDirection: "row"
    },
    textDate: { fontSize: 15, color: "#bbbbbb" },
    viewLabelTerlambar: {
        marginLeft: 10,
        borderColor: "#f65c5c",
        borderWidth: 1.5,
        paddingHorizontal: 9,
        borderRadius: 5,
        paddingVertical: 2
    },
    textTerlambat: {
        fontFamily: "OpenSansSemiBold",
        fontSize: 14,
        color: "#f65c5c"
    },
    textNameofBook: {
        fontFamily: "OpenSansSemiBold",
        fontSize: 15
    }
})