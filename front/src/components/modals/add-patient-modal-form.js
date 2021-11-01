import React, {Component} from "react";
import { Modal, Button } from 'antd';
import {addPatientToggleModal} from "../../store/actions/Patients";
import { UserOutlined, LockOutlined ,MailOutlined,ExclamationOutlined} from "@ant-design/icons";
import {connect} from "react-redux";
import {
    Form,
    Input,   
    // InputNumber,
    // Cascader,
    Select,
    DatePicker,
    Radio,
    // AutoComplete,
} from "antd";


class AddPatientModalForm extends Component {
    constructor(props) {
        super(props);

    }
    handleModalClose=()=>{
        const {addPatientModalShow}=this.props.addPatientModalShow
        this.props.addPatientToggleModal(!addPatientModalShow)
    }

    render() {
        const {addPatientModalShow}=this.props
        const {Option}=Select
        return (
          
        <Modal
        visible={addPatientModalShow}
        title="Add Patient"
        onOk={this.handleOk}
        onCancel={this.handleModalClose}
        footer={null}
        >
            <div className='modal_body'>
                <div>
                    <Form onSubmit={()=>this.handleModalClose()}>
                        <h5>Login Details</h5>
                        <Form.Item
                            name="login"
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Login" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Login!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<MailOutlined  className="site-form-item-icon" />}
                                type="email"
                                placeholder="Email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Email!',
                                    },
                                ]}
                            />
                        </Form.Item>
                        <h5>Patient Information</h5>
                        <Form.Item
                            name="name"
                            type="text"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input name!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<ExclamationOutlined  className="site-form-item-icon" />}
                                type="text"
                                placeholder="Name"
                            />
                        </Form.Item>
                        <Form.Item
                            name="surname"
                            type="text"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input surname!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<ExclamationOutlined  className="site-form-item-icon" />}
                                type="text"
                                placeholder="Surname"
                            />
                        </Form.Item>
                        <Form.Item
                            name="birthDate"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input date!',
                                },
                            ]}
                        >
                           <DatePicker/>
                        </Form.Item>
                        <Form.Item
                            name="age"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input age!',
                                },
                            ]}
                        >
                              <Input
                                prefix={<ExclamationOutlined  className="site-form-item-icon" />}
                                type="number"
                                placeholder="Age"
                            />
                        </Form.Item>
                        <Form.Item name="gender" label="Gender">
                        <Radio value="Male" style={{ lineHeight: '32px' }} >
               Male
              </Radio>
              <Radio value="Female" style={{ lineHeight: '32px' }} >
              Femal
              </Radio>
                        </Form.Item>

                        <Form.Item>
                            <Select name="clinic"
                                    placeholder="Select Clinic"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please Select Clinic!',
                                        },
                                    ]}
                            >
                                <Option value="Dental Clinic">
                                Dental Clinic
                                </Option>
                                <Option value="Stoma Lux">
                                Stoma Lux
                                </Option>
                                <Option value="Denta Lux">
                                Denta Lux
                                </Option>

                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Select name="dentist"
                                    placeholder="Select Dentist"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please Select Dentist!',
                                        },
                                    ]}
                            >
                                <Option value="Poxos Poxosyan">
                                Poxos Poxosyan
                                </Option>
                                <Option value="Petros Petrosyan">
                                Petros Petrosyan
                                </Option>
                                <Option value="Vardan Mamikonyan">
                                Vardan Mamikonyan
                                </Option>

                            </Select>
                        </Form.Item>

                        <Button htmlType="submit" className={"formButton"} onClick={()=>this.handleModalClose()}><i className={"fas fa-clinic-medical"}></i>  Add</Button>
                    </Form>
                </div>
            </div>


        </Modal>
       
        );
    }
}


const mapStateToProps=(state)=>({
    addPatientModalShow:state.Patients.addPatientModalShow
});

const mapDispatchToProps={
    addPatientToggleModal,
};
const Container=connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPatientModalForm);

export default Container;
