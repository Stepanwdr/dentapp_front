import React, {Component} from "react";
import AdminWrapper from "../../components/admin_dashboard/AdminWrapper";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {addDentistToggleModal} from "../../store/actions/Dentists";
import {addPatientToggleModal} from "../../store/actions/Patients";
import ClinicTable from "../../components/tables/ClinicTable"
import ClinicSearch from "../../components/tables/ClinicSearch";
import AdminAppointmentsTable from "../../components/tables/AdminAppointmentsTable";
import AdminHeader from "../../components/admin_dashboard/AdminHeader";
class AdminDashboard extends Component {
    constructor(props) {
        super(props);
      
    }
    render() {
        const {addDentistModalShow,addPatientModalShow} = this.props;
        return (
            <AdminWrapper>
                <div className="content ml">
                    <AdminHeader/>
                    <div className="appointments__manage">
                    <div className=" appointments__manage__btns">
                            <div className="appointments__manage__btn" onClick={()=>this.props.addDentistToggleModal(addDentistModalShow)}>
                                <div className="icon">
                                    <i className="fas fa-plus-circle"></i>
                                </div>
                                <p>Add Appointment</p>
                                <i className="fas  fa-user-md"></i>
                            </div>
                            <div className="appointments__manage__btn" onClick={()=>this.props.addPatientToggleModal(addPatientModalShow)}>
                                <div className="icon">
                                    <i className="fas fa-plus-circle"></i>
                                </div>
                                <p>Add Patient</p>
                                <i className="fas  fa-user-alt"></i>
                            </div>
                            <div className="appointments__manage__btn">
                <div className="icon">
                    <i className="fas fa-plus-circle"></i>
                </div>
                <p>Add payment</p>
                <i className="fas  fa-money-bill-alt"></i>
            </div>

                        </div>
                        <div className="tabs table_container">
                 
            <AdminAppointmentsTable/>
                        </div>
                        
                    </div>
                    </div>
      
            </AdminWrapper>
        );
    }
}

const mapStateToProps=(state)=>({
    addDentistModalShow:state.Dentists.addDentistModalShow,
    addPatientModalShow:state.Patients.addPatientModalShow
});
const mapDispatchToProps={
    addDentistToggleModal,
    addPatientToggleModal
};
const Container=connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminDashboard);

export default Container;
