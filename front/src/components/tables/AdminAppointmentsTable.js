import React, {Component} from 'react';
import {connect} from "react-redux";
import {Table,Form} from "react-bootstrap";
import {Link,withRouter} from 'react-router-dom';
import _ from "lodash";
import {EditOutlined, DeleteOutlined, EyeOutlined} from "@ant-design/icons";
import {Popconfirm,DatePicker,Select} from 'antd';
const { RangePicker } = DatePicker;
import {
    infoClinicToggleModal,
    editClinicToggleModal,
    deleteSingleClinic, 
    getClinics
} from "../../store/actions/manager/Clinics"
const rangeConfig = {
    rules: [
        {
            type: 'array',
            required: true,
            message: 'Please select time!',
        },
    ],
};

import ClinicSearch from "./ClinicSearch"
class AdminAppointmentsTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
        
         
        }
    }
 
onFinish = (fieldsValue) => {
        // Should format date value before submit.
        const rangeValue = fieldsValue['range-picker'];
        const rangeTimeValue = fieldsValue['range-time-picker'];
        const values = {
            ...fieldsValue,
            'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
            'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
            'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
           
        };
        console.log('Received values of form: ', values);
    };

    render(){
        
        const {infoClinicModalShow, editClinicModalShow, clinicData,getClinics} = this.props
          console.log("Clinic Table");
        return (
            <>
                
                        <div className="tab__header">
                <h3>Appointments Table</h3>
                <p>View all Appointments <Link to="/manager/clinics"><i className="fas fa-clinic-medical"></i></Link></p>
            </div>
            <div className="appoinnment_table-header">

<Form.Select size="lg" onValueChange={console.log('dsdsd')}>
<option>Switch Dentist Data</option>
</Form.Select>
<i className="fas fa-filter filter_icon"></i>
</div>
                            <Table striped bordered hover>
                    <thead>
                    <tr>
                         <th>No</th>
                         <th>Dentist</th>
                        <th>Patient</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Notes</th>
                        <th>Appointment</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                        <tr >
                            <td>1</td>
                            <td>Poxox Poxosyan</td>
                            <td>Petros Petrosyan</td>
                            <td>10/02/2021</td>
                            <td>Pending</td>
                            <td>Some Notes here</td>
                            <td>Consulting</td>
                            <td className="actions_btns">
                                <EyeOutlined className="view_btn"
                                             onClick={''}/>
                                <EditOutlined className="edit_btn"
                                              onClick={''}/>
                                <Popconfirm title="Sure to delete?"
                                            onConfirm={''}>
                                    <DeleteOutlined className="delete_btn"/>
                                </Popconfirm>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    infoClinicModalShow: state.Clinics.infoClinicModalShow,
    clinicData:state.Clinics.clinicData,
    formData:state.Clinics.formData
})

const mapDispatchToProps = {
    infoClinicToggleModal,
    editClinicToggleModal,
    deleteSingleClinic,
    getClinics
}
const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminAppointmentsTable)

export default withRouter(Container);