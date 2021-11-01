import React, {Component} from "react";
import AdminWrapper from "../../components/admin_dashboard/AdminWrapper";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import DentistsTable from "../../components/tables/DentistsTable"
import {addDentistToggleModal} from "../../store/actions/Dentists";
import {addPatientToggleModal} from "../../store/actions/Patients";
import AdminHeader from "../../components/admin_dashboard/AdminHeader";
/*import firstDentistAvatar from "../../assets/images/dentist.png";
import secondDentistAvatar from "../../assets/images/dentist.png";
import thirdDentistAvatar from "../../assets/images/dentist.png";
*/
class AdminDentists extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <AdminWrapper>
                <div className="content ml">
                 <AdminHeader/>
                    <div className="tabs table_container dentist_table_cont">
                            <DentistsTable/>
                </div>
                </div>
            </AdminWrapper>
        );
    }
}

const mapStateToProps=(state)=>({

    dentistModalShow:state.Dentists.dentistModalShow,
    patientModalShow:state.Patients.patientModalShow,
    
});
const mapDispatchToProps={

    addDentistToggleModal,
    addPatientToggleModal
};
const Container=connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminDentists);

export default Container;
