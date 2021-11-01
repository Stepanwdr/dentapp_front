import {combineReducers} from "redux";
import Patients from "./Patients";
import Clinics from "./manager/Clinics";
import Dentists from "./Dentists";
import Payments from "./Payments";
import Administrators from "./manager/Administrators";
import PatientToothChart from "./PatientToothChart";
import AllUsers from "./AllUsers"
import Appointments from "./Appointments"

export default combineReducers(
    {
        Patients,
        Clinics,
        Dentists,
        Administrators,
        PatientToothChart,
        Payments,
        AllUsers,
        Appointments
    }
);