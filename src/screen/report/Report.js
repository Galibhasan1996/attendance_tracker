import { ActivityIndicator, StyleSheet, Text, View, } from 'react-native'
import React, { useState, useCallback } from 'react'
import AllColor, { width } from '../../util/color/Color'
import DateSlider from '../../component/DateSlider/DateSlider'
import moment from 'moment'
import { styleConsole } from '../../util/Helper/Helper'
import { useAuth } from '../../hooks/Auth/useAuth'
import { useFocusEffect } from '@react-navigation/native'
import { scale } from 'react-native-size-matters'

const Report = () => {

    const { report, loading, reportByMonth } = useAuth()


    const [curentDate, setcurentDate] = useState(moment());
    const [data, setdata] = useState("");
    const [dates, setdates] = useState([]);
    // styleConsole("🚀 ~ Report.js:19 ~ Report ~ dates:", "Report", dates)

    // styleConsole("🚀 ~ Report.js:10 ~ Report ~ curentDate:", "curentDate", data.report)

    // --------go to next day-----------
    const goToNextMonth = () => {
        const nextDate = moment(curentDate).add(1, 'months');
        setcurentDate(nextDate);
    }

    // --------go to next day-----------
    const goToPreviousMonth = () => {
        const previousDate = moment(curentDate).subtract(1, 'months');
        setcurentDate(previousDate);
    }
    // -----------format date ---------------
    const formatDate = (date) => {
        return date.format('MMMM, YYYY');
    }



    const getReportByMonth = async () => {
        try {
            const response = await reportByMonth(curentDate.month());
            // styleConsole("🚀 ~ Report.js:41 ~ getReportByMonth ~ response:", "getReportByMonth", response)
            if (response) {
                setdates(response);
            }

        } catch (error) {
            console.log("🚀 ~ Report.js:44 ~ getReport ~ error:", error)
        }
    };

    useFocusEffect(
        useCallback(() => {
            const abortController = new AbortController();

            const getReport = async () => {
                try {
                    const response = await report(curentDate.month(), curentDate.year());
                    // styleConsole("🚀 ~ Report.js:42 ~ getReport ~ response:", "getReport", response)
                    if (response) {
                        setdata(response);
                    }

                } catch (error) {
                    console.log("🚀 ~ Report.js:44 ~ getReport ~ error:", error)
                }
            };

            getReport();
            getReportByMonth()
            return () => {
                abortController.abort();
            };
        }, [curentDate])
    );





    return (
        <View style={styles.container}>
            {/* ----------------slider-------------------- */}
            <DateSlider
                onpLeftPress={() => {
                    goToPreviousMonth()
                }}
                onpRightPress={() => {
                    goToNextMonth()
                }}
                date={formatDate(curentDate)}
            ></DateSlider>
            {/* ---------------report---------------------- */}
            <>
                {
                    loading === false ? (
                        Array.isArray(data.report) && data.report.length > 0 ? (
                            data.report.map((item, index) => (
                                // -------------main card-----------------
                                <View key={index} style={styles.card}>
                                    <View style={{ flexDirection: "row", alignItems: "center", width: "100%", }}>
                                        {/* ------------first char-------------------- */}
                                        <View style={styles.firstChar}>
                                            <Text style={{ color: AllColor.black, fontWeight: "900", fontSize: scale(20) }}>{item.name.charAt(0).toUpperCase()}</Text>
                                        </View>

                                        <View>
                                            <Text style={{ color: AllColor.black, fontWeight: "900", fontSize: scale(16) }}>{item.name.toUpperCase()}</Text>
                                            <View style={{ flexDirection: "row", alignItems: 'center', }}>
                                                <Text style={{ color: AllColor.gray1, marginRight: scale(5) }}>{item.designation.toUpperCase()}</Text>
                                                <Text style={{ color: AllColor.gray1 }}>{`( ${item.employeeId} )`}</Text>
                                            </View>
                                        </View>

                                    </View>

                                    {/* ----------------report content---------------- */}


                                    <View style={{ width: "100%", backgroundColor: AllColor.white, marginVertical: scale(10), paddingVertical: scale(10), borderRadius: scale(10), elevation: scale(5) }}>
                                        <View style={{ flexDirection: "row", width: "100%", alignItems: 'center', justifyContent: 'space-around', borderBottomWidth: scale(1), borderBottomColor: AllColor.gray2, paddingVertical: scale(10) }}>
                                            <Text>{"P"}</Text>
                                            <View style={{ height: "100%", width: scale(1), backgroundColor: AllColor.gray1, }}></View>
                                            <Text>{"A"}</Text>
                                            <View style={{ height: "100%", width: scale(1), backgroundColor: AllColor.gray1, }}></View>
                                            <Text>{"HD"}</Text>
                                            <View style={{ height: "100%", width: scale(1), backgroundColor: AllColor.gray1, }}></View>
                                            <Text>{"H"}</Text>
                                            <View style={{ height: "100%", width: scale(1), backgroundColor: AllColor.gray1, }}></View>
                                            <Text>{"NW"}</Text>
                                            <View style={{ height: "100%", width: scale(1), backgroundColor: AllColor.gray1, }}></View>
                                        </View>
                                        <View style={{ flexDirection: "row", width: "100%", alignItems: 'center', justifyContent: 'space-around', paddingVertical: scale(10) }}>
                                            <Text style={{ color: AllColor.black }}>{item.present}</Text>
                                            <View style={{ height: "100%", width: scale(1), backgroundColor: AllColor.gray1, }}></View>
                                            <Text style={{ color: AllColor.black }}>{item.absent}</Text>
                                            <View style={{ height: "100%", width: scale(1), backgroundColor: AllColor.gray1, }}></View>
                                            <Text style={{ color: AllColor.black }}>{item.halfday}</Text>
                                            <View style={{ height: "100%", width: scale(1), backgroundColor: AllColor.gray1, }}></View>
                                            <Text style={{ color: AllColor.black }}>{item.holiday}</Text>
                                            <View style={{ height: "100%", width: scale(1), backgroundColor: AllColor.gray1, }}></View>
                                            <Text style={{ color: AllColor.black }}>{1}</Text>
                                            <View style={{ height: "100%", width: scale(1), backgroundColor: AllColor.gray1, }}></View>
                                        </View>

                                    </View>


                                </View>

                            ))
                        ) : (
                            <Text style={{ color: AllColor.gray, textAlign: 'center', marginTop: 20 }}>
                                No data available for this month.
                            </Text>
                        )
                    ) :
                        (
                            <View>
                                <ActivityIndicator size="large" color={AllColor.black}></ActivityIndicator>
                            </View>
                        )
                }

            </>



            {
                Array.isArray(dates.report) && data.report.length > 0 && dates?.report.map((item, index) => {
                    return (
                        <View key={index}>
                            <Text>{new Date(item._id).getDate()}</Text>
                        </View>
                    )
                })
            }

        </View >
    )
}

export default Report

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AllColor.white
    },
    card: {
        width: width,
        paddingVertical: scale(10),
        paddingHorizontal: scale(10),
    },
    firstChar: {
        width: scale(40),
        height: scale(40),
        borderRadius: scale(20),
        backgroundColor: AllColor.white,
        justifyContent: "center",
        alignItems: "center",
        marginRight: scale(10),
        elevation: scale(5)
    }
})


// import React, { useState } from 'react';
// import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
// import { styleConsole } from '../../util/Helper/Helper';


// const generateDates = (month = 'May', days = 31) => {
//     return Array.from({ length: days }, (_, i) => {
//         const day = String(i + 1).padStart(2, '0');
//         return `${day} ${month}`;
//     });
// };



// const students = ['Alice', 'Bob', 'Charlie', 'David'];
// const dates = generateDates();

// export default function AttendanceTable() {
//     const [attendance, setAttendance] = useState(students.map(() => dates.map(() => false)));
//     styleConsole("🚀 ~ Report.js:200 ~ AttendanceTable ~ attendance:", "AttendanceTable", attendance)


//     const toggleAttendance = (studentIndex, dateIndex) => {
//         const updated = [...attendance];
//         updated[studentIndex][dateIndex] = !updated[studentIndex][dateIndex];
//         setAttendance(updated);
//     };

//     return (
//         <View style={styles.container}>
//             {/* Horizontal Scroll for Dates */}
//             <ScrollView horizontal>
//                 <View>
//                     {/* Header Row */}
//                     <View style={styles.row}>
//                         <View style={styles.nameCell}>
//                             <Text style={styles.headerText}>Name</Text>
//                         </View>
//                         {
//                             dates.map((date, idx) => (
//                                 <View style={styles.cell} key={idx}>
//                                     <Text style={styles.headerText}>{date}</Text>
//                                 </View>
//                             ))
//                         }
//                     </View>

//                     {/* Data Rows */}
//                     {
//                         students.map((student, studentIdx) => (
//                             <View style={styles.row} key={studentIdx}>
//                                 <View style={styles.nameCell}>
//                                     <Text style={styles.nameText}>{student}</Text>
//                                 </View>
//                                 {
//                                     dates.map((_, dateIdx) => (
//                                         <TouchableOpacity key={dateIdx} style={[styles.cell, attendance[studentIdx][dateIdx] ? styles.present : styles.absent,]}
//                                             onPress={() => toggleAttendance(studentIdx, dateIdx)}
//                                         >
//                                             <Text style={styles.cellText}>
//                                                 {attendance[studentIdx][dateIdx] ? '✔' : '✘'}
//                                             </Text>
//                                         </TouchableOpacity>
//                                     ))
//                                 }
//                             </View>
//                         ))
//                     }
//                 </View>
//             </ScrollView>
//         </View>
//     );
// }

// const cellSize = 80;

// const styles = StyleSheet.create({
//     container: {
//         padding: 10,
//         marginTop: 40,
//     },
//     row: {
//         flexDirection: 'row',
//     },
//     nameCell: {
//         width: cellSize,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderWidth: 1,
//         backgroundColor: '#e6f0ff',
//     },
//     cell: {
//         width: cellSize,
//         height: 40,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderWidth: 1,
//     },
//     present: {
//         backgroundColor: '#ccffcc',
//     },
//     absent: {
//         backgroundColor: '#ffcccc',
//     },
//     headerText: {
//         fontWeight: 'bold',
//     },
//     nameText: {
//         fontSize: 14,
//     },
//     cellText: {
//         fontSize: 18,
//     },
// });
