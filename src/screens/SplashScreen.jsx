import { Image, StyleSheet, View } from "react-native"

export const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/iconchincha.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9A0518',
    },
})