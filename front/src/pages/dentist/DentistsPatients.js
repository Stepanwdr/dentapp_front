import React, {Component} from "react";
import DentistWrapper from "../../components/dentist_dashboard/DentistWrapper";
import "antd/dist/antd.css";
import PatientsTable from "../../components/tables/PatientsTable";
import DentisHeader from "../../components/dentist_dashboard/DentistHeader";
class Patients extends Component {
    constructor(props) {
        super(props);
       this.state = {
         
        };
    }

    render() {
        console.log(this.props)
        return (
            <DentistWrapper >
<div className="content ml">
<DentisHeader/>
    <div className="appointments__manage">
        <div className=" appointments__manage__btns">
            <div className="appointments__manage__btn">
                <div className="icon">
                    <i className="fas fa-plus-circle"></i>
                </div>
                <p>Add patient</p>
                <i className="fas fa-hospital-user"></i>
            </div>
            <div className="appointments__manage__btn">
                <div className="icon">
                    <i className="fas fa-plus-circle"></i>
                </div>
                <p>Add appointment</p>
                <i className="fas fa-calendar-plus"></i>
            </div>
            <div className="appointments__manage__btn">
                <div className="icon">
                    <i className="fas fa-plus-circle"></i>
                </div>
                <p>Add payment</p>
                <i className="fas  fa-money-bill-alt"></i>
            </div>
        </div>
        <div className="table_container">

           <PatientsTable/>
        </div>

    </div>
</div>
            </DentistWrapper >
        );
    }
}

export default Patients;


