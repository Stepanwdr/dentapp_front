import React, {Component} from "react";
import "antd/dist/antd.css";
import PatientCollapsedHistory from "../../components/PatientCollapsedHistory";
import {connect} from "react-redux";
import AdminWrapper from "../../components/admin_dashboard/AdminWrapper";
class AdminPatientHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        console.log(this.props)
        return (
            <AdminWrapper>
                <div className=" patient_history_container">
                    <div className="appointments__manage">
                        <div className=" tabs appointments__tabs patient_history">
                            <div className="tab__header  patient_history_header">
                                <h3>PATIENT HISTORY FILES</h3>
                            </div>
                            <div className="tab__nav">
                              <PatientCollapsedHistory/>
                            </div>

                        </div>

                    </div>
                </div>
            </AdminWrapper>
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
)(AdminPatientHistory);

export default Container;



