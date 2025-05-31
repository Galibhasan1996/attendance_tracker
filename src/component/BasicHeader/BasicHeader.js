import { StyleSheet, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import AllColor from '../../util/color/Color'
import Icon from '../Icon/Icon'
import { scale } from 'react-native-size-matters'
import CustomText from '../Text/Text'

const BasicHeader = ({ left = false, leftIconName, leftIconCategoryName, right = false, rightIconName, rightIconCategoryName, text, onpRightIcon = () => { } }) => {
    return (
        <View style={styles.container}>
            {
                left && <Icon IconCategoryName={leftIconCategoryName} IconName={leftIconName} color={AllColor.black} size={scale(18)}></Icon>
            }
            {
                text && <CustomText Color={AllColor.black} variant='h3' TextStyle={{ fontWeight: "900" }}>{text}</CustomText>
            }
            {
                right && <TouchableOpacity onPress={() => {
                    onpRightIcon()
                }}>
                    <Icon IconCategoryName={rightIconCategoryName} IconName={rightIconName} color={AllColor.black} size={scale(18)}></Icon>
                </TouchableOpacity>
            }
        </View>
    )
}

export default BasicHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: AllColor.totalTransparent,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: scale(10),
        paddingVertical: scale(10),

    }
})