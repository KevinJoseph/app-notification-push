import React, { useEffect, useState, useRef } from 'react';
import { Text, View, Platform } from 'react-native';
import { useNotificationHandling } from './components/NotificationHandler';
import * as Notifications from 'expo-notifications';
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"

import { ComunidadScreen } from "./src/screens/ComunidadScreen"
import { AntDesign, Feather} from '@expo/vector-icons'
import { ContactanosScreen } from "./src/screens/ContactanosScreen.jsx"
import { MenuBar } from "./src/components/MenuBar"
import { SplashScreen } from "./src/screens/SplashScreen.jsx"
import { createStackNavigator } from '@react-navigation/stack'
import { CardArticles } from "./src/components/ui/CardArticles/index.jsx"
import DetailScreen from "./src/components/ui/DetailScreen/index.jsx"
import { HomeScreen } from './src/screens/HomeScreen.jsx'

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import * as Font from 'expo-font'

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
})

const Stack = createStackNavigator()

const Notification =  () => {

    const { expoPushToken, notification } = useNotificationHandling()

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-around',
            }}>
            <Text>Your expo push token: {expoPushToken}</Text>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text>Title: {notification && notification.request.content.title} </Text>
                <Text>Body: {notification && notification.request.content.body}</Text>
                <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
            </View>
        </View>
    )
}

export default function App() {

    const [showSplash, setShowSplash] = useState(true)

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                'poppins-regular': require('./src/fonts/Poppins-Regular.ttf'),
                'poppins-bold': require('./src/fonts/Poppins-Bold.ttf'),
            })
            }
        loadFonts();
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
        setShowSplash(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <NavigationContainer>
            {showSplash ? (
                <SplashScreen />
            ) : (
                <>
                    <MenuBar />
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={HomeScreen}
                        options={{
                            headerShown: false
                        }}/>
                        <Stack.Screen name="DetailScreen" component={DetailScreen}
                        options= {{
                            title : false,
                            headerStyle : {
                                backgroundColor : "#ffffff",
                                height : 38
                            },
                            headerTintColor : "#514F4F",
                        }}/>
                    </Stack.Navigator>
                </>
            )}
        </NavigationContainer>
    )
}
