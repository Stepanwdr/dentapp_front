import React, {Component} from "react";
import ManagerWrapper from "../../components/manager_dashboard/ManagerWrapper";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import ClinicTable from "../../components/tables/ClinicTable"
import {addClinicToggleModal,getClinics} from "../../store/actions/manager/Clinics";
import {addAdminToggleModal} from "../../store/actions/manager/Administrators";
import {addDentistToggleModal} from "../../store/actions/Dentists";
import {addPatientToggleModal} from "../../store/actions/Patients";
import ClinicSearch from "../../components/tables/ClinicSearch";
import ManagerHeader from "../../components/manager_dashboard/ManagerHeader";
import {getAllUsers} from "../../store/actions/manager/AllClinicUsers";

class ManagerClinics extends Component {
    constructor(props) {
        super(props);
    }

 
  componentDidMount(){
      console.log("manager clinic DidMount ")

  }
  
    render() {

        const{addClinicModalShow}=this.props
        return (
            <ManagerWrapper>
                <div className="content ml">
                    <ManagerHeader/>
                    <div className="appointments__manage">
                        <div className=" appointments__manage__btns manage_btns">
                            <div className="appointments__manage__btn " onClick={()=>this.props.addClinicToggleModal(addClinicModalShow)}>
                                <div className="icon">
                                    <i className="fas fa-plus-circle"></i>
                                </div>
                                <p>Add Clinic</p>
                                <i className="fas fa-hospital-user"></i>
                            </div>
                            </div>
                            <div className="table_container">
                            <ClinicTable/> 
                            </div>
                            </div>

                
            </div>
           
            </ManagerWrapper>
        );
    }
}


const mapStateToProps=(state)=>({
    addClinicModalShow:state.Clinics.addClinicModalShow,
});
const mapDispatchToProps={
    addClinicToggleModal,
    addAdminToggleModal,
    addDentistToggleModal,
    addPatientToggleModal,
    getAllUsers
};
const Container=connect(
    mapStateToProps,
    mapDispatchToProps
)(ManagerClinics);

export default Container;
