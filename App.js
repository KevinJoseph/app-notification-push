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

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const Stack = createStackNavigator()

const Tab = createBottomTabNavigator()

const ScreensStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Articles" component={CardArticles}
            options={{
                headerShown: false
            }}/>
            <Stack.Screen name="DetailScreen" component={DetailScreen}
            options= {{
                title : "Regresar"
            }}/>
        </Stack.Navigator>
    )
}

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
                    <Tab.Navigator
                        initialRouteName="Inicio"
                        screenOptions={{
                            tabBarActiveTintColor: "#9A0518",
                            tabBarStyle: {
                                backgroundColor: "#ffffff",
                            },
                            tabBarStyle: {
                                padding: 10,
                                height: 60
                            },
                            tabBarLabelStyle: {
                                marginBottom: 10,
                                fontSize: 10
                            }
                        }}>
                        <Tab.Screen name="Inicio" component={ScreensStack}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <AntDesign name="home" size={size} color={color} />
                                ),
                                tabBarLabel: "Inicio",
                                headerShown: false,
                            }}
                        />   
                        <Tab.Screen name="Comunidad" component={ComunidadScreen}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <Feather name="users" size={size} color={color} />
                                ),
                                headerTitleAlign: "center",
                                headerShown: false,
                                headerStyle: {
                                    backgroundColor: "#9A0518",
                                }
                            }} />
                        <Tab.Screen name="Contactanos" component={Notification}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <Feather name="phone" size={size} color={color} />
                                ),
                                headerTitleAlign: "center",
                                headerShown: false,
                                headerStyle: {
                                    backgroundColor: "#9A0518",
                                }
                            }} />
                    </Tab.Navigator>
                </>
            )}
        </NavigationContainer>
    )
}
