import { useState } from "react";
import { BASE_URL, showToast, styleConsole } from "../../util/Helper/Helper";
import axios from "axios";

export const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const apiRequest = async (method, url, data = {}, headers = {}, multipart = false) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios({
                method, url: `${BASE_URL}${url}`, data,
                headers: {
                    "Content-Type": multipart === true ? "multipart/form-data" : "application/json",
                    ...headers
                },
            });

            return response.data;
        } catch (err) {
            // styleConsole("🚀 ~ useAuth.js:23 ~ apiRequest ~ err:", "apiRequest", err.response.data.errors)
            if (err?.message === "Network Error") {
                showToast("error", err.message, err.message);
            }
            setError(err.message);
            return err.response?.data || { message: "An unexpected error occurred || port is wrong" };
        } finally {
            setLoading(false);
        }
    };

    const Login = (email, password) => apiRequest("POST", `auth/login`, { email, password });
    const Register = (employeeId, name, designation, joiningDate, dateOfBirth, salary, activeEmployee, address, phoneNumber, email, password) => apiRequest("POST", `auth/register`,
        { employeeId, name, designation, joiningDate, dateOfBirth, salary, activeEmployee, address, phoneNumber, email, password });
    const userList = (token = "") => apiRequest("GET", `auth/allUserList`, {}, { Authorization: `Bearer ${token}` });
    const freshToken = (refreshToken = "") => apiRequest("POST", `auth/refreshToken?refreshToken=${refreshToken}`, {},);
    const report = (month = "", year = "") => apiRequest("GET", `attendance/report?month=${month}&year=${year}`, {});
    const reportByMonth = (month = "",) => apiRequest("GET", `attendance/reportByMonth?month=${month}`, {});


    return {
        Login,
        Register,
        userList,
        freshToken,
        reportByMonth,
        report,
        loading,
        error,
    };
};



