import React, {Component} from 'react';

import {connect} from "react-redux";
import {Button, DatePicker, Form, Input, Modal, Select, Upload} from "antd";
import {MailOutlined, MobileOutlined, UploadOutlined} from "@ant-design/icons";
import {addAppointmentModal} from '../../store/actions/Appointments'

const rangeConfig = {
    rules: [
        {
            type: 'array',
            required: true,
            message: 'Please select time!',
        },
    ],
};





class AddAppointmentModalForm extends Component {

    constructor(props) {
        super(props);

    }
     TimeRelatedForm = () => {
         const onFinish = (fieldsValue) => {
             const values = {
                 ...fieldsValue,
                 'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm'),
             }
             console.log('Received values of form: ', values)
         }


     }
    handleModalClose=()=>{
        const{addAppointmentsModalShow}=this.props
        this.props.addAppointmentModal(addAppointmentsModalShow)
    }
    render() {
        const {addAppointmentsModalShow} = this.props
        const {errors} = this.props
        console.log(errors)
        const {Option} = Select
        return (
            <Modal
                visible={addAppointmentsModalShow}
                title="Make Appointments"
                onCancel={this.handleModalClose}
                footer={null}
            >
                <div className='modal_body'>
                    <div>
                        <Form onFinish={(formData) => this.handleSubmit(formData)}>
                            <h4>Appointmenst Details</h4>

                            <i className={"form_errors"}>{this.props.errors?.phone}</i>
                            <Form.Item
                                name="phone"
                                type="phone"
                                rules={[
                                    {
                                        required: true,

                                    }]}>
                                <Input
                                    prefix={<MobileOutlined className="site-form-item-icon"/>}
                                    placeholder="Phone"
                                />
                            </Form.Item>
                            <Form.Item name="date" label="Date">
                                <DatePicker showTime format="YYYY-MM-DD HH:mm" />
                            </Form.Item>
                            <i className={"form_errors"}>{this.props.errors?.notes}</i>
                            <Form.Item
                                name="note"
                                type="text"
                                rules={[
                                    {
                                        required: false,
                                    }]}>
                                <Input
                                    prefix={<MobileOutlined className="site-form-item-icon"/>}
                                    placeholder="Note"
                                />
                            </Form.Item>


                            <Button htmlType="submit" className={"formButton"}><i
                                className={"fas fa-clinic-medical"}></i> Add</Button>
                        </Form>
                    </div>
                </div>


            </Modal>

        );
    }
}



const mapStateToProps = (state) => ({
    addAppointmentsModalShow:state.Appointments.addAppointmentsModalShow
})

const mapDispatchToProps = {
    addAppointmentModal,
}
const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddAppointmentModalForm)

export default Container