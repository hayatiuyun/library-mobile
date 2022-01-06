import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default StyleSheet.create({
    mainViewItem: { flexDirection: "row", marginVertical: 10 },
    imgItem: { width: width / 5.3, height: height / 6, borderRadius: 5, marginRight: 10 },
    viewCaptionItem: { flexDirection: "column", maxWidth: width / 2, justifyContent: "space-between" },
    itemNameStyle: { fontFamily: "OpenSansSemiBold", fontSize: 15 },
    itemAuthorStyle: { fontSize: 14, color: "#CCCCCC" },
    itemSubtotalStyle: { fontFamily: "OpenSansSemiBold", paddingRight: 10, fontSize: 14 },
    itemQtyStyle: { fontSize: 14 },
    mainDateView: { flexDirection: "row", borderBottomWidth: 0.3, borderBottomColor: "#BBBBBB", justifyContent: "space-between", width: width - 40, paddingVertical: 20 },
    textDate: { fontSize: 15, fontFamily: "OpenSansSemiBold" },
    captionDate: { fontSize: 14, color: "#CCCCCC", fontFamily: "OpenSansSemiBold" },
    itemBookListStyle: { flexGrow: 1, borderBottomWidth: 0.3, borderBottomColor: "#BBBBBB", height: 150 },
    totalCostViewStyle: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 20 },
    generalTextStyle: { fontSize: 14, fontFamily: "OpenSansSemiBold" },
    totalCostValueStyle: {  color: "#17c3b2" },
    captTerlambatStyle: { color: "#f65c5c", fontFamily: "OpenSansSemiBold", fontSize: 15 },
    valueDayTerlambatStyle: { color: "#CCCCCC", fontSize: 14 },
    viewCaptDetailPembayaranStyle: { flexDirection: "row",},
    captDetailPembayaranStyle: { fontFamily: "OpenSansSemiBold", color: "#ff9f1c", fontSize: 14 },
    viewItemDetailPembayaran: { flexDirection: "row", justifyContent: "space-between" },
    textItemDetailPembayaran: { width: width / 2 },
    subTitleItemDetailListPembayaran: { color: "#BBBBBB", fontSize: 14 },
    viewDendaSectionKembali: { flexDirection: "row", justifyContent: "space-between" },
    viewButton: { position: "absolute", bottom: 0, alignItems: "center", alignContent: "center", backgroundColor: "#FFFFFF" },
    buttonStyle: { width: width - 40, paddingVertical: 10, borderRadius: 5, alignItems: "center" },
    textButton: { fontFamily: "OpenSansSemiBold" }
    
})
