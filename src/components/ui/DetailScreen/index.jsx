import { useCallback, useEffect, useState } from "react"
import { View, Text, Image, ScrollView, StyleSheet } from "react-native"
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"

const DetailScreen = ({ route }) => {

    const { title, description,date, author,email, image } = route.params

    const [fontLoaded] = useFonts({
        poppinsRegular : require("../../../../assets/fonts/Poppins-Regular.ttf"),
        poppinsBold : require("../../../../assets/fonts/Poppins-Bold.ttf"),
        poppinsLight : require("../../../../assets/fonts/Poppins-Light.ttf")
    })

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync() 
        }
        prepare()
    },[])

    const onLayout = useCallback( async () => {
        if (fontLoaded) {
            await SplashScreen.hideAsync()
        }
    }, [fontLoaded])

    if (!fontLoaded) return null

    return (
        <ScrollView  onLayout={onLayout}>
            <View style={styles.ScrollStyle}>
                <Text style={styles.lbltitle}>{route.params.title}</Text>
                <View style={{flexDirection : "row", alignItems : "center", justifyContent : "space-between"}}>
                    <View>
                        <Text style={{fontFamily : "poppinsBold", fontSize : 10, color : "#9A0518"}}>{route.params.author}</Text>
                        <Text style={{fontFamily : "poppinsRegular", fontSize : 8, color : "#4E4C4C"}}>{route.params.email}</Text>
                    </View>
                    <Text style={{fontFamily : "poppinsLight", color : "#000", fontSize : 9}}>{route.params.date}</Text>
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
        fontFamily : "poppinsBold",
        //paddingHorizontal: 25,        
    },
    lbldescrip : {
        fontSize: 14,
        textAlign: "justify",
        color: "#4E4C4C",
        fontFamily : "poppinsRegular",
        //paddingHorizontal: 25,
    }
})

export default DetailScreen