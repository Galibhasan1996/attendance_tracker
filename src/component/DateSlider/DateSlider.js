import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, TextInput, Alert, ActivityIndicator, Modal, Dimensions, StatusBar, useColorScheme } from 'react-native'
import React, { useState, useEffect } from 'react'
import AllColor, { width } from '../../util/color/Color'
import { scale } from 'react-native-size-matters'
import Icon from '../Icon/Icon'

const DateSlider = ({ onpRightPress = () => { }, onpLeftPress = () => { }, date = "" }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                onpLeftPress()
            }}>
                <Icon IconCategoryName={"AntDesign"} IconName={"caretleft"} color={AllColor.black} size={scale(15)}></Icon>
            </TouchableOpacity>
            <Text>{`${date}`}</Text>
            <TouchableOpacity onPress={() => {
                onpRightPress()
            }}>
                <Icon IconCategoryName={"AntDesign"} IconName={"caretright"} color={AllColor.black} size={scale(15)}></Icon>
            </TouchableOpacity>
        </View>
    )
}

export default DateSlider

const styles = StyleSheet.create({
    container: {
        // backgroundColor: AllColor.rgbaGreen,
        width: width,
        paddingVertical: scale(10),
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'space-evenly',
        marginVertical: scale(10),
        paddingHorizontal: scale(20)
    }
})