import React, {Component} from "react";
import {Row, Col, Container,Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import manager from "../assets/images/manager.jpg";
import administrator from "../assets/images/administrator.png";
import dentist from "../assets/images/dentist.png";
import patient from "../assets/images/patient.png"
import logo from "../assets/images/app-logo.png";
import {addClinicToggleModal, getClinics} from "../store/actions/manager/Clinics";
import {addAdminToggleModal} from "../store/actions/manager/Administrators";
import {addDentistToggleModal} from "../store/actions/Dentists";
import {addPatientToggleModal} from "../store/actions/Patients";
import {connect} from "react-redux";
import _ from "lodash";
class Auth extends Component {
    constructor(props) {
        super(props);
        this.state={
            clinicId:null,
            role:''
        }
    }
    componentDidMount() {
       this.props.getClinics()
    }

    render(){
        const{allclinics}=this.props
    console.log(this.state.clinicId)
        console.log(allclinics)
        return (
            <Container className={"auth"}>
             <div className="logo">

    <img src={logo} alt=""/>
                 <h4 className="logo__text">DentApp</h4>
                 <h3>Select Dashboard</h3>
</div>
            <Row className={"justify-content-md-center align-items-md-center"} >
           <Col md="auto">
               <img src={manager} alt=""/>
               <h4>Manager</h4>
               <Form.Select>
                           <option>Manager 1</option>
                           <option>Manager 2</option>
               </Form.Select>
               <br/>
               <Link to={`/manager`} className={"sign_in"}>Sign In</Link>
           </Col>
                <Col md="auto">
                    <img src={administrator} alt=""/>
                    <h4>Administrator</h4>
                    <Form.Select>
                        {_.map(allclinics,(clinic)=>(
                                <option onChange={()=>this.handleChange(clinic.id)}>{clinic.name}</option>
                            )
                        )
                        }
                    </Form.Select>
                    <br/>
                    <Link to={"/admin"} className={"sign_in"}>Sign In</Link>
                </Col>
                <Col md="auto">
                    <img src={dentist} alt=""/>
                    <h4>Dentist</h4>
                    <Form.Select>
                        {_.map(allclinics,(clinic)=>(
                                <option>{clinic.name}</option>
                            )
                        )
                        }
                    </Form.Select>
                    <br/>
                    <Link to={"/dentist"} className={"sign_in"}>Sign In</Link>

                </Col>
                <Col md="auto">
                    <img src={patient} alt=""/>
                    <h4>Patient</h4>
                    <Form.Select>
                        {_.map(allclinics,(clinic)=>(
                                <option value={this.state.value} onChange={()=>this.handleChange(clinic.id)}>{clinic.name}</option>
                            )
                        )
                        }
                    </Form.Select>
                    <br/>
                    <Link to={"/patient"} className={"sign_in"}>Sign In</Link>
                </Col>
            </Row>
            </Container>
        );
    }
}
const mapStateToProps=(state)=>({
    allclinics:state.Clinics.allclinics
});
const mapDispatchToProps={
    getClinics
};
const Containe=connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth);

export default Containe;
