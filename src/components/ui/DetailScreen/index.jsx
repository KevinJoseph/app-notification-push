import { View, Text, Image, ScrollView, StyleSheet } from "react-native"

const DetailScreen = ({ route }) => {

    const { title, description,date, author,email, image } = route.params

    return (
        <ScrollView>
            <View style={styles.ScrollStyle}>
                <Text style={styles.lbltitle}>{route.params.title}</Text>
                <View style={{flexDirection : "row", alignItems : "center", justifyContent : "space-between"}}>
                    <View>
                        <Text style={{fontWeight : "900", fontSize : 10.5, color : "#9A0518"}}>{route.params.author}</Text>
                        <Text style={{fontWeight : "400", fontSize : 8.5, color : "#4E4C4C"}}>{route.params.email}</Text>
                    </View>
                    <Text style={{fontWeight : "400", color : "#000", fontSize : 9.5}}>{route.params.date}</Text>
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
        fontSize: 20,
        textAlign: "center",
        color: "#000",
        fontWeight : "900",
        //paddingHorizontal: 25,        
    },
    lbldescrip : {
        fontSize: 14,
        textAlign: "justify",
        color: "#4E4C4C",
        fontWeight : "500",
        //paddingHorizontal: 25,
    }
})

export default DetailScreen