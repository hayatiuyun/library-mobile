import { StyleSheet, Dimensions } from 'react-native';

const initialLayout = { width: Dimensions.get('window').width };
export default StyleSheet.create({
    buttonShowMore: {
        flexDirection: "row",
        alignItems: "center" 
    },
    textShowMore: {
        color: "#ff9f1c",
        fontWeight: "bold",
        fontSize: 14.5,
        letterSpacing: 0.25,
        marginLeft: 12
    },
    viewTotalBayar: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: 20
    },
    viewColumnTotalBayar: {
        flexDirection: "column"
    },
    mainViewNameOfItem: {
        flex: 1,
        maxWidth: initialLayout.width / 1.5
    },
    viewOfAuthor: {
        flex: 1 
    },
    mainViewJumlahItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: '67.5%' 
    },
    row: {
        flexDirection: "row"
    },
    calenderButton: {
        padding: 8,
        borderWidth: 1,
        backgroundColor: "#f8f8f8", borderColor: "#ededed" 
    },
    textCalendar: {
        color: "#999999",
        fontFamily: "OpenSansSemiBold",
        fontSize: 13
    },
    toDateView: {
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        marginVertical: 8 
    },
    startDate: {
        padding: 8,
        borderWidth: 1,
        backgroundColor: "#f8f8f8", borderColor: "#ededed"  },
    endDate: {
        backgroundColor: "#ffffff",
        padding: 8,
        borderWidth: 1,
        borderColor: "#ededed",
    },
    buttonCounterJumlahItem: {
        borderWidth: 1.5,
        borderColor: "#F5F5F5",
        paddingVertical: 4,
        paddingHorizontal: 5
    },
    textCountJumlahItem: {
        borderTopWidth: 1.5,
        borderBottomWidth: 1.5,
        borderColor: "#F5F5F5",
        paddingVertical: 4,
        paddingHorizontal: 17,
        justifyContent: "center",
        flexDirection: "column"
    },
    mainViewInvoice: {
        marginHorizontal: 20,
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomWidth: 0.75,
        borderBottomColor: "#DDDDDD" 
    },
    textAgreement: {
        fontSize: 13, maxWidth: initialLayout.width / 1.25,
    },
    titleSection: {
        fontFamily: "OpenSansSemiBold",
        letterSpacing: 0.15,
        fontSize: 15
    },
    viewNameItemInvoice: {
        maxWidth: initialLayout.width / 2
    },
    imageStyle: {
        borderRadius: 10,
        height: 120,
        width: 85
    },
    mainViewListCart: {
        flexDirection: "row",
        marginBottom: 20,
        // backgroundColor:"red"
    },
    viewOfDetailListCart: {
        flexDirection: "column",
        justifyContent: "space-between",
    },
    rowBetween: {
        flexDirection: "row", justifyContent: "space-between"
    },
    viewOfCounter: {
        flexDirection: "row",
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        flex: 1,
        flexWrap: 'wrap'
    },
    author: {
        color: "#999999",
        fontSize: 14,
        flex: 1,
        flexWrap: 'wrap',
    },
    jumlahText: {
        fontWeight: "bold",
        fontSize: 14,
        color: "#999999",
    },
    buttonEnable: {
        borderRadius: 7,
        paddingVertical: 12,
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "#ff9f1c" 
    },
    buttonDissable: {
        borderRadius: 7,
        paddingVertical: 12,
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "#F8F8F8"
    },
    textButton: {
        fontFamily: "OpenSansSemiBold",
        letterSpacing: 0.35,
        color: "#FFFFFF"

    },
    textButtonDissable: {
        fontFamily: "OpenSansSemiBold",
        letterSpacing: 0.35,
        color:"#999999"
    },
    textWarning: {
        color: "#f65c5c",
        fontSize:14
    }
})