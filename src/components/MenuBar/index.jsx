import { Image, StyleSheet, Text, View } from "react-native"
import Constants from "expo-constants"
import { format } from "date-fns"
import { useFonts } from "expo-font"
import { useCallback, useEffect } from "react"
import * as SplashScreen from "expo-splash-screen"

export const MenuBar = () => { 

    const [fontLoaded] = useFonts({
      poppinsRegular : require("../../../assets/fonts/Poppins-Regular.ttf"),
      poppinsBold : require("../../../assets/fonts/Poppins-Bold.ttf"),
      poppinsLight : require("../../../assets/fonts/Poppins-Light.ttf")
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


    const fechaActual = new Date()
    const diaSemana = format(fechaActual, "EEEE", { locale: esLocale })
    const diaMes = format(fechaActual, "d")
    const mesAbreviado = format(fechaActual, "MMM", { locale: esLocale })
    const anio = format(fechaActual, "yyyy")

    const fechita = `${diaSemana}, ${diaMes} de ${mesAbreviado} ${anio}`

    return (
      <View style={styles.container} onLayout={onLayout}>
        <Image source={require("../../../assets/Logo.png")} style={{ width: 85, height: 45 }} />
        <Text style={styles.fechitaa}>{fechita}</Text>
      </View>
    )
}

const esLocale = {
    formatDistance: () => "",
    formatRelative: () => "",
    localize: {
      month: (n) => ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"][n],
      day: (n) => ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"][n],
    },
    match: /^([DLMXJVSD])|(Ene|Feb|Mar|Abr|May|Jun|Jul|Ago|Sep|Oct|Nov|Dic)|(([Ll]unes|[Mm]artes|[Mm]iércoles|[Jj]ueves|[Vv]iernes|[Ss]ábado) [0-9]|[0-9] ([Ee]ne|[Ff]eb|[Mm]ar|[Aa]br|[Mm]ay|[Jj]un|[Jj]ul|[Aa]go|[Ss]ep|[Oo]ct|[Nn]ov|[Dd]ic))$/i,
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      paddingHorizontal: 20,
      marginTop: Constants.statusBarHeight,
      backgroundColor: "#ffff",
      height: 85,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    fechitaa : {
      fontFamily: 'poppinsBold',
      fontSize: 12,
      color: "#878787"
    }
})