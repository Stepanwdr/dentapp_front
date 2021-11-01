import React,{Component}  from 'react';
import {Table} from "react-bootstrap";
import {Link,withRouter} from 'react-router-dom';
import _ from "lodash";
import {EditOutlined, DeleteOutlined, EyeOutlined} from "@ant-design/icons";
import {Popconfirm} from 'antd';
import {connect}from "react-redux"; 
import {
    infoClinicToggleModal,
    editClinicToggleModal,
    deleteSingleClinic, 
    getClinics
} from "../../store/actions/manager/Clinics"
import ClinicSearch from "./ClinicSearch"

class ClinicTable extends Component{
    constructor(props) {
        super(props)
        this.state = {
        
        }
    }
    componentDidMount(){
        const{status}=this.props
        console.log(status,"clinic Table didMount")
        this.props.getClinics()
    }
   
    render(){
        const {status,infoClinicModalShow, editClinicModalShow,allclinics}=this.props

                    return (
            <>
                 <div className="clinic_table_cont">
                 <div className="clinic_table-header">
                 <h4>Manage Clinic Table</h4>
                <p> <Link to="/manager/clinics">View all clinic data<i className="fas fa-clinic-medical"></i></Link></p>
                </div>
               {status==='ok'?(<Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Clinic<ClinicSearch  searchFilled={'clinic'}/></th>
                        <th>Address<ClinicSearch searchFilled={'address'}/></th>
                        <th>Email<ClinicSearch searchFilled={'email'}/></th>
                        <th>Phone<ClinicSearch searchFilled={'phone'}/></th>
                        <th>Action</th>
                    </tr>
                    </thead>
                   <tbody>
                    {_.map(allclinics, (clinic => (
                        <tr key={clinic.id + clinic.phone}>
                            <td>{clinic.id}</td>
                            <td>{clinic.name}</td>
                            <td>{clinic.address}</td>
                            <td>{clinic.email}</td>
                            <td>{clinic.phone}</td>
                            <td className="actions_btns">
                                <EyeOutlined className="view_btn"
                                             onClick={() => this.props.infoClinicToggleModal(infoClinicModalShow, clinic)}/>
                                <EditOutlined className="edit_btn"
                                              onClick={() => this.props.editClinicToggleModal(editClinicModalShow, clinic)}/>
                                <Popconfirm title="Sure to delete?"
                                            onConfirm={() => this.props.deleteSingleClinic(clinic.id)}>
                                    <DeleteOutlined className="delete_btn"/>
                                </Popconfirm>
                            </td>
                        </tr>
                      )))}
                    </tbody>
                </Table>):<h1>Please Wait</h1>}
                       </div>
                       </>
                       );
                   }
               }
                    const mapStateToProps = (state) => ({
                        infoClinicModalShow: state.Clinics.infoClinicModalShow,
                        clinicData:state.Clinics.clinicData,
                        formData:state.Clinics.formData,
                        allclinics:state.Clinics.allclinics,
                        status:state.Clinics.status
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
                    )(ClinicTable)
                    
                    export default withRouter(Container);