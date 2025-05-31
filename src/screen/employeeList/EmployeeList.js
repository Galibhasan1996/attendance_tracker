import { StyleSheet, View, } from 'react-native'
import React, { useState, useCallback } from 'react'
import AllColor from '../../util/color/Color'
import { UserStorage } from '../../store/Store'
import { useFocusEffect } from '@react-navigation/native'
import { useAuth } from '../../hooks/Auth/useAuth'
import { styleConsole } from '../../util/Helper/Helper'
import UserListl from '../../component/UserList/UserListl'

const EmployeeList = () => {

    const token = UserStorage.getItem("token")
    const { userList, loading } = useAuth()
    const [data, setdata] = useState([]);
    // styleConsole("🚀 ~ employeeList.js:13 ~ EmployeeList ~ data:", "EmployeeList", data)

    const list = async () => {
        try {
            const res = await userList(token)
            // console.log("🚀 ~ employeeList.js:18 ~ list ~ res:", res)
            if (res) {
                setdata(res)
            }

        } catch (error) {
            console.log("🚀 ~ employeeList.js:26 ~ list ~ error:", error)
        }
    }

    useFocusEffect(
        useCallback(() => {
            list()
        }, [token])
    )

    return (
        <View style={styles.container}>
            <UserListl data={data}></UserListl>
        </View>
    )
}

export default EmployeeList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AllColor.white
    }
})