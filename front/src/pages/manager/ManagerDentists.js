import React, {Component} from "react";
import ManagerWrapper from "../../components/manager_dashboard/ManagerWrapper";
import {connect} from "react-redux";
import DentistsTable from "../../components/tables/DentistsTable"
import {addDentistToggleModal, getDentistByClinic} from "../../store/actions/Dentists";
import {addPatientToggleModal} from "../../store/actions/Patients";
import ManagerHeader from "../../components/manager_dashboard/ManagerHeader";
class ManagerDentists extends Component {
    constructor(props) {
        super(props);
    }
 
componentDidMount() {
        this.props.getDentistByClinic()
}
    render() {

        const{addDentistModalShow}=this.props
        return (
            <ManagerWrapper>
                <div className="content ml">
                    <ManagerHeader/>
                    <div className="appointments__manage">
                        <div className=" appointments__manage__btns manage_btns">
                        <div className="appointments__manage__btn" onClick={()=>this.props.addDentistToggleModal(addDentistModalShow)}>
                                <div className="icon">
                                <i className="fas fa-plus-circle"></i>
                                </div>
                                <p>Add Dentist</p>
                                <i className="fas fa-user-md"></i>
                            </div>
                            </div>
                            <div className="table_container">
                            <DentistsTable dentists={this.props.alldentists}/>
                            </div>
                            </div>

                
            </div>
           
            </ManagerWrapper>
        );
    }
}


const mapStateToProps=(state)=>({
    addDentistModalShow:state.Dentists.addDentistModalShow,
    alldentists:state.Dentists.alldentists
});
const mapDispatchToProps={

    addDentistToggleModal,
    addPatientToggleModal,
    getDentistByClinic,

};
const Container=connect(
    mapStateToProps,
    mapDispatchToProps
)(ManagerDentists);

export default Container;

