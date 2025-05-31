import { StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'

import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Status = ({ children, style }) => {
    const insets = useSafeAreaInsets()
    return (
        <View style={[styles.container, {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }, style]}>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            {children}
        </View>
    )
}

export default Status

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    }
})