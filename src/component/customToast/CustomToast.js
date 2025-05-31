// App.jsx
import { BaseToast, ErrorToast } from 'react-native-toast-message';
import AllColor from '../../util/color/Color';
import { scale } from 'react-native-size-matters';
import { Text, View } from 'react-native';
import Icon from '../Icon/Icon';


export const toastConfig = {

    success: (props) => (
        <BaseToast
            {...props}
            style={{ borderLeftColor: AllColor.Androidgreen1 }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
                fontSize: scale(15),
                fontWeight: scale(800)
            }}
            text2Style={{
                fontSize: scale(12),
                fontWeight: scale(400)
            }}
            renderTrailingIcon={() => {
                return <Icon IconCategoryName="MaterialCommunityIcons" IconName="flower-pollen-outline" color={AllColor.Androidgreen1} size={scale(25)}></Icon>
            }}
        />
    ),

    error: (props) => (
        <ErrorToast
            {...props}
            text1Style={{
                fontSize: scale(15)
            }}
            text2Style={{
                fontSize: scale(12),
                fontWeight: scale(400)
            }}
            renderTrailingIcon={() => {
                return <Icon IconCategoryName="MaterialCommunityIcons" IconName="bee-flower" color={AllColor.red} size={scale(25)}></Icon>
            }}
        />
    ),

    tomatoToast: ({ text1, props }) => (
        <View style={{ height: 60, width: '100%', backgroundColor: AllColor.tomato1 }}>
            <Text>{text1}</Text>
            <Text>{props.uuid}</Text>
        </View>
    )
};

