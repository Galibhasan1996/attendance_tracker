import { Keyboard, StyleSheet, TouchableOpacity, View, Image, ActivityIndicator, } from 'react-native'
import React, { useState, } from 'react'
import { responsiveScreenWidth, responsiveFontSize, responsiveHeight, } from 'react-native-responsive-dimensions'
import { scale } from 'react-native-size-matters'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Input from '../../../component/input/Input';
import AllColor, { Height, width } from '../../../util/color/Color';
import Button from '../../../component/Button/Button';
import CustomText from '../../../component/Text/Text';
import { navigate, resetAndNavigate } from '../../../navigator/NavigationREF/NavigationRef';
import { UserStorage } from '../../../store/Store';
import { validateLogin } from '../../../util/Validattion/Validation';
import { useAuth } from '../../../hooks/Auth/useAuth';
import { showToast, styleConsole } from '../../../util/Helper/Helper';

const Login = () => {

    const insets = useSafeAreaInsets()
    const { Login, loading } = useAuth()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")




    const handleLogin = async () => {
        if (!validateLogin(email, password, showToast)) return;

        try {
            const data = await Login(email, password);
            // styleConsole("🚀 ~ Login.js:31 ~ handleLogin ~ data:", "logindata", data.errors[0].msg);


            if (data?.error) {
                return showToast("error", data.error, data.error);
            }

            if (data?.errors) {
                return showToast("error", data.errors[0].msg, data.errors[0].msg);
            }


            if (data?.message === "Login successfully") {
                showToast("success", data.message, data.message);

                const { token, refreshToken, user } = data;
                UserStorage.setItem("token", token);
                UserStorage.setItem("refreshToken", refreshToken);
                UserStorage.setItem("_id", user._id);
                UserStorage.setItem("name", user.name);
                UserStorage.setItem("email", user.email);
                UserStorage.setItem("employeeId", user.employeeId);

                setEmail("");
                setPassword("");
                resetAndNavigate("Home")
                Keyboard.dismiss();

            }
        } catch (error) {
            console.log("🚀 ~ Login.js:61 ~ handleLogin ~ error:", error.message)
        } finally {
            Keyboard.dismiss();
        }
    };


    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <View style={{ flex: 1, alignItems: 'center', }}>
                {
                    loading === false ?
                        <>
                            <CustomText variant='h1' fontSize={responsiveFontSize(3.5)} style={{ fontWeight: "900", color: AllColor.black, marginTop: scale(responsiveHeight(3)), }}>{"Login"}</CustomText>
                            <Image source={require("../../../util/image/login.png")} style={styles.logInImage}></Image>

                            {/* --------------input-------------- */}
                            <Input
                                IconCategoryName={"Fontisto"}
                                IconName={"email"}
                                placeholder={"Enter your Email"}
                                color={AllColor.Androidgreen1}
                                placeholderTextColor={AllColor.gray1}
                                InputHeader={"Email"}
                                size={scale(20)}
                                value={email}
                                keyboardType={"email-address"}
                                onChangeText={(text) => setEmail(text)}
                                inputColor={AllColor.black}
                            ></Input>
                            {/* ----------------password--------------------- */}
                            <Input
                                IconCategoryName={"Ionicons"}
                                IconName={"lock-closed-outline"}
                                placeholder={"Enter your Password"}
                                color={AllColor.Androidgreen1}
                                placeholderTextColor={AllColor.gray1}
                                InputHeader={"Password"}
                                size={scale(20)}
                                value={password}
                                keyboardType={"default"}
                                onChangeText={(text) => setPassword(text)}
                                inputColor={AllColor.black}
                                secureTextEntry={true}
                            ></Input>
                            {/* ---------login button--------- */}
                            <Button
                                BtBackgroundColor={AllColor.black}
                                ButtonTitle={"Login"}
                                ButtonTitleColor={AllColor.white}
                                marginTop={scale(25)}
                                onPress={() => { handleLogin() }}
                                CpaddingHorizontal={scale(10)}
                                CpaddingVertical={scale(5)}
                                btnWidth={responsiveScreenWidth(80)}
                                borderradius={scale(10)}
                            ></Button>

                            {/* ----------------------don't have account ------------------ */}
                            <View style={styles.dont_have_account_text_container}>
                                <View>
                                    <CustomText variant='h6' Color={AllColor.gray1} >{"Dont' have an account"}</CustomText>

                                </View>
                                <TouchableOpacity onPress={() => {
                                    navigate("Signup")
                                }}>
                                    <CustomText variant='h6' Color={AllColor.Androidgreen1} style={{ marginLeft: scale(3) }}>{"Signup "}</CustomText>
                                </TouchableOpacity>
                            </View>
                        </>
                        :
                        <View style={styles.loadingFalse}>
                            <View style={styles.indicatorContainer}>
                                <ActivityIndicator size={scale(20)} color={AllColor.black}></ActivityIndicator>
                            </View>
                        </View>

                }
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AllColor.white
    },
    dont_have_account_text_container: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: scale(10),
        paddingHorizontal: scale(20)
    },
    logInImage: {
        width: width * 0.5,
        height: width * 0.5,
        resizeMode: "contain"
    },
    addContainer: {
        position: "absolute",
        bottom: scale(33)
    },
    loadingFalse: {
        width: width,
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    indicatorContainer: {
        width: scale(40),
        height: scale(40),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AllColor.white,
        elevation: scale(5),
        borderRadius: scale(30),
    }
})