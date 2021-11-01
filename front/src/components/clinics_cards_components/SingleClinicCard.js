import React, {Component} from 'react';

import {Col, Card, Button} from "antd";
import clinicLogo from "../../assets/images/logo1.png";
import {getDentistByClinic} from "../../store/actions/Dentists";
import {connect} from "react-redux";

class SingleClinicComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {clinic} = this.props
        return (
            <Col>
                <Card className={'clinic_card patient_card'}>
                    <div className={'card_header'}>
                        <div className={'clinic_logo dentist_avatar'}>
                            <img src={clinicLogo} alt="avatar"/>
                        </div>
                        <h5 className={'clinic_card_clinic_name'}>{clinic.name}</h5>
                    </div>
                    <div className={'card_body'}>
                        <p className={'card_item'}><strong
                            className={'card_label'}>Address: </strong><i>{clinic.address}</i></p>
                        <p className={'card_item'}><strong
                            className={'card_label'}>Phone: </strong><i>{clinic.phone}</i></p>
                        <p className={'card_item'}><strong
                            className={'card_label'}>Rating: </strong><i>{clinic.rating ? clinic.rating : '*****'}</i>
                        </p>
                    </div>
                    <Button className={"visit_clinic_btn"}>Visit Clinic</Button>
                </Card>
            </Col>

        );
    }
}
export default SingleClinicComponent


