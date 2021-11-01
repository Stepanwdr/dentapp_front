import React, {Component} from "react";
import {Modal} from 'antd';
import clinicLogo from '../../assets/images/logo1.png'
import { infoClinicToggleModal} from "../../store/actions/manager/Clinics";
import {Row,Col} from "react-bootstrap";
/*import {
    UserOutlined,
    LockOutlined,
    MailOutlined,
    ExclamationOutlined,
    MobileOutlined,
    UploadOutlined,
}*/
import {connect} from "react-redux";

class InfoClinicModal extends Component {
    constructor(props) {
        super(props);
        this.state={
            formData:{}
    }
}
    handleModalClose=()=>{
        const {infoClinicModalShow}=this.props.infoClinicModalShow
        this.props.infoClinicToggleModal(!infoClinicModalShow)
    }
    render(){
        const {infoClinicModalShow,clinic={}}=this.props
        return (
            <Modal
            visible={infoClinicModalShow}
            title="Clinic Info"
            onCancel={this.handleModalClose}
            footer={null}
            >
          
             <Row>
             <Col className="avatar__col">
                <p><img src={clinic.logo?clinic.logo:clinicLogo} alt={"logo"} className="clinicLogo"/></p>
                <i>work times</i>
                <h5>{clinic.workTimes?clinic.workTimes:'10:00-20:00'}</h5>
                <i>Closed</i>
                <h5>{clinic.weeckend?clinic.weeckend:'Sunday'}</h5>
                </Col>
                <Col>
                <h4 className={"clinicName"}>{clinic.name}</h4>
                <i>city</i>
                <h5>{clinic.city?clinic.city:'Gyumri'}</h5>
                <i>Address</i>
                <h5>{clinic.address}</h5>
                <i>Phone</i>
                <h5>{clinic.phone}</h5>
              <Row>
              <Col>
              <i>Administrator</i>
              <h5>{clinic.administrator}</h5>
               <Row>
               <i>Dentists</i>
              <h5>{clinic.dentist}</h5>
               </Row>
              </Col>
              </Row>
                </Col>
            </Row>
          
        </Modal>

        );
    }
}
const mapStateToProps=(state)=>({
    infoClinicModalShow:state.Clinics.infoClinicModalShow,
    clinic:state.Clinics.clinicData
});

const mapDispatchToProps={
    infoClinicToggleModal,

};
const Container=connect(
    mapStateToProps,
    mapDispatchToProps
)(InfoClinicModal);

export default Container;
