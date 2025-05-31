import Login from "../../screen/auth/login/Login";
import Signup from "../../screen/auth/signup/Signup";
import Splass from "../../screen/auth/splass/Splass";
import EmployeeList from "../../screen/employeeList/EmployeeList";
import Home from "../../screen/home/Home";
import Report from "../../screen/report/Report";

export const AllScreen = [
    {
        name: "Splass",
        component: Splass
    },
    {
        name: "Home",
        component: Home
    },
    {
        name: "Login",
        component: Login
    },
    {
        name: "Signup",
        component: Signup
    },
    {
        name: "employeeList",
        component: EmployeeList
    }, {
        name: "Report",
        component: Report
    }
]