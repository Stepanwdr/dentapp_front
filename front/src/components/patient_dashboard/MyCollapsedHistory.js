import React, {Component} from "react";
import  {addPaymentsModal} from '../../store/actions/Payments';
import AddPaymentsModalForm from "../modals/add-payments-modal_form";
import {patientToothChartModal} from "../../store/actions/PatientToothChart"
import SelectNotesForPayment from "../modals/select_notes_for_payment_modal_form";
import {Accordion} from "react-bootstrap"; 
import ToothChartNotesTable from "../tables/ToothChartNotesTable";
import {connect} from "react-redux";
import PatientToothChart from "../modals/patient-tooth-chart-modal"
import PaymentsTable from "../tables/PaymentsTable";
import PatientHistoryInfoForm from "./PatientHistoryInfoForm";
class MyCollapsedHistory extends Component {
    constructor(props) {
        super(props);
        }
    render() {
const{addPaymentsModalShow=false,patientToothChartModalShow}=this.props
                return (
                  <div className="clinic_table_cont">
                  <div className="clinic_table-header">
                    <h4>
                      History
                      </h4>
                      </div>
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
                  
            </div>
                     <div>
                      
                      <PaymentsTable/>
                      <AddPaymentsModalForm/>
                      <SelectNotesForPayment/>
                     </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                </div>
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
)(MyCollapsedHistory);
export default Container;





