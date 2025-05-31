import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import AllColor, { width } from '../../util/color/Color'
import { scale } from 'react-native-size-matters'
import Icon from '../Icon/Icon'
import { getRandomColor } from '../../util/Helper/Helper'
import { navigate } from '../../navigator/NavigationREF/NavigationRef'

const MiddleTile = ({ data }) => {
    return (
        <View style={styles.container}>
            <View style={styles.indsideContainer}>
                {
                    Array.isArray(data) && data.length > 0 &&
                    data.map((item, index) => {
                        return (
                            <View key={item.id ? item.id : index} style={[styles.listContainer, { backgroundColor: getRandomColor() }]}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <View style={styles.rightIcon1}>
                                        <Icon IconCategoryName={item.iconCategoryName} IconName={item.iconName} color={AllColor.black} size={scale(18)}></Icon>
                                    </View>
                                    <Text style={{ fontWeight: "700", color: AllColor.black }}>{item.title}</Text>
                                </View>
                                <TouchableOpacity style={styles.rightIcon} onPress={() => {
                                    if (item.title === "Summary Report") {
                                        navigate("Report")
                                    }
                                }}>
                                    <Icon IconCategoryName={item.LeftIconCategoryName} IconName={item.LeftIconName} color={AllColor.black} size={scale(18)}></Icon>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }

            </View>
        </View>
    )
}

export default MiddleTile

const styles = StyleSheet.create({
    container: {
        width: width,
        alignItems: 'center',
    },
    indsideContainer: {
        width: width * 0.95,
        backgroundColor: AllColor.rgbaOrange,
        borderRadius: scale(10),
        alignItems: 'center',
        paddingVertical: scale(10)
    },
    listContainer: {
        width: "95%",
        height: scale(50),
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: scale(5),
        borderRadius: scale(10),
        flexDirection: "row",
        paddingHorizontal: scale(10)
    },
    rightIcon: {
        backgroundColor: AllColor.white,
        width: scale(30),
        height: scale(30),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(10)
    },
    rightIcon1: {
        backgroundColor: AllColor.white,
        width: scale(40),
        height: scale(40),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(10),
        marginRight: scale(10)
    }
})