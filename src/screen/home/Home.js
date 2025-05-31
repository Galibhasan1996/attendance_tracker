import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import BasicHeader from '../../component/BasicHeader/BasicHeader';
import { showToast, styleConsole } from '../../util/Helper/Helper';
import { Toptile, middletile, bottomtile } from '../../util/Data/DummyData';
import AllColor, { width } from '../../util/color/Color';
import TopTile from '../../component/topTile/TopTile';
import MiddleTile from '../../component/MiddleTile/MiddleTile';
import BotttomTile from '../../component/BotttomTile/BotttomTile';
import { UserStorage } from '../../store/Store';
import { resetAndNavigate } from '../../navigator/NavigationREF/NavigationRef';


const Home = () => {



    const logOut = () => {
        try {

            UserStorage.clearAll()
            showToast("success", "Logout Successfully", "Logout Successfully")
            resetAndNavigate("Login")

        } catch (error) {
            console.log("🚀 ~ Home.js:19 ~ logOut ~ error:", error)
        }
    }



    return (
        <LinearGradient colors={[AllColor.Cyan1, AllColor.white, AllColor.Androidgreen1]} style={styles.linearGradient}>
            {/* ------------header--------------- */}
            <BasicHeader
                text={"Employee Management System"}
                left={true}
                right={true}
                leftIconCategoryName={"Feather"}
                leftIconName={"bar-chart"}
                rightIconCategoryName={"MaterialCommunityIcons"}
                rightIconName={"logout"}
                onpRightIcon={() => { logOut() }}
            ></BasicHeader>

            <ScrollView>

                {/* ---------------top tile--------------------- */}
                <TopTile data={Toptile}></TopTile>
                {/* -------------middle tile--------------- */}
                <MiddleTile data={middletile}></MiddleTile>
                {/* ------------bottomtile----------- */}
                <BotttomTile data={bottomtile}></BotttomTile>

            </ScrollView>


        </LinearGradient>
    )
}

export default Home


const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: AllColor.white,
        backgroundColor: 'transparent',
    },
    listContainer: {
        width: width,
        backgroundColor: AllColor.Androidgreen4,
        flexDirection: 'row',
        alignItems: 'center',
    },

});