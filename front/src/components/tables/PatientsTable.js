import React, {Component} from 'react';
import {connect} from "react-redux";
import {Table} from "react-bootstrap";
import {Link,withRouter} from 'react-router-dom';
import _ from "lodash";
import PatentSearch from '../tables/PatientsSearch'
import {EditOutlined, DeleteOutlined, EyeOutlined} from "@ant-design/icons";
import {Popconfirm} from 'antd';
/*import {
    infoPatientToggleModal,
    editPatientToggleModal,
    deleteSinglePatient, 
    getPatients
} from "../../store/actions/manager/Patients"*/
class PatientsTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sort: "asc",//desc
            sortField: 'id'
        }
    }
     /*
    editPatient = (editPatientModalShow, Patient) => {
        this.props.editPatientToggleModal(editPatientModalShow, Patient)
    }
*/

    render() {
        /*const {infoPatientModalShow, editPatientModalShow, PatientData,getPatients} = this.props*/
console.log("Patient Table");
        return (
            <>
              <div className="clinic_table_cont">
                 <div className="clinic_table-header">
                <h4>Patients Table</h4>
            </div>
           <PatentSearch/>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Phone</th>
                        <th>Dentist</th>
                        <th>Last visit</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr onClick={()=>{this.props.history.push(`/dentist/${5}/patients/patient/${5}/history`)}}>
                            <td> 1</td>
                            <td>Poxos</td>
                            <td>Poxosyan</td>
                            <td> 094787878</td>  
                            <td>Petros Petrosyan</td>        
                            <td>05.07.2021</td>
                            <td className="actions_btns">
                                <EyeOutlined className="view_btn"
                                             onClick={() => this.props.infoPatientToggleModal()}/>
                                <EditOutlined className="edit_btn"
                                              onClick={() => this.editPatient()}/>
                                <Popconfirm title="Sure to delete?"
                                            onConfirm={() => this.props.deleteSinglePatient()}>
                                    <DeleteOutlined className="delete_btn"/>
                                </Popconfirm>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    infoPatientModalShow: state.Patients.infoPatientModalShow,
    PatientData:state.Patients.PatientData,
    formData:state.Patients.formData
})

const mapDispatchToProps = {
    /*infoPatientToggleModal,
    editPatientToggleModal,
    deleteSinglePatient,
    getPatients*/
}
const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(PatientsTable)

export default withRouter(Container);