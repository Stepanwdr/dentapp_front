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
import DentistSearch from "./DentistSearch"
class ClinicTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
        
        }
    }


    render() {
        const{dentists}=this.props
console.log("Clinic Table");

        return (
            <>
       

       
       <div className="clinic_table_cont">
                 <div className="clinic_table-header">
                <h4>Dentist Table</h4>
                </div>
            </div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Dentist Name<DentistSearch searchFilled={'dentistName'}/></th>
                        <th>Dentist Surname<DentistSearch searchFilled={'dentistName'}/></th>
                        <th>Clinic<DentistSearch  searchFilled={'clinic'}/></th>
                        <th>Phone<DentistSearch searchFilled={'phone'}/></th>
                        <th>Speciality<DentistSearch searchFilled={'speciality'}/></th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {_.map(dentists,dentist=>(
                        <tr>
                            <td>{dentist.id}</td>
                            <td>{dentist.name}</td>
                            <td>{dentist.fname}</td>
                           <td>{dentist.clinic.name}</td>
                            <td>{dentist.phone}</td>
                            <td>{dentist.speciality}</td>
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
                    ))}
                    </tbody>
                </Table>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    infoClinicModalShow: state.Clinics.infoClinicModalShow,
})

const mapDispatchToProps = {

}
const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(ClinicTable)

export default withRouter(Container);