import React, {Component} from "react";
import { connect } from "react-redux";
import Wrapper from "../../components/dentist_dashboard/DentistWrapper";
// import patientIcon from "../assets/images/dashboard/patient.png";
import "antd/dist/antd.css";
import DentistWrapper from "../../components/dentist_dashboard/DentistWrapper";
import DentistHeader from "../../components/dentist_dashboard/DentistHeader";
import DentistAppointmentsTable from "../../components/tables/DentistAppointmentsTable";

class DentisAppointments extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <DentistWrapper>
                <div className="content ml">
                    <DentistHeader/>
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
<DentistAppointmentsTable/>
                          </div>
                 
                </div>
                </div>
            </DentistWrapper>
        );
    }
}

const mapStateToProps=(state)=>({

    
});
const mapDispatchToProps={

 
};
const Container=connect(
    mapStateToProps,
    mapDispatchToProps
)(DentisAppointments);

export default Container;




