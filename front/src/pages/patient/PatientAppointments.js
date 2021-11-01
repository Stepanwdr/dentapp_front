import React, {Component} from "react";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import PatientWrapper from "../../components/patient_dashboard/PatientWrapper";
import PatientAppointmentsTable from "../../components/tables/PatientAppoinmentsTable";
import PatientHeader from "../../components/patient_dashboard/PatientHeader";
class PatientAppointments extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <PatientWrapper>
                <div className="content ml">
                    <PatientHeader/>
                    <div className="appointments__manage">
                        <div className=" appointments__manage__btns">
                            <div className="appointments__manage__btn">
                                <div className="icon">
                                    <i className="fas fa-plus-circle"></i>
                                </div>
                                <p>Add appointment</p>
                                <i className="fas fa-calendar-plus"></i>
                            </div>
                        </div>
                      <div className="table_container">
                   <PatientAppointmentsTable/>
                          </div>
                </div>
                </div>
            </PatientWrapper>
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
)(PatientAppointments);

export default Container;




