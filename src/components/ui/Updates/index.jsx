import { Image, StyleSheet, Text, View } from "react-native"

export const Updates = () => {

    const anuncio = "Estamos trabajando arduamente para brindarte la mejor experiencia posible. Pronto disfrutarás de nuevas y emocionantes funciones."

    return (
        <>
            <View style={style.containerupdates}>
                <Image source={require("../../../../assets/team-error.png")} style={{width: 264, height: 264}} />
                <View style={{paddingHorizontal : 20, alignItems : "center", gap : 10}}>
                    <Text style={{fontWeight : "400", textAlign : "center"}}>{anuncio}</Text>
                    <Text style={{fontWeight : "900", textAlign : "center"}}>¡Gracias por tu paciencia y apoyo!</Text>
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