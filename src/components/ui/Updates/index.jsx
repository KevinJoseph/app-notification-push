import { useEffect, useState } from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { useFonts } from "expo-font"

export const Updates = () => {

    const anuncio = "Estamos trabajando arduamente para brindarte la mejor experiencia posible. Pronto disfrutarás de nuevas y emocionantes funciones."

    const [fontLoaded] = useFonts({
        poppinsRegular : require("../../../../assets/fonts/Poppins-Regular.ttf"),
        poppinsBold : require("../../../../assets/fonts/Poppins-Bold.ttf"),
        poppinsLight : require("../../../../assets/fonts/Poppins-Light.ttf")
    })

    if (!fontLoaded) return null

    return (
        <>
            <View style={style.containerupdates}>
                <Image source={require("../../../../assets/team-error.png")} style={{width: 264, height: 264}} />
                <View style={{paddingHorizontal : 20, alignItems : "center", gap : 10}}>
                    <Text style={{fontFamily : "poppinsRegular", textAlign : "center"}}>{anuncio}</Text>
                    <Text style={{fontFamily : "poppinsBold", textAlign : "center"}}>¡Gracias por tu paciencia y apoyo!</Text>
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