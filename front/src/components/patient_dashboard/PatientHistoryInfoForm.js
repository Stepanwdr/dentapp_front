import React, {Component} from 'react';
import {Button, Col, Form, Row} from "antd";
import {DatePicker, Input, Radio, Select} from "antd";
import {ExclamationOutlined, LockOutlined, MobileOutlined, UserOutlined} from "@ant-design/icons";
import _ from "lodash";
import patientAvatar from '../../assets/images/patient.png';
class PatientHistoryInfoForm extends Component {
    render() {
        return (
            <Form onFinish={(data)=>this.handleSubmit(data)}>
                <Row gutter={10}>
                    <Col>
                        <Row >
                        <img src={patientAvatar} alt="patient avatar"/>
                       </Row>
                        <Row>
                            <button className="history_edit_avatar_btn"> Edit Avatar</button>
                        </Row>
                </Col>
                    <Col >
                    <h5>Poxosyan Poxos Poxosi</h5>
                       
                    </Col>
                    <Col  offset ={8}>
                        <button className="history_edit_btn"> Edit</button>
                        <button className="history_delete_btn"> Delete</button>
                    </Col>
                </Row>
                <Row gutter={2}>
                    <Col >

                        <i className={"form_errors"}>{this.props.errors?.email}</i>
                        <Form.Item
                            label="Email"
                            name="email"
                            disabled
                        >
                            <Input disabled prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                        </Form.Item>
                        {this.props.errors?.lname}
                        {this.props.errors?.address}
                        <Form.Item
                            label="Address"
                            name="address"
                            type="text"
                            disabled
                        >
                            <Input
                                prefix={<ExclamationOutlined  className="site-form-item-icon" />}
                                type="text"
                                placeholder="Patient address"
                                disabled
                            />
                        </Form.Item>
                        <Form.Item name="date-time-picker" label="Birthdate" >
                            <DatePicker  format="YYYY-MM-DD" disabled />
                        </Form.Item>


                    </Col>
                    <Col  offset = {2}>
                        <Form.Item
                            name="gender"
                            label="Gender"
                            disabled
                        >
                            <Radio.Group>
                                <Radio value="male">Male</Radio>
                                <Radio value="female">Female</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            label="Age"
                            name="age"
                            type="number"
                            disabled
                        >
                            <Input
                                prefix={<ExclamationOutlined  className="site-form-item-icon" />}
                                type="text"
                                placeholder="Patient age"
                                disabled
                            />
                        </Form.Item>
                            <Form.Item
                                label="Phone"
                                name="phone"
                                type="mobile"
                            >
                                <Input
                                    prefix={<MobileOutlined className="site-form-item-icon"/> }
                                    name="phone"
                                    type="mobile"
                                    placeholder="Phone number"
                                    disabled
                                />
                            </Form.Item>
                                         </Col>
                </Row>

                <Button htmlType="submit" className={"formButton"}><i className={"fas fa-clinic-medical"}></i>   Save Changes</Button>
            </Form>


        );
    }
}

export default PatientHistoryInfoForm;