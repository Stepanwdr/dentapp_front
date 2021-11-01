import React, {Component} from "react";
import { Modal, Button } from 'antd';
import {addAdminToggleModal} from "../../store/actions/manager/Administrators";
import {UserOutlined, LockOutlined,MailOutlined,ExclamationOutlined} from "@ant-design/icons";
import {connect} from "react-redux";
import  _ from "lodash";
import {
    Form,
    Input,   
    // InputNumber,
    // Cascader,
    Select,
    Radio,
    // AutoComplete,
} from "antd";


class AddAdminModalForm extends Component {
    constructor(props) {
        super(props);
     
        }

    handleModalClose=()=>{
        const {addAdminModalShow}=this.props.addAdminModalShow
        this.props.addAdminToggleModal(!addAdminModalShow)
    }
    handleSubmit=(data)=>{
 let formData=_.set(data,'role','admin')
        console.log(formData)
    }
    render() {
        const {addAdminModalShow}=this.props
        const {Option}=Select
        return (
            <Modal
            visible={addAdminModalShow}
            title="Add Administrator"
            onOk={this.handleOk}
            onCancel={this.handleModalClose}
            footer={null}
            >
            <div className='modal_body'>
                <div>
                    <Form onSubmit={(data)=>this.handleSubmit(data)}>
                        <h5>Login Details</h5>
                        <Form.Item
                            name="login"
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />}  placeholder="Login" />
                        </Form.Item>
                        <Form.Item
                            name="password"
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
                        <h5>Administrator Information</h5>
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
                        <Button htmlType="submit"  className={"formButton"}><i className={"fas fa-clinic-medical"}></i>  Add</Button>
                    </Form>
                </div>
            </div>
        </Modal>
        );
    }
}


const mapStateToProps=(state)=>({
    addAdminModalShow:state.Administrators.addAdminModalShow
});

const mapDispatchToProps={
    addAdminToggleModal,
};
const Container=connect(
    mapStateToProps,
    mapDispatchToProps
)(AddAdminModalForm);

export default Container;
