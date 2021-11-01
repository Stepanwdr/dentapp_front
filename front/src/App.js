import React, {Component} from "react";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import ManagerDashboard from "./pages/manager/ManagerDashboard";
import ManagerClinics from "./pages/manager/ManagerClinics";
import ManagerAdmins from "./pages/manager/ManagerAdmins";
import ManagerDentists from "./pages/manager/ManagerDentists";
import ManagerPatients from "./pages/manager/ManagerPatients";

import AdminDashboard from "./pages/administrator/AdminDashboard";
import AdminDentists from "./pages/administrator/AdminDentists";
import AdminPatients from "./pages/administrator/AdminPatients";
import AdminPatientHistory from "./pages/administrator/AdminPatientHistory";
import DentistDashboard from "./pages/dentist/DentistDashboard";
import DentistPatients from "./pages/dentist/DentistsPatients";
import DentistPatientHistory from "./pages/dentist/DentistPatientHistory";
import DentistAppointments from "./pages/dentist/DentistAppointments";
import PatientDashboard from "./pages/patient/PatientDashboard";
import PatientHistory from "./pages/patient/PatientHistory";
import PatientAppointments from "./pages/patient/PatientAppointments";
import Auth from "./pages/Auth";
import PatientClinics from "./pages/patient/PatientClinics";
import DentistSettings from "./pages/dentist/DentistSettings";
import PatientDentists from "./pages/patient/PatientDentists";




class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const role='manager'

        console.log(this.props)
        console.log(this.props,1111111111)
const {patientId=5,dentistId=5}=this.props
        return (
            <div>
                <Switch>

                       <Route path={`/manager`} exact component={ManagerDashboard} />
                       <Route path={"/manager/clinics"} exact component={ManagerClinics} />
                       <Route path={"/manager/clinics/:clinicId/edit"} exact component={ManagerClinics} />
                       <Route path={"/manager/admins"} exact component={ManagerAdmins}/>
                       <Route path={"/manager/admins/:adminId/edit"} exact component={ManagerAdmins}/>
                       <Route path={"/manager/dentists"} exact component={ManagerDentists} />
                       <Route path={"/manager/dentists/:dentistId/edit"} exact component={ManagerDentists} />
                       <Route path={"/manager/patients"} exact component={ManagerPatients} />
                       <Route path={"/manager/patients/:patientId/edit"} exact component={ManagerPatients} />

        
                    <Route path={"/admin"} exact component={AdminDashboard} />
                    <Route path={"/admin/dentists"} exact component={AdminDentists} />
                    <Route path={`/admin/dentists/:${dentistId}/edit`} exact component={AdminDentists}/>
                    <Route path={`/admin/dentists/:${dentistId}/patients/patient/:${patientId}`} exact component={AdminPatients} />
                    <Route path={`/admin/dentists/:${dentistId}/patients/patient/:${patientId}/history`}  exact component={AdminPatientHistory} />

                    <Route path={"/dentist"} exact component={DentistDashboard} />
                    <Route path={"/dentist/patients"} exact component={DentistPatients} />
                    <Route path={`/dentist/:${dentistId}/patients/patient/:${patientId}/history`} exact component={DentistPatientHistory} />
                    <Route path={"/dentist/appointments"} exact component={DentistAppointments} />
                    <Route path={"/dentist/settings"} exact component={DentistSettings} />

                    <Route path={"/patient"} exact component={PatientDashboard} />
                    <Route path={"/patient/history"} exact component={PatientHistory} />
                    <Route path={"/patient/clinics"} exact component={PatientClinics} />
                    <Route path={"/patient/dentists"} exact component={PatientDentists} />
                    <Route path={"/patient/appointments"} exact component={PatientAppointments} />
                    <Route path={"/"} exact component={Auth}/>
                    <Redirect to={"/"}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);