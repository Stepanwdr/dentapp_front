import React, {Component} from "react";
import AdminWrapper from '../../components/admin_dashboard/AdminWrapper';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PatientsTable from '../../components/tables/PatientsTable';
import {addDentistToggleModal}from '../../store/actions/Dentists';
import {addPatientToggleModal} from '../../store/actions/Patients';
import AdminHeader from "../../components/admin_dashboard/AdminHeader";
class AdminPatients extends Component {
    constructor(props) {
        super(props);
    }
    render() {


        return (
            <AdminWrapper>
                <div className="content ml">
                <AdminHeader/>
                 <PatientsTable/>
                </div>
                </AdminWrapper>
        );
    }
}

const mapStateToProps=(state)=>({
    patientModalShow:state.Patients.patientModalShow,
    
});
const mapDispatchToProps={

    addDentistToggleModal,
    addPatientToggleModal
};
const Container=connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminPatients);

export default Container;
