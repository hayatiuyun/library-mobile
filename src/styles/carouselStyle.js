import { Dimensions, StyleSheet } from "react-native";
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default StyleSheet.create({
    slide: {
        height: 150,
        width: windowWidth,
        justifyContent: "center",
        alignItems: "center",
    },
    slideImage: {
        width: windowWidth * 0.9,
        height: '100%',
        borderRadius: 10,
        flex: 1
    },
    slideTitle: { fontSize: 24 },
    slideSubtitle: { fontSize: 18 },

    pagination: {
        position: "absolute",
        top: windowHeight / 5,
        width: windowWidth * 0.9,
        justifyContent: "center",
        flexDirection: "row",
        marginHorizontal: 20,
        alignItems: "center",
    },
    paginationDot: {
        width: 6,
        height: 6,
        borderRadius: 4,
        marginHorizontal: 2,
    },
    paginationDotActive: {
        backgroundColor: "#666666",
        width: 30,
        height: 6,
        borderRadius: 4,
        marginHorizontal: 2,
    },
    paginationDotInactive: { backgroundColor: "#999999" },

    carousel: { flex: 1 },
})
