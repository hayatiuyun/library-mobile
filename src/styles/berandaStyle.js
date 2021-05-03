import { StyleSheet, Dimensions } from 'react-native';
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default StyleSheet.create({
    slide: {
        height: windowHeight / 2,
        width: windowWidth,
        justifyContent: "center",
        alignItems: "center",
    },
    slideImage: { width: windowWidth * 0.9, height: windowHeight * 0.7 },
    slideTitle: { fontSize: 24 },
    slideSubtitle: { fontSize: 18 },

    pagination: {
        position: "absolute",
        bottom: windowHeight / 2,
        width: "100%",
        justifyContent: "center",
        flexDirection: "row",
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 2,
    },
    paginationDotActive: {
        backgroundColor: "lightblue",
        width: 25,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 2,
    },
    paginationDotInactive: { backgroundColor: "gray" },

    carousel: { flex: 1 },
    viewFlatlist: {
        margin: 15, justifyContent: "space-between"
    }
})