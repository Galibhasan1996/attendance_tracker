import { StyleSheet, Text, View, ScrollView, TouchableOpacity, } from 'react-native'
import React from 'react'
import AllColor, { width } from '../../util/color/Color'
import { styleConsole } from '../../util/Helper/Helper'
import Icon from '../Icon/Icon'
import { scale } from 'react-native-size-matters'
import { navigate } from '../../navigator/NavigationREF/NavigationRef'

const TopTile = ({ data }) => {


    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true}>
                {
                    Array.isArray(data) && data.length > 0 &&
                    data.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={styles.tileContainer} onPress={() => {
                                if (item.title === "Employee List") {
                                    navigate("employeeList")
                                }
                            }}>
                                <View style={styles.insideTile}>
                                    <Icon IconCategoryName={item.iconCategoryName} IconName={item.iconName} color={AllColor.black} size={scale(18)}></Icon>
                                </View>
                                <Text>{item.title}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default TopTile

const styles = StyleSheet.create({
    container: {
        backgroundColor: AllColor.totalTransparent,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: scale(10),
        paddingHorizontal: scale(8)

    },
    tileContainer: {
        flexDirection: "column",
        alignItems: 'center',
        backgroundColor: AllColor.gray9,
        paddingHorizontal: scale(10),
        paddingVertical: scale(5),
        height: scale(80),
        marginHorizontal: scale(5),
        width: width * 0.45,
        justifyContent: 'center',
        borderRadius: scale(10),
    },
    insideTile: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AllColor.gray6,
        paddingVertical: scale(10),
        paddingHorizontal: scale(10),
        borderRadius: scale(100),
        elevation: scale(5)
    }

})