import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity } from "react-native"
import { Fontisto, Ionicons, Feather } from '@expo/vector-icons'
import { useState } from "react"
import { CardArticles } from "../CardArticles"
import { TodoScreen } from "../../../screens/subscreens/TodoScreen"

export const Icons = () => {

    const IconsInfo = [
        {
            icon : <Feather name="paperclip" size={20} color="#9A0518" />,
            name : "Todo"
        },
        {
            icon : <Fontisto name="world-o" size={20} color="#9A0518" />,
            name : "Noticias"
        },
        {
            icon : <Ionicons name="library-outline" size={20} color="#9A0518" />,
            name : "Educacion"
        },
        {
            icon : <Ionicons name="bicycle" size={20} color="#9A0518" />,
            name : "Deportes"
        }
    ]

    const [ selectIcon, setSelectIcon ] = useState("section1")

    const TabSection = ({ selectIcon }) => {
        switch (selectIcon) {
            case "section1":
                return <>
                    <TodoScreen/>
                </>
            case "section2":
                return <>
                    <CardArticles/>
                </>
            case "section3":
                return <Text>Educacion</Text>
            case "section4":
                return <Text>Deportes</Text>
            default:
                return <Text>Todo</Text>
        }
    }

    return (
        <>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={style.container}>
                    {IconsInfo.map(({ icon, name }, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => setSelectIcon(`section${index + 1}`)}
                        style={style.iconscontainer}
                    >
                        {icon}
                        <Text style={style.iconsname}>{name}</Text>
                    </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
            <View>
                <TabSection selectIcon={selectIcon} />
            </View>
        </>
    )
}

const style = StyleSheet.create({
    container : {
        flexDirection : "row",
        gap : 20,
        alignItems : "center",
        paddingHorizontal : 20
    },
    iconscontainer : {
        borderRadius : 15,
        gap : 8,
        backgroundColor : "#E9EEF4",
        padding : 8,
        paddingHorizontal : 10,
        flexDirection : "row",
        alignItems : "center",
        marginVertical : 25
    },
    iconsname : {
        color : "#514F4F",
        fontSize : 15
    }
})