import React, {Component} from "react";
import Wrapper from "../../components/manager_dashboard/ManagerWrapper";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {addClinicToggleModal} from "../../store/actions/manager/Clinics";
import {addAdminToggleModal} from "../../store/actions/manager/Administrators";
import {addDentistToggleModal} from "../../store/actions/Dentists";
import {addPatientToggleModal} from "../../store/actions/Patients";
import ClinicTable from "../../components/tables/ClinicTable"
import ClinicSearch from "../../components/tables/ClinicSearch";
import AdminAppointmentsTable from "../../components/tables/AdminAppointmentsTable";
import ManagerWrapper from "../../components/manager_dashboard/ManagerWrapper";
import ManagerHeader from "../../components/manager_dashboard/ManagerHeader";
class ManagerDashboard extends Component {
  
    constructor(props) {
        super(props);
    }
    render() {
        const {addClinicModalShow,addAdminModalShow,addDentistModalShow,addPatientModalShow} = this.props;
        return (
            <ManagerWrapper>
                <div className="content ml">
                <ManagerHeader/>
                    </div>
                    <div className="appointments__manage">
                        <div className=" appointments__manage__btns manage_btns">
                            <div className="appointments__manage__btn " onClick={()=>this.props.addClinicToggleModal(addClinicModalShow)}>
                                <div className="icon">
                                    <i className="fas fa-plus-circle"></i>
                                </div>
                                <p>Add Clinic</p>
                                <i className="fas fa-hospital-user"></i>
                            </div>
                            <div className="appointments__manage__btn" onClick={()=>this.props.addAdminToggleModal(addAdminModalShow)}>
                                <div className="icon">
                                    <i className="fas fa-plus-circle"></i>
                                </div>
                                <p>Add Admin</p>
                                <i className="fas fa-user-nurse"></i>
                            </div>
                            <div className="appointments__manage__btn" onClick={()=>this.props.addDentistToggleModal(addDentistModalShow)}>
                                <div className="icon">
                                    <i className="fas fa-plus-circle"></i>
                                </div>
                                <p>Add Dentist</p>
                                <i className="fas  fa-user-md"></i>
                            </div>
                            <div className="appointments__manage__btn" onClick={()=>this.props.addPatientToggleModal(addPatientModalShow)}>
                                <div className="icon">
                                    <i className="fas fa-plus-circle"></i>
                                </div>
                                <p>Add Patient</p>
                                <i className="fas  fa-user-alt"></i>
                            </div>
                          
                        
               
                        </div>
                        <div className='table_container'>
                        <AdminAppointmentsTable/>   
                        </div>
                           
                        </div>
                        
                    </div>
         
            </ManagerWrapper>
        );
    }
}

const mapStateToProps=(state)=>({
    addClinicModalShow:state.Clinics.addClinicModalShow,
    addAdminModalShow:state.Administrators.addAdminModalShow,
    addDentistModalShow:state.Dentists.addDentistModalShow,
    addPatientModalShow:state.Patients.addPatientModalShow
});
const mapDispatchToProps={
    addClinicToggleModal,
    addAdminToggleModal,
    addDentistToggleModal,
    addPatientToggleModal
};
const Container=connect(
    mapStateToProps,
    mapDispatchToProps
)(ManagerDashboard);

export default Container;
