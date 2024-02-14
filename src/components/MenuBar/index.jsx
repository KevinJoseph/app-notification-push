import { Image, StyleSheet, Text, View } from "react-native"
import Constants from "expo-constants"
import { FontAwesome6 } from '@expo/vector-icons'

export const MenuBar = () => {
    return (
        <View style={styles.container}>
            <Image source={require("../../../assets/iconchincha.png")} style={{width : 100, height : 50}} />
            <FontAwesome6 name="bars-staggered" size={25} color="white" />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width : "100%",
        paddingHorizontal : 20,
        marginTop : Constants.statusBarHeight,
        backgroundColor : "#9A0518",
        height : 68,
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
    },
})