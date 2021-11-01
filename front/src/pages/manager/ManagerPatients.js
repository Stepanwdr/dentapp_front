import React, {Component} from "react";
import ManagerWrapper from '../../components/manager_dashboard/ManagerWrapper';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PatientsTable from "../../components/tables/PatientsTable";
import {addDentistToggleModal} from "../../store/actions/Dentists";
import {addPatientToggleModal} from "../../store/actions/Patients";
import ManagerHeader from "../../components/manager_dashboard/ManagerHeader";

class ManagerPatienst extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const{addPatientModalShow}=this.props
        return (
            <ManagerWrapper>
               <div className="content ml">
                    <ManagerHeader/>
                    <div className="appointments__manage">
                        <div className=" appointments__manage__btns manage_btns">
                            <div className="appointments__manage__btn" onClick={()=>this.props.addPatientToggleModal(addPatientModalShow)}>
                                <div className="icon">
                                    <i className="fas fa-plus-circle"></i>
                                </div>
                                <p>Add Patient</p>
                                <i className="fas  fa-user-alt"></i>
                            </div>
                            </div>
                            <div className='table_container'>
                    <PatientsTable/>
                    </div>
                            </div>
                            </div>
                </ManagerWrapper>
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
)(ManagerPatienst);

export default Container;
