import React, {Component} from 'react';

import {Col, Card, Button} from "antd";
import dentistLogo from "../../assets/images/dentist.png";
import {getDentistByClinic} from "../../store/actions/Dentists";
import {connect} from "react-redux";
import {addAppointmentModal} from "../../store/actions/Appointments";
import AddAppointmentModalForm from "../modals/add_appointment_modal_form";

class SingleDentistCard extends Component {
    constructor(props) {
        super(props);
    }
    handleClick=(dentistId)=>{
        const{addAppointmentModalShow}=this.props
        console.log(dentistId)
        this.props.addAppointmentModal(!addAppointmentModalShow)
}
    render() {
        const {dentist} = this.props
        return (
            <Col>
                <Card className={'dentist_card'}>
                    <div className={'card_header'}>
                        <div className={'dentist_avatar'}>
                            <img src={dentistLogo} alt="avatar"/>
                        </div>
                        <h5 className={'dentist_card_dentist_name'}>{dentist.name}</h5>
                        <h5 className={'dentist_card_dentist_name'}>{dentist.fname}</h5>
                    </div>
                    <div className={'card_body'}>
                        <p className={'card_item'}><strong className={'card_label'}>Speciality: </strong><i>{dentist.speciality}</i></p>
                        <p className={'card_item'}><strong className={'card_label'}>Phone: </strong><i>{dentist.phone}</i></p>
                        <p className={'card_item'}><strong className={'card_label'}>Rating: </strong><i>{dentist.rating ? dentist.rating : '*****'}</i></p>
                        <p className={'card_item'}><strong className={'card_label'}>Clinic: </strong><i>{dentist.clinic.name}</i></p>

                    </div>
                    <Button onClick={()=>this.handleClick(dentist.id)} className={"create_appoin"}>Appointments</Button>
                </Card>
                <AddAppointmentModalForm/>
            </Col>

        );
    }

}

const mapStateToProps = (state) => ({
    addAppointmentModalShow:state.Appointments.addAppointmentModalShow
});

const mapDispatchToProps = {
    getDentistByClinic,
    addAppointmentModal
};
const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleDentistCard);

export default Container;
