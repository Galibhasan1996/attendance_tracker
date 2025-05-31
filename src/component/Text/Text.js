import { View, Text, StyleSheet, } from 'react-native';
import React from 'react';
import { scale } from 'react-native-size-matters';

const CustomText = ({ variant = 'body', fontSize, style, children, numberOfLines, Color, TextStyle }) => {
    let computedFontSize;
    switch (variant) {
        case 'h1':
            computedFontSize = scale(fontSize || 22);
            break;
        case 'h2':
            computedFontSize = scale(fontSize || 20);
            break;
        case 'h3':
            computedFontSize = scale(fontSize || 18);
            break;
        case 'h4':
            computedFontSize = scale(fontSize || 16);
            break;
        case 'h5':
            computedFontSize = scale(fontSize || 14);
            break;
        case 'h6':
            computedFontSize = scale(fontSize || 12);
            break;
        case 'h7':
        case 'h8':
        case 'h9':
            computedFontSize = scale(fontSize || (variant === 'h9' ? 9 : 10)); // Combined h7, h8, h9
            break;
        default:
            computedFontSize = scale(fontSize || 12);
    }




    return (
        <View style={[styles.container, style]}>
            <Text
                numberOfLines={numberOfLines}
                style={[styles.text, { fontSize: computedFontSize, color: Color ? Color : "black" }, TextStyle || {}]}>
                {children}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    text: {
        textAlign: 'left',
    },
});

export default CustomText;