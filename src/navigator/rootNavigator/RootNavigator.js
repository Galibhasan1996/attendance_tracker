import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigator from '../mainNavigator/MainNavigator'
import { navigationRef } from '../NavigationREF/NavigationRef'





const RootNavigator = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <MainNavigator></MainNavigator>
        </NavigationContainer>
    )
}

export default RootNavigator

