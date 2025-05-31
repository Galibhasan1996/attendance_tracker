import { StyleSheet, Text, TouchableOpacity, } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import AllColor from '../../util/color/Color'

const Button =
    ({
        ButtonTitle, onPress, BtBackgroundColor, ButtonTitleColor,
        marginVertical, btnWidth, btnHeight, fontsize,
        marginLeft, marginRight, disabled, marginTop,
        marginBottom, borderradius, CborderColor, CborderWidth,
        CmarginHorizontal, CpaddingVertical, CpaddingHorizontal,
    }) => {
        // ------------custom Style------------
        return (
            <TouchableOpacity disabled={disabled} style={[styles.container,
            {
                backgroundColor: BtBackgroundColor ? BtBackgroundColor : AllColor.black,
                marginVertical: marginVertical ? marginVertical : scale(20),
                width: btnWidth ? btnWidth : undefined,
                height: btnHeight ? btnHeight : undefined,
                marginRight: marginRight ? marginRight : scale(0),
                marginLeft: marginLeft ? marginLeft : scale(0),
                marginTop: marginTop ? marginTop : scale(0),
                marginBottom: marginBottom ? marginBottom : scale(0),
                borderRadius: borderradius ? borderradius : scale(0),
                borderColor: CborderColor ? CborderColor : AllColor.black,
                borderWidth: CborderWidth ? CborderWidth : scale(0),
                marginHorizontal: CmarginHorizontal ? CmarginHorizontal : scale(0),
                paddingVertical: CpaddingVertical ? CpaddingVertical : undefined,
                paddingHorizontal: CpaddingHorizontal ? CpaddingHorizontal : undefined,
            }
            ]} onPress={() => {
                onPress()
            }}>
                <Text style={[styles.buttontitle,
                {
                    color: ButtonTitleColor ? ButtonTitleColor : AllColor.black,
                    fontSize: fontsize ? fontsize : scale(15)

                }
                ]}>{ButtonTitle}</Text>
            </TouchableOpacity>
        )
    }

export default Button

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttontitle: {
        fontWeight: "500",
    }
})