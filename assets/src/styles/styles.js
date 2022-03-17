import { StyleSheet } from 'react-native'
const COLORS = {
    PRIMARRY_COLOR: "#7acdff",
    SECONDARY_COLOR: '#f1abff',
    WHITE_COLOR: "white",
    BACKGROUND_COLOR: "white",
    TEXT_COLOR: "#41423f",
    GRAY_COLOR: "gray",
    iconSize: 15,
    BLACK_COLOR: "black",
}
const GRADIENT_COLORS = [COLORS.PRIMARRY_COLOR, COLORS.SECONDARY_COLOR]

const SPLASH = StyleSheet.create({
    slide: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    },
    image: {
        width: "100%",
        height: 300,
    },
    text: {
        color: COLORS.GRAY_COLOR,
        textAlign: 'center',
        fontWeight: "500",
        fontSize: 12
    },
    buttonSquare: {
        top: 40,
        padding: 12,
        width: "60%",
        borderRadius: 100,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
    },
    btnText: {
        color: COLORS.WHITE_COLOR,
        fontWeight: "500",
        fontSize: 16
    }
});

const LOGIN = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND_COLOR,
    },
    txt: {
        fontSize: 12,
        color: COLORS.TEXT_COLOR,
        fontWeight: '600'
    },
    txtIn: {
        flex: 1
    },
    txtInPlace: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "center",
        borderColor: COLORS.PRIMARRY_COLOR,
        borderWidth: 1,
        borderRadius: 10
    },
    touchBtn: {
        padding: 14,
        width: "100%",
        borderRadius: 10,
        alignItems: 'center'
    },
    TXTIN: {
        paddingTop: 50,
    },
    or: {
        top: 10,
        width: 20,
        alignSelf: 'center',
        height: 30
    },
    goo: {
        width: 30,
        height: 30
    },
    Goo: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        width: "100%",
        padding: 8,
        borderRadius: 10,
        borderColor: COLORS.PRIMARRY_COLOR,
        borderWidth: 1
    },
    goBAck: {
        borderRadius: 100,
        width: 25,
        height: 25,
        elevation: 5,
        justifyContent: 'center',
        alignItems: "center",
        top: 43,
        marginLeft: 15,
    },
});
const MAIN = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND_COLOR,
    },
    imgBack: {
        width: "100%",
        height: "85%",
        opacity: 0.2,
    },
    imgFront: {
        width: "100%",
        height: "45%",
        position: "absolute",
        top: 40,
        borderRadius: 10,
        right:85,
    },
    bname: {
        fontSize: 15,
        color: COLORS.TEXT_COLOR,
        fontWeight: "bold",
        fontFamily: "normal",
        position: "absolute",
        top: 120,
        alignSelf: "center",
    },
    details: {
        position: "absolute",
        alignSelf: "center",
        top: 340,
        width: "90%",
        height: "11%",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        borderRadius: 20,
        paddingHorizontal: 20,
    },
    dtxt: {
        color: COLORS.WHITE_COLOR,
        fontSize: 17,
        fontWeight: "bold"
    },
    desView: {
        backgroundColor: COLORS.WHITE_COLOR,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        position: "absolute",
        top: 390,
        alignSelf: "center",
        width: "100%",
    },
    readbtn: {
        padding: 17,
        borderRadius: 20,
        alignItems: "center"
    },
});
const MAINHOME = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND_COLOR
    },
    Header: {
        fontSize: 22,
        color: COLORS.TEXT_COLOR,
        fontWeight: "500",
    },
    searchContainer: {
        paddingHorizontal: 7,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.PRIMARRY_COLOR,
        borderRadius: 10,
        elevation: 1,
    },
    PopBookTouch: {
        width: 120,
        height: 170,
        backgroundColor: COLORS.WHITE_COLOR,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        elevation: 2,
    },
    pbook: {
        width: 110,
        height: 165,
        borderRadius: 7
    },
    CategBookTouch: {
        width: "100%",
        height: 110,
        backgroundColor: COLORS.WHITE_COLOR,
        borderRadius: 10,
        alignItems: "center",
        elevation: 3,
        flexDirection: "row"
    },
    gategbook: {
        width: 60,
        height: 90,
        borderRadius: 7
    },
    CategoriesTouch: {
        width: 130,
        height: 40,
        borderRadius: 10,
        alignItems: "center",
        justifyContent:"center",
        elevation: 3,
    },
})
export { SPLASH, COLORS, LOGIN, MAIN, GRADIENT_COLORS, MAINHOME }