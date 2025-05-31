import { Dimensions, useColorScheme } from "react-native";
import AllColor from "../../util/color/Color";

export const useCustomStyle = () => {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === "dark";
    const isLight = colorScheme === "light";

    const CustomStyle = {
        blackBackground: {
            backgroundColor: isDark ? AllColor.black : AllColor.white
        },
        whiteColor: {
            color: isDark ? AllColor.white : AllColor.black
        },
        whiteBackground: {
            backgroundColor: isDark ? AllColor.white : AllColor.black
        },
        blackColor: {
            color: isDark ? AllColor.black : AllColor.white
        },
        blackBorder: {
            borderColor: isDark ? AllColor.black : AllColor.white
        },
        whiteBorder: {
            borderColor: isDark ? AllColor.white : AllColor.black
        },
        forTesting: {
            backgroundColor: isDark ? "rgba(138,43,226,0.3)" : AllColor.Cyan
        },
        tintWhiteColor: {
            tintColor: isDark ? AllColor.white : AllColor.black
        },

        grayColor: {
            color: AllColor.gray
        },
        grayBackground: {
            backgroundColor: AllColor.gray
        },
        androidColor: {
            color: AllColor.Androidgreen1
        },
        androidBackgroundColor: {
            backgroundColor: AllColor.Androidgreen1
        },
        redBackgroundColor: {
            backgroundColor: AllColor.red
        },
        grayBorder: {
            borderColor: AllColor.gray
        },
        redColor: {
            color: AllColor.red
        }
    };

    const { height, width } = Dimensions.get("screen");

    return { CustomStyle, isDark, isLight, height, width };
};
