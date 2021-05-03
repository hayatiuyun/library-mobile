import { StyleSheet, Dimensions } from 'react-native';

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default StyleSheet.create({
    title: {
        fontSize: 16,
        fontFamily: "OpenSansSemiBold",
        marginBottom: 7,
    },
    subtitle: {
        fontSize: 15,
        color: '#BBBBBB'
    },
    zeroResult: {
        backgroundColor: '#F5F5F5',
        padding: 10,
        flex: 1,
        borderRadius: 10,
        margin: 10,
    },
    showMore: {
        color: "#ff9f1c",
        fontSize: 15,
        fontFamily: "OpenSansSemiBold"
    },
    mainView: {
        marginVertical: 10,
        justifyContent: "center",
        flexDirection: "column",
        flex: 1
    },
    headerRow: {
        justifyContent: 'space-between',
        marginVertical: 10,
        flexDirection: "row"
    },
    showMoreTouch: {
        flexDirection: "row"
    },
    resultDetailView: {
        width: windowWidth / 3,
        height: windowHeight / 2,
        marginHorizontal: 10,
        marginVertical: 10,
    },

    imageDetail: {
        flex: 0,
        width: '90%',
        height: '45%',
        borderRadius: 5
    },

    textNameCaptDetail: {
        color: '#5D5D5D',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: "OpenSansSemiBold"
    },
    textAuthorDetail: {
        color: '#BBBBBB',
        textAlign: 'center',
        fontSize: 15,
    },
    textCaptDetail: {

        color: '#17c3b2',
        marginTop: 10,
        fontWeight: "700",
        textAlign: 'center',
        fontSize: 15,


    },
    captDetail: {
        flex: 1,
        height: '100%',
        paddingTop: 10,
        padding: 10,
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center'
    },
})