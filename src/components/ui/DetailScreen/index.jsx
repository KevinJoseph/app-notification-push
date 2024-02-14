import { useEffect, useState } from "react"
import { View, Text, Image, ScrollView, StyleSheet } from "react-native"
import * as Font from 'expo-font'

const DetailScreen = ({ route }) => {

    const { title, description,date, author,email, image } = route.params

    const [fontLoaded, setFontLoaded] = useState(false)

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                'poppins-regular': require('../../../fonts/Poppins-Regular.ttf'),
                'poppins-bold': require('../../../fonts/Poppins-Bold.ttf'),
                'poppins-light': require('../../../fonts/Poppins-Light.ttf'),
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
            <View style={styles.ScrollStyle}>
                <Text style={styles.lbltitle}>{route.params.title}</Text>
                <View style={{flexDirection : "row", alignItems : "center", justifyContent : "space-between"}}>
                    <View>
                        <Text style={{fontFamily : "poppins-bold", fontSize : 10, color : "#9A0518"}}>{route.params.author}</Text>
                        <Text style={{fontFamily : "poppins-regular", fontSize : 8, color : "#4E4C4C"}}>{route.params.email}</Text>
                    </View>
                    <Text style={{fontFamily : "poppins-light", color : "#000", fontSize : 9}}>{route.params.date}</Text>
                </View>
                <Image source={{ uri: route.params.image }} style={{ width: "auto", height: 350 }} />
                <Text  style={styles.lbldescrip}>{route.params.description}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ScrollStyle : {
        flex: 1,
        justifyContent: "center",
        paddingVertical: 20,
        gap : 20,
        backgroundColor: "#ffff",
        paddingHorizontal: 25,
    },
    lbltitle : {
        fontSize: 17,
        textAlign: "center",
        color: "#000",
        fontFamily : "poppins-bold",
        //paddingHorizontal: 25,        
    },
    lbldescrip : {
        fontSize: 14,
        textAlign: "justify",
        color: "#4E4C4C",
        fontFamily : "poppins-regular",
        //paddingHorizontal: 25,
    }
})

export default DetailScreen