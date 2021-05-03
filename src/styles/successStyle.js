import { StyleSheet, Dimensions } from 'react-native';
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


export default StyleSheet.create({
    mainView: { height: height, backgroundColor: "#17c3b2" },
    viewCore: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: 'center',
        flex: 1,
    },
    img: { width: width / 2.5, height: width / 2.5 },
    textHeader: {
        color: "#FFFFFF",
        fontSize: 26,
        fontFamily: "OpenSansExtraBold",
        letterSpacing: 0.15
    },
    subTitle: {
        color: "#FFFFFF",
        fontSize: 14
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
