import React, {Component} from "react";
import ManagerWrapper from "../../components/manager_dashboard/ManagerWrapper";
// import {ReactSVG} from "react-svg";
// import svg from "../../assets/images/Dent.svg";
// import "antd/dist/Linkntd.css";
import {Link} from "react-router-dom";
import AdminsTable from "../../components/tables/AdminsTable"
import {connect} from "react-redux";
import AddAdminModalForm from "../../components/modals/add-admin-modal-form";
import AddClinicModalForm from "../../components/modals/add-clinic-modal-form";
import AddDentistModalForm from "../../components/modals/add-dentist-modal-form";
import {addDentistToggleModal} from "../../store/actions/Dentists";
import {addPatientToggleModal} from "../../store/actions/Patients";
import {addAdminToggleModal} from "../../store/actions/manager/Administrators";
import ManagerHeader from "../../components/manager_dashboard/ManagerHeader";

class ManagerAdmins extends Component {
    constructor(props) {
        super(props);
    }
 
  componentDidMount(){
      console.log("manager clinic DidMount ")
  }
  
    render() {
        const {addAdminModalShow} = this.props;
        return (
            <ManagerWrapper>
                <div className="content ml">
                    <ManagerHeader/>
                    <div className="appointments__manage">
                        <div className=" appointments__manage__btns manage_btns">
                            <div className="appointments__manage__btn " onClick={()=>this.props.addClinicToggleModal(addAdminModalShow)}>
                                <div className="icon">
                                    <i className="fas fa-plus-circle"></i>
                                </div>
                                <p>Add Admin</p>
                                <i className="fas fa-user-nurse"></i>
                            </div>
                            </div>
                            <div className="table_container">
                            <AdminsTable/>
                            </div>
                            </div>

                
            </div>
            <AddClinicModalForm/>
                  <AddAdminModalForm/>
                  <AddDentistModalForm/>
            </ManagerWrapper>
        );
    }
}


const mapStateToProps=(state)=>({
   
    
    addDentistModalShow:state.Dentists.addDentistModalShow,
    addPatientModalShow:state.Patients.addPatientModalShow,
    addAdminModalShow:state.Administrators.addAdminModalShow
});

const mapDispatchToProps={
    addDentistToggleModal,
    addPatientToggleModal,
    addAdminToggleModal,
};
const Container=connect(
    mapStateToProps,
    mapDispatchToProps
)(ManagerAdmins);

export default Container;

