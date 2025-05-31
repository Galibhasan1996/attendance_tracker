import { Keyboard, StyleSheet, TouchableOpacity, View, Image, ActivityIndicator, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, } from 'react-native'
import React, { useReducer, } from 'react'
import { responsiveScreenWidth, responsiveFontSize, responsiveHeight, } from 'react-native-responsive-dimensions'
import { scale } from 'react-native-size-matters'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Input from '../../../component/input/Input';
import AllColor, { width } from '../../../util/color/Color';
import Button from '../../../component/Button/Button';
import CustomText from '../../../component/Text/Text';
import { navigate, resetAndNavigate } from '../../../navigator/NavigationREF/NavigationRef';
import { InputRegister, loginInitialState, reducer } from '../../../util/reducerHelper/reducerHelper';
import { validateRegister } from '../../../util/Validattion/Validation';
import { showToast, styleConsole } from '../../../util/Helper/Helper';
import { useAuth } from '../../../hooks/Auth/useAuth';

const Signup = () => {

    const insets = useSafeAreaInsets()
    const { Register, loading } = useAuth()
    const [state, dispatch] = useReducer(reducer, loginInitialState)

    const handleRegister = async () => {
        if (!validateRegister(state, showToast)) return;
        try {
            const data = await Register(state.employeeId, state.name, state.designation,
                state.joiningDate, state.dateOfBirth, state.salary,
                Boolean(state.activeEmployee), state.address,
                state.phoneNumber, state.email, state.password)
            // styleConsole("🚀 ~ Signup.js:26 ~ handleRegister ~ data:", "handleRegister", data)

            if (data?.error === "Duplicate value for -- employeeId --. That -- employeeId -- is already in use.") {
                return showToast("error", "Employee Id is already exist", "Employee Id is already exist");
            }

            if (Array.isArray(data?.errors) && data?.errors[0].msg === "Date of birth must be in the format DD/MM/YYYY.") {
                return showToast("error", "Date format is DD/MM/YYYY", "Date format is DD/MM/YYYY");
            }

            if (data?.error) {
                return showToast("error", data.error, data.error);
            }

            if (Array.isArray(data?.errors) && data?.errors[0]?.msg) {
                return showToast("error", data.errors[0].msg, data.errors[0].msg);
            }

            if (data?.message === "user already exist") {
                showToast("success", data.message, "Please Use Different Email This Email Already Exist");
            }

            if (data?.message === "registered successfully") {
                showToast("success", data.message, data.message);

                dispatch({ type: "RESET" });
                resetAndNavigate("Login");

            }

        } catch (error) {
            console.log("🚀 ~ Signup.js:57 ~ handleRegister ~ error:", error)
        } finally {
            Keyboard.dismiss();
        }
    };


    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            {
                loading === false ?
                    <>
                        <View style={{ flex: 1, alignItems: 'center', }}>
                            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                <KeyboardAvoidingView
                                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                                    style={{ flex: 1 }}
                                    keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 60}
                                    contentContainerStyle={{ flexGrow: 1 }}
                                >
                                    <ScrollView>
                                        <View style={{ width: width, alignItems: 'center', }}>
                                            <CustomText variant='h1' fontSize={responsiveFontSize(3.5)} style={{ fontWeight: "900", color: AllColor.black, marginTop: scale(responsiveHeight(3)), }}>{"Signup"}</CustomText>
                                        </View>
                                        <View style={{ width: width, alignItems: 'center', }}>
                                            <Image source={require("../../../util/image/login.png")} style={styles.logInImage}></Image>
                                        </View>
                                        {/* --------------input-------------- */}
                                        {
                                            Array.isArray(InputRegister) && InputRegister.length > 0 && InputRegister.map((item, index) => {
                                                return (
                                                    <Input
                                                        key={item.field ? item.field : index}
                                                        IconCategoryName={item.IconCategoryName}
                                                        IconName={item.IconName}
                                                        placeholder={`enter your ${item.label}`.toLowerCase()}
                                                        color={AllColor.Androidgreen1}
                                                        placeholderTextColor={AllColor.gray1}
                                                        InputHeader={item.label}
                                                        size={scale(20)}
                                                        value={state[item.field] || ""}
                                                        keyboardType={item.keyboardType}
                                                        onChangeText={(text) => dispatch({ type: "SET_INPUT", field: item.field, payload: text })}
                                                        inputColor={AllColor.black}
                                                    ></Input>
                                                )
                                            })
                                        }

                                        {/* ---------login button--------- */}
                                        <Button
                                            BtBackgroundColor={AllColor.black}
                                            ButtonTitle={"Register"}
                                            ButtonTitleColor={AllColor.white}
                                            marginTop={scale(25)}
                                            onPress={() => { handleRegister() }}
                                            CpaddingHorizontal={scale(10)}
                                            CpaddingVertical={scale(5)}
                                            btnWidth={responsiveScreenWidth(80)}
                                            borderradius={scale(10)}
                                        ></Button>

                                        {/* ----------------------don't have account ------------------ */}
                                        <View style={styles.dont_have_account_text_container}>
                                            <View>
                                                <CustomText variant='h6' Color={AllColor.gray1} >{"Already have an account"}</CustomText>

                                            </View>
                                            <TouchableOpacity onPress={() => {
                                                navigate("Login")
                                            }}>
                                                <CustomText variant='h6' Color={AllColor.Androidgreen1} style={{ marginLeft: scale(3) }}>{"Login "}</CustomText>
                                            </TouchableOpacity>
                                        </View>
                                    </ScrollView>
                                </KeyboardAvoidingView>
                            </TouchableWithoutFeedback>
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
    )
}

export default Signup

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
    indicatorContainer: {
        width: scale(40),
        height: scale(40),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AllColor.white,
        elevation: scale(5),
        borderRadius: scale(30),
    },
    loadingFalse: {
        width: width,
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    }
})

