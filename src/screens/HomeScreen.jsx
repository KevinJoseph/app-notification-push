import { Text, useWindowDimensions,ScrollView, View } from "react-native"
import { TabView, SceneMap, TabBar} from "react-native-tab-view"
import { CardArticles } from "../components/ui/CardArticles"
import { useCallback, useEffect, useState } from "react"
import { Updates } from "../components/ui/Updates"

const primeraRuta = () => (
    <ScrollView style={{backgroundColor : "white"}}>
        <CardArticles />
    </ScrollView>
)
const segundaRuta = () => (
    <ScrollView style={{backgroundColor : "white"}}>
        <Updates />
    </ScrollView>
)

const terceraRuta = () => (
    <ScrollView style={{backgroundColor : "white"}}>
        <Updates />  
    </ScrollView>
)

const renderScene = SceneMap({
    primero: primeraRuta,
    segundo: segundaRuta,
    tercero : terceraRuta
})

export const HomeScreen = () => {

    const layout = useWindowDimensions()

    const [index, setIndex] = useState(0)
    const [routes] = useState([
        { key: 'primero', title: 'Noticias al día' },
        { key: 'segundo', title: 'Avisos' },
        { key: 'tercero', title: 'Eventos' }
    ])

    return (
        <>
            <TabView
                navigationState={{index,routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width}}
                renderTabBar={(props) => (
                    <TabBar
                    {...props}
                    indicatorStyle={{backgroundColor : "#9A0518"}}
                    style={{backgroundColor : "#ffff"}}
                    labelStyle={{ color : "#514F4F", textTransform: "none", fontWeight : "900", fontSize : 12}}
                    activeColor="#9A0518"/>
            )}/>
        </>
    )
}