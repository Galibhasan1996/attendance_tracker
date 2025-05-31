import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import AllColor, { width } from '../../util/color/Color'
import { scale } from 'react-native-size-matters'

const UserListl = ({ data }) => {
    return (
        <View style={styles.container}>
            {
                Array.isArray(data.users) && data.users.length > 0 &&
                data?.users.map((item, index) => {
                    return (
                        <View key={item._id ? item._id : index} style={[styles.listContainer, { marginTop: index === 0 && scale(20) }]}>
                            <View style={styles.insideContainer}>
                                <Text style={styles.firstChar}>{item.name && item.name.charAt(0).toUpperCase()}</Text>
                            </View>

                            <View >
                                <Text style={styles.userName}>{item.name ? item.name.charAt(0).toUpperCase() + item.name.slice(1) : ""}</Text>
                                <Text style={{ color: AllColor.gray1 }}>{item.designation + " " + item.employeeId}</Text>
                            </View>

                        </View>
                    )
                })
            }
        </View>
    )
}

export default UserListl

const styles = StyleSheet.create({
    container: {
        backgroundColor: AllColor.white
    },
    listContainer: {
        width: width,
        backgroundColor: AllColor.white,
        marginVertical: scale(3),
        justifyContent: 'flex-start',
        paddingVertical: scale(10),
        paddingHorizontal: scale(10),
        elevation: scale(5),
        flexDirection: "row",
    },
    insideContainer: {
        width: width * 0.099,
        height: width * 0.099,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AllColor.white,
        borderRadius: scale(50),
        elevation: scale(5),
        marginRight: scale(10)
    },
    firstChar: {
        fontWeight: "900",
        color: AllColor.black,
        fontSize: scale(20)
    },
    userName: {
        fontWeight: "900",
        color: AllColor.black,
        fontSize: scale(15)
    }

})