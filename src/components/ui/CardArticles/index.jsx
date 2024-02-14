import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { useArticles } from "../../../hooks/useArticles"
import { useNavigation } from "@react-navigation/native"
import DetailScreen from "../../ui/DetailScreen"

export const CardArticles = () => {

    const navigation = useNavigation()

    const handlePress = (title,description, image) => {
        navigation.navigate("DetailScreen", { title,description, image })
    }

    const { articles, error, loading } = useArticles()

    const fechita = new Date().getFullYear()

    return (
        <ScrollView>
            {error && <Text style={styles.textError}>{error.message}</Text>}
            {loading && <Text>Cargando...</Text>}
            <View style={styles.containerCard}>
                <Text style={styles.titleCard}>Noticias</Text>
                {articles.map(({ title ,description, image }, index) => (
                    <TouchableOpacity key={index} onPress={() => handlePress( title,description, image)}>
                        <View style={styles.cardBody}>
                            <Text style={styles.fechita}>{fechita}</Text>
                            <View style={styles.sectiondata}>
                                <Text style={styles.cardBodyTitle}>{title}</Text>
                                <Image source={{ uri: image }} style={{ width: 120 , height: 100 }} />
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textError : {
        color: "red",
        textAlign: "center",
        fontSize: 35
    },
    containerCard : {
        flex: 1,
        justifyContent: "center",
        paddingBottom: 20
    },
    titleCard : {
        fontSize: 18,
        paddingVertical : 5,
        textAlign: "center",
        color: "#ffff",
        fontWeight : "bold",
        marginVertical : 25,
        marginHorizontal : 25,
        backgroundColor : "#9A0518"
    },
    fechita : {
        color : "#9A0518"
    }, 
    cardBody : {
        width : "auto",
        gap: 10,
        backgroundColor : "#ffffff",
        padding: 20,
        //marginHorizontal : 5,
        borderWidth : 1,
        borderColor : "#ccc"
    },
    cardBodyTitle : {
        fontSize: 15,
        color: "#000",
        fontWeight: "bold",
        width : "50%"
    },
    cardBodyDescription : {
        fontSize: 15,
        color: "#514F4F",
    },
    sectiondata : {
        flexDirection : "row",
        gap : 20
    },
    modalContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.7)",
        maxHeight: "100%",
    },
    modalContent: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        maxHeight : "100%"
    },
    closeButton: {
        backgroundColor: "#9A0518",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    }
})