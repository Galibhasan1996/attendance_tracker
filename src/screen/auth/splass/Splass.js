import { Image, StyleSheet, Text, View, } from 'react-native'
import React, { useEffect } from 'react'
import AllColor, { width } from '../../../util/color/Color'
import { scale } from 'react-native-size-matters'
import { resetAndNavigate } from '../../../navigator/NavigationREF/NavigationRef'
import { UserStorage } from '../../../store/Store'
import { jwtDecode } from "jwt-decode"
import { styleConsole } from '../../../util/Helper/Helper'
import { useAuth } from '../../../hooks/Auth/useAuth'

const Splass = () => {
    const { freshToken } = useAuth()

    const createRefreshToken = async (refreshToken) => {
        try {
            const data = await freshToken(refreshToken)
            // styleConsole("🚀 ~ Splass.js:17 ~ createRefreshToken ~ data:", "createRefreshToken", data)


            UserStorage.setItem("token", data.token)
            UserStorage.setItem("refreshToken", data.refreshToken)

        } catch (error) {
            styleConsole("🚀 ~ Splass.js:22 ~ createRefreshToken ~ error:", "createRefreshToken", error)

            showToast("error", "Session expired", "Please log in again.");
            UserStorage.clearAll();
            resetAndNavigate("Login");
        }
    }


    const tokenCheck = async () => {
        const token = await UserStorage.getItem("token");
        const refreshToken = await UserStorage.getItem("refreshToken");



        if (!token || token === "null" || !refreshToken || refreshToken === "null") {
            showToast("error", "Session expired", "Please log in again.");
            UserStorage.clearAll();
            resetAndNavigate("Login");
            return;
        }

        try {
            const { exp } = jwtDecode(token);
            const { exp: exp2 } = jwtDecode(refreshToken);
            const currentTime = Math.floor(Date.now() / 1000);


            if (exp2 < currentTime) {
                UserStorage.clearAll();
                showToast("error", "Your session has expired", "Please log in again.");
                resetAndNavigate("Login");
            } else if (exp < currentTime) {
                await createRefreshToken(refreshToken);
            }
            resetAndNavigate("Home");

        } catch (error) {
            UserStorage.clearAll();
            showToast("error", "Invalid session", "Please log in again.");
            resetAndNavigate("Login");
        }
    };


    useEffect(() => {
        const timer = setTimeout(() => {
            tokenCheck()
            // createRefreshToken(refreshToken)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <View style={[styles.container,]}>
            <Image source={require('../../../util/image/global.png')} style={styles.splassImage}></Image>
            <Text style={styles.splassText}>{"Attendance"}</Text>
        </View>
    )
}

export default Splass

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AllColor.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    splassImage: {
        width: width * 0.8,
        height: width * 0.8,
        resizeMode: 'contain'
    },
    splassText: {
        fontWeight: "900",
        fontSize: scale(30)
    }
})