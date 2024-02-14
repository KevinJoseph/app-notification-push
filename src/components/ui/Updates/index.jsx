import { useEffect, useState } from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import * as Font from 'expo-font'

export const Updates = () => {

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

    const anuncio = "Estamos trabajando para brindarte una experiencia aún mejor. Pronto llegarán nuevas y emocionantes funciones."

    return (
        <>
            <View style={style.containerupdates}>
                <Image source={require("../../../../assets/team-error.png")} style={{width: 264, height: 264}} />
                <View style={{paddingHorizontal : 20, alignItems : "center", gap : 10}}>
                    <Text style={{fontFamily : "poppins-regular", textAlign : "center"}}>{anuncio}</Text>
                    <Text style={{fontFamily : "poppins-bold", textAlign : "center"}}>¡Gracias por tu paciencia y apoyo!</Text>
                </View>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    containerupdates : {
        paddingTop : 35,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap : 30
    }
})