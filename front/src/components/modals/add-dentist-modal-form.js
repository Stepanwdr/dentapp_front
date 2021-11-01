import React, {Component} from "react";
import {Modal, Button, DatePicker} from 'antd';
import {addDentistToggleModal, registerDentist} from "../../store/actions/Dentists";
import {getDentistByClinic}from "../../store/actions/Dentists";
import { UserOutlined, LockOutlined ,MailOutlined,ExclamationOutlined,MobileOutlined} from "@ant-design/icons";
import {connect} from "react-redux";
import _ from "lodash";
import {
    Form,
    Input,   
    Select,
    Radio,

} from "antd";
import {getClinics} from "../../store/actions/manager/Clinics";

class AddDentistModalForm extends Component {
    constructor(props) {
        super(props);

    }
    handleModalClose=()=>{
        const {addDentistModalShow} = this.props
        this.props.addDentistToggleModal(!addDentistModalShow)

    }
    handleSubmit =async (data) => {
        const { errors} = this.props
        console.log(data)
const formData=_.set(data,'role','dentist')
        const {clinicId}=formData
        console.log(formData)
        await this.props.registerDentist(formData)
        await this.props.getDentistByClinic(clinicId)
        if(_.isEmpty(errors)){
            this.handleModalClose(false)
        }
    }
    render() {
        const {addDentistModalShow,allclinics}=this.props
        return (
            <Modal
            visible={addDentistModalShow}
            title="Add Dentist"
            onCancel={()=>this.props.addDentistToggleModal(!addDentistModalShow)}
            footer={null}
            >
            <div className='modal_body'>
                <div>
                    <Form onFinish={(data)=>this.handleSubmit(data)}>
                        <h4>Login Details</h4>
                        <i className={"form_errors"}>{this.props.errors?.email}</i>
                        <Form.Item
                            name="email"
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                        </Form.Item>
                        {this.props.errors?.password}
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,

                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <h4>Dentist Information</h4>
                        {this.props.errors?.name}
                        <Form.Item
                            name="name"
                            type="text"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input
                                prefix={<ExclamationOutlined  className="site-form-item-icon" />}
                                type="text"
                                placeholder="Dentist name"
                            />
                        </Form.Item>
                        {this.props.errors?.fname}
                        <Form.Item
                        name="fname"
                        type="text"
                        rules={[
                            {
                                required: true,

                            },
                        ]}
                    >
                        <Input
                            prefix={<ExclamationOutlined  className="site-form-item-icon" />}
                            type="text"
                            placeholder="Dentist firstname"
                        />
                    </Form.Item>

                        {this.props.errors?.lname}
                        <Form.Item
                            name="lname"
                            type="text"
                            rules={[
                                {
                                    required: true,

                                },
                            ]}
                        >
                            <Input
                                prefix={<ExclamationOutlined  className="site-form-item-icon" />}
                                type="text"
                                placeholder="Dentist lastname"
                            />
                        </Form.Item>
                        {this.props.errors?.phone}
                        <Form.Item
                        
                            name="phone"
                            type="mobile"
                            rules={[
                                {
                                    required: true,

                                },
                            ]}
                        >
                            <Input
                                prefix={<MobileOutlined className="site-form-item-icon"/> }
                                name="phone"
                                type="mobile"
                                placeholder="Phone number"
                            />
                        </Form.Item>
                        {this.props.errors?.address}
                        <Form.Item
                            name="address"
                            type="text"
                            rules={[
                                {
                                    required: true,

                                },
                            ]}
                        >
                            <Input
                                prefix={<ExclamationOutlined  className="site-form-item-icon" />}
                                type="text"
                                placeholder="Dentist address"
                            />
                        </Form.Item>

                            <Form.Item name="date-time-picker" label="Birthdate" >
                                <DatePicker  format="YYYY-MM-DD" />
                            </Form.Item>

                        <Form.Item
                            name='speciality'
                            >
                            <Select
                                    placeholder="Select Speciality"

                            >
                                <Select.Option value="Therapy">
                                Therapy
                                </Select.Option>
                                <Select.Option value="Stoma Lux">
                                Speciality 2
                                </Select.Option>
                                <Select.Option value="Denta Lux">
                                Speciality 3
                                </Select.Option>

                            </Select>
                    </Form.Item>
                        <Form.Item
                            name="gender"
                            label="Gender"
                     
                        >
                            <Radio.Group>
                                <Radio value="male">Male</Radio>
                                <Radio value="female">Female</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item
                            name="clinicId"
                            rules={[
                            {
                                required: true,
                                message: 'Please Select Clinic!',
                            },
                        ]}>
                            <Select
                                    placeholder="Select Clinic"


                            >{_.map(allclinics,(clinic)=>(
                                <Select.Option value={clinic.id} key={clinic.id} >
                                    {clinic.name}
                                </Select.Option>
                            ))}

                            </Select>
                        </Form.Item>

                        <Button htmlType="submit" className={"formButton"}><i className={"fas fa-clinic-medical"}></i>   Add</Button>
                    </Form>
                </div>
            </div>


        </Modal>
    
        );
    }
}


const mapStateToProps=(state)=>({
    addDentistModalShow:state.Dentists.addDentistModalShow,
    errors:state.Dentists.errors,
    status:state.Dentists.status,
    allclinics:state.Clinics.allclinics
});

const mapDispatchToProps={
    addDentistToggleModal,
    registerDentist,
    getDentistByClinic
};
const Container=connect(
    mapStateToProps,
    mapDispatchToProps
)(AddDentistModalForm);

export default Container;
