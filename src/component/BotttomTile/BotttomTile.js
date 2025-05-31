import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import AllColor, { width } from '../../util/color/Color'
import { scale } from 'react-native-size-matters'
import Icon from '../Icon/Icon'
import { getRandomColor } from '../../util/Helper/Helper'

const BotttomTile = ({ data }) => {


    return (
        <View style={styles.container}>
            <View style={styles.insideContainer}>
                {
                    Array.isArray(data) && data.length > 0 &&
                    data.map((item, index) => {
                        return (
                            <View key={item.id ? item.id : index} style={[styles.mainTile, { backgroundColor: getRandomColor() }]}>
                                <View style={{ backgroundColor: AllColor.white, paddingHorizontal: scale(10), paddingVertical: scale(10), borderRadius: scale(10) }}>
                                    <Icon IconCategoryName={item.iconCategoryName} IconName={item.iconName} color={AllColor.black} size={scale(18)}></Icon>
                                </View>
                                <Text style={{ fontWeight: "700", color: AllColor.black, marginTop: scale(10) }}>{item.title}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default BotttomTile

const styles = StyleSheet.create({
    container: {
        width: width,
        marginVertical: scale(10),
        paddingVertical: scale(10),
        alignItems: 'center',
    },
    insideContainer: {
        width: width * 0.95,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainTile: {
        width: width * 0.44,
        height: scale(100),
        marginHorizontal: scale(5),
        marginVertical: scale(5),
        borderRadius: scale(10),
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: AllColor.white,
        borderWidth: scale(1)
    }
})