import React, {Component} from 'react';
import {connect} from "react-redux";
import {Table} from "react-bootstrap";
import {Link ,withRouter} from 'react-router-dom';
import _ from "lodash";
import {EditOutlined, DeleteOutlined, EyeOutlined} from "@ant-design/icons";
import {Popconfirm} from 'antd';
import {
    infoClinicToggleModal,
    editClinicToggleModal,
    deleteSingleClinic, 
    getClinics
} from "../../store/actions/manager/Clinics"
class AdminsTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
        
        }
    }
    componentDidMount(){
        const clinics=this.props.getClinics()
    console.log(clinics)
    }
    render() {
    

        const {infoClinicModalShow, editClinicModalShow, clinicData,getClinics} = this.props
console.log("Clinic Table");

        return (
            <>

<div className="clinic_table_cont">
                 <div className="clinic_table-header">
                <h4>Admins Table</h4>
            </div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Admin Name</th>
                        <th>Admin Surname</th>
                        <th>Clinic</th>
                        <th>Phone</th>
                        <th>Speciality</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Anna</td>
                            <td>Gevorgyan</td>
                            <td>Dental Clinic</td>
                            <td>098747472</td>
                            <td>Administrator</td>
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
                </div>
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
)( AdminsTable)

export default withRouter(Container);