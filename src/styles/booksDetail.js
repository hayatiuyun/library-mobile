import { StyleSheet, Dimensions } from 'react-native';
const initialLayout = { width: Dimensions.get('window').width };

export default StyleSheet.create({

    tabBarTextStyle: {
        fontSize: 15,
        letterSpacing: 0.35,
        fontFamily: "OpenSansRegular"
    },
    underlineStyle: {
        height: 3,
        backgroundColor: '#17c3b2',
        borderRadius: 3,
    },
    textDetailStyle: {
        fontSize: 14,
        letterSpacing: 0.35,
        textAlign: "justify",
        textAlignVertical: "center"
    },
    textPriceStyle: {
        fontSize: 16,
        letterSpacing: 0.35,
        color: "#17c3b2",
        fontWeight: "700"
    },
    textTitleStyle: {
        fontSize: 16,
        letterSpacing: 0.35,
        color: "#555555",
        fontWeight: "700"
    },
    textAuthorStyle: {
        fontSize: 15,
        letterSpacing: 0.35,
        color: "#999999",
    },

    imageStyle: {
        borderRadius: 10,
        height: 180,
        width: 120
    },
    viewImage: {
        alignContent: "center",
        alignItems: "center"
    },
    captTentangStyle: {
        color: "#999999",
        fontSize: 14,
        paddingVertical: 5,
    },
    valueTentangStyle: {
        color: "#333333",
        fontSize: 14,
        paddingVertical: 5,
    },
    mainViewTentangBuku: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    viewTentangBuku: {
        justifyContent: "space-between"
    },
    mainbottomView: {
        position: "absolute",
        bottom: 0,
        flex: 1,
        width: initialLayout.width,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "white",
        borderTopColor: "#cccccc",
        borderTopWidth: 1
    },
    stockColor: {
        color: "#999999" 
    },
    viewStock: {
        flex: 1,
        flexDirection: "row"
    },
    stockValue: {
        color: "#999999",
        fontWeight: "bold"
    },
    statusbookView: {
        paddingHorizontal: 8,
        paddingVertical: 3,
        backgroundColor: "#b9ede8",
        borderRadius: 5
    },
    statusbookText: {
        color: "#29a99c",
        fontSize: 13 
    },
    buttonPinjam: {
        backgroundColor: "#ff9f1c",
        marginVertical: 10,
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderRadius: 10 
    },
    textPinjam: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
        letterSpacing: 0.35 
    },
    tabContainerstyle: {
        justifyContent: 'flex-start',
        marginHorizontal: 17,
        alignItems: "flex-start",
        alignContent: "flex-start",
        paddingHorizontal:0
    }
})