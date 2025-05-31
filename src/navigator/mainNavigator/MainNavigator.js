import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AllScreen } from '../../util/AllScreen/AllScreen'


const Stack = createNativeStackNavigator()


const MainNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ animation: "fade" }} >
            {
                Array.isArray(AllScreen) && AllScreen.length > 0 &&
                AllScreen.map((item, index) => {
                    return (
                        <Stack.Screen key={item.name ? item.name : index} name={item.name} component={item.component} options={{ headerShown: false }} />
                    )
                })
            }
        </Stack.Navigator>
    )
}

export default MainNavigator
