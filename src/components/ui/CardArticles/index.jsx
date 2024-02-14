import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { useArticles } from "../../../hooks/useArticles"
import { useNavigation } from "@react-navigation/native"
import DetailScreen from "../../ui/DetailScreen"
import { useEffect, useState } from "react"
import * as Font from 'expo-font'

export const CardArticles = () => {

    const navigation = useNavigation()

    const handlePress = (title,description, image) => {
        navigation.navigate("DetailScreen", { title,description, image })
    }

    const { articles, error, loading } = useArticles()

    const fechita = new Date().getFullYear()

    const [fontLoaded, setFontLoaded] = useState(false)

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                'poppins-regular': require('../../../fonts/Poppins-Regular.ttf'),
                'poppins-bold': require('../../../fonts/Poppins-Bold.ttf'),
            })
            setFontLoaded(true)
            }
        loadFonts();
    }, [])

    if (!fontLoaded) {
        return <View />;
    }

    return (
        <ScrollView>
            {error && <Text style={styles.textError}>{error.message}</Text>}
            {loading && <Text>Cargando...</Text>}
            <View style={styles.containerCard}>
                {articles.map(({ title ,description,date,author, image }, index) => (
                    <TouchableOpacity key={index} onPress={() => handlePress( title,description, image)}>
                        <View style={styles.cardBody}>
                            <View style={styles.sectiondata}>
                                <View style={styles.cardBodyTitle}>
                                    <Text style={styles.titlestyle}>{title}</Text>
                                    <Text style={styles.autorcito}>{author}</Text>
                                    <Text style={styles.fechita}>{date}</Text>
                                </View>
                                <Image source={{ uri: image }} style={{ width: 108 , height: 83 }} />
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
        paddingBottom: 20,
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
        color : "#878787",
        fontSize : 10,
        fontFamily : "poppins-regular"
    },
    autorcito : {
        color : "#9A0518",
        fontSize : 10,
        fontFamily : "poppins-bold"
    }, 
    cardBody: {
        width: "auto",
        gap: 10,
        backgroundColor: "#ffffff",
        padding: 20,
        borderColor: "#ccc",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    cardBodyTitle : {
        width : "55%",
        gap : 2
    },
    cardBodyDescription : {
        fontSize: 15,
        color: "#514F4F",
    },
    titlestyle : {
        fontSize: 12,
        color: "#000",
        fontFamily : "poppins-bold"
    },
    sectiondata : {
        flexDirection : "row",
        gap : 40,
        alignItems : "center",
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