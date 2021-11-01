import React, {Component} from "react";
import  {addPaymentsModal} from '../store/actions/Payments';
import AddPaymentsModalForm from "./modals/add-payments-modal_form";
import {patientToothChartModal} from "../store/actions/PatientToothChart"
import SelectNotesForPayment from "./modals/select_notes_for_payment_modal_form";
import {Accordion,Row,Col} from "react-bootstrap";
import ToothChartNotesTable from "./tables/ToothChartNotesTable";
import {connect} from "react-redux";
import PatientToothChart from "./modals/patient-tooth-chart-modal"
import PaymentsTable from "./tables/PaymentsTable";
import PatientHistoryInfoForm from "./patient_dashboard/PatientHistoryInfoForm";
class PatientCollapsedHistory extends Component {
    constructor(props) {
        super(props);
        }
    render() {
const{addPaymentsModalShow=false,patientToothChartModalShow}=this.props
                return (
                  <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                  <Accordion.Header>
                  <div className="accordion-header-left">
                      <h5><i className="fas fa-info"></i> Patient Informaton</h5>
                        </div>
                    
                    </Accordion.Header>

                    <Accordion.Body>
            <div className="accardion_body_header">

            </div>
                        <PatientHistoryInfoForm/>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                    <div className="accordion-header-left">
                      <h5><i className="fas fa-notes-medical"></i> Tooth Notes</h5>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                    <div className="accardion_body_header">
                  
                     <button className="history_add_btn" onClick={()=>this.props.patientToothChartModal(!patientToothChartModalShow)}>+ Add Tooth Notes</button>
            </div>
                     <div>
                       <ToothChartNotesTable/>
                       <PatientToothChart/>
                     </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                    <div className="accordion-header-left">
                      <h5><i className="fas fa-file-invoice-dollar"> </i> Payments </h5>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                    <div className="accardion_body_header">
                  
                     <button className="history_add_btn" onClick={()=>this.props.addPaymentsModal(!addPaymentsModalShow)}>+ Add Payments</button>
            </div>
                     <div>
                      
                      <PaymentsTable/>
                      <AddPaymentsModalForm/>
                      <SelectNotesForPayment/>
                     </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                )
    }
}


const mapStateToProps=(state)=>({
  addToothsNotesModalShow:state.PatientToothChart.addToothsNotesModalShow,
  addPaymentsModalShow:state.Payments.addPaymentsModalShow

});

const mapDispatchToProps={
  addPaymentsModal,
    patientToothChartModal
};
const Container=connect(
    mapStateToProps,
    mapDispatchToProps
)(PatientCollapsedHistory);
export default Container;





