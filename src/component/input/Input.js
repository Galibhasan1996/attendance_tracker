import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { scale } from 'react-native-size-matters';
import AllColor from '../../util/color/Color';
import Icon from '../Icon/Icon';


const Input = ({ size, color, IconName, IconCategoryName,
    ScreenBackgroundColor, placeholder, placeholderTextColor,
    onChangeText, keyboardType, value, InputBackGroundColor,
    InputHeader, LeftIcon = false, secureTextEntry, LeftIconCategoryName,
    LeftIconName, InputHeaderMT, LeftIconOnClick, readOnly = false, LeftIconSize }) => {

    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={[styles.container, { backgroundColor: ScreenBackgroundColor }]}>
            {
                InputHeader &&
                <View>
                    <Text style={[styles.inputheader, { color: readOnly === true ? AllColor.red : isFocused ? AllColor.Androidgreen1 : AllColor.gray1, marginTop: InputHeaderMT ? InputHeaderMT : scale(0) }]}>{InputHeader}</Text>
                </View>
            }
            {/* ------------input------------- */}
            <View style={[styles.main_Input_container, { backgroundColor: InputBackGroundColor, borderWidth: scale(2), borderColor: readOnly === true ? AllColor.red : isFocused ? AllColor.Androidgreen1 : AllColor.white4 }]} >
                <View>
                    <Icon IconCategoryName={IconCategoryName} IconName={IconName} color={readOnly === true ? AllColor.red : isFocused ? color : AllColor.gray1} size={size}></Icon>
                </View>
                <View>
                    <TextInput
                        placeholder={placeholder}
                        placeholderTextColor={placeholderTextColor}
                        onChangeText={onChangeText}
                        keyboardType={keyboardType}
                        secureTextEntry={secureTextEntry}
                        value={value ? String(value) : ""}
                        style={[styles.main_Input, { width: LeftIcon ? responsiveScreenWidth(70) : responsiveScreenWidth(75), color: AllColor.black }]}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        readOnly={readOnly}
                    ></TextInput>
                </View>
                {
                    LeftIcon &&
                    <TouchableOpacity onPress={() => {
                        LeftIconOnClick()
                    }}>
                        <Icon IconCategoryName={LeftIconCategoryName} IconName={LeftIconName} color={isFocused ? color : AllColor.gray1} size={LeftIconSize ? LeftIconSize : scale(25)}></Icon>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        width: responsiveScreenWidth(100),
    },
    Logo_container: {
        width: responsiveScreenWidth(100),
        alignItems: 'center',
    },
    Logo_: {
        width: scale(100),
        height: scale(100),
    },
    main_Input_container: {
        flexDirection: "row",
        alignItems: 'center',
        width: responsiveScreenWidth(90),
        alignSelf: 'center',
        borderRadius: scale(10),
        paddingHorizontal: scale(10),
        marginVertical: scale(5)
    },
    inputheader: {
        fontWeight: "500",
        marginLeft: scale(6)
    },
    main_Input: {
        width: responsiveScreenWidth(70),
        paddingLeft: scale(10),
        marginRight: scale(3)
    }
})