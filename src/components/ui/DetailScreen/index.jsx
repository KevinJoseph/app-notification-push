import { View, Text, Image, ScrollView, StyleSheet } from "react-native"

const DetailScreen = ({ route }) => {

    const { title, description, image } = route.params

    return (
        <ScrollView>
            <View style={styles.ScrollStyle}>
                <Text style={styles.lbltitle}>{route.params.title}</Text>
                <Image source={{ uri: route.params.image }} style={{ width: "auto", height: 400 }} />
                <Text  style={styles.lbldescrip}>{route.params.description}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ScrollStyle : {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 25,
        paddingVertical: 20,
        gap : 20
    },
    lbltitle : {
        fontSize: 20,
        textAlign: "auto",
        color: "#000",
        fontWeight: "bold"
    },
    lbldescrip : {
        fontSize: 15,
        textAlign: "justify",
        color: "#4E4C4C",
    }
})

export default DetailScreen