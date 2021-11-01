import React, {Component} from "react";
import {Modal, Button, Upload} from 'antd';
import {editClinicToggleModal} from "../../store/actions/manager/Clinics";
import {editSingleClinic} from "../../store/actions/manager/Clinics"
import { withRouter } from "react-router-dom";
import { Tabs } from 'antd';
const { TabPane } = Tabs;
/*<span>
<AppleOutlined />
Tab 1
</span>
*/


function callback(key) {
  console.log(key);
}

import {
    UserOutlined, LockOutlined ,MailOutlined,ExclamationOutlined,MobileOutlined,UploadOutlined
} from "@ant-design/icons";
import {connect} from "react-redux";
import  propTypes from "prop-types"

import {
    Form,
    Input,
    Select,
 TimePicker,
} from "antd";
const { RangePicker } = TimePicker;
const rangeConfig = {
    rules: [
        {
            type: 'array',
            required: true,
            message: 'Please select clinic worktimes!',
        },
    ],
    
};

const normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
        return e;
    }

    return e && e.fileList;
};
class EditClinicModalForm extends Component {
  
    constructor(props) {
        super(props);
        this.state={
            formData:{}
    }
}
    handleModalClose=()=>{
        const {editClinicModalShow}=this.props.editClinicModalShow
        this.props.editClinicToggleModal(!editClinicModalShow)
    }
    handleSubmit=(formData)=>{
console.log(formData);
        const {editClinicModalShow}=this.props.editClinicModalShow
        this.handleModalClose(!editClinicModalShow)
        this.props.editSingleClinic(formData)

    }
    render(){
        const {editClinicModalShow,clinic={}}=this.props
        const {Option}=Select
        return (
            <Modal
            visible={editClinicModalShow}
            title="Edit Clinic"
            onCancel={this.handleModalClose}
            footer={null}
            >
            <div className='modal_body'>
                <div>
                                        <Tabs onChange={callback} type="card" >
                    <TabPane tab="Clinic Information" key="1">
                    <Form  onFinish={(formData)=>this.handleSubmit(formData)}>
                           <Form.Item
                            name="clinicName"
                            type="text"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Clinic Name!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<i className="fas fa-clinic-medical site-form-item-icon"></i>}
                                placeholder="Clinic name"
                                defaultValue={clinic.name}
                            />
                        </Form.Item>
                        <Form.Item
                            name="clinicCity"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Select Clinic City!',
                                },
                            ]}>
                            <Select
                                    placeholder={clinic.city?clinic.city:'Gyumri'}
                                    defaultValue={clinic.city}
                            >
                                <Option value="Gyumri">
                                    Gyumri
                                </Option>
                                <Option value="Maralik">
                                    Maralik
                                </Option>
                                <Option value="Artik">
                                    Artik
                                </Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="address"
                            type="text"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Address',
                                }]}>
                            <Input
                                prefix={<i className="fas fa-map-marker-alt site-form-item-icon"></i>}
                                placeholder="Address"
                                defaultValue={clinic.address}
                            />
                        </Form.Item>
                        <Form.Item
                            name="lat"
                            type="text"
                           >
                            <Input
                                prefix={<i className="fas fa-map-marker-alt site-form-item-icon"></i>}
                                placeholder="edit lat"

                            />
                        </Form.Item>
                        <Form.Item
                            name="long"
                            type="text"
>
                            <Input
                                prefix={<i className="fas fa-map-marker-alt site-form-item-icon"></i>}
                                placeholder="edit long"

                            />
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            type="phone"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input clinic Phone',
                                }]}>
                            <Input
                                prefix={<MobileOutlined className="site-form-item-icon"/> }
                                placeholder="Phone"
                                defaultValue={clinic.phone}
                            />
                        </Form.Item>
                        
                        <Form.Item
                            name="clinicLogo"
                            label="Clinic Logo"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                            extra="Clini Logo"
                        >
                        
                            <Upload name="clinicLogo" action="/upload.do" listType="picture" className={"clinic__logo__upload"}>
                            <img src={clinic.logo} alt="logo" className="clinicLogo"/>
                                <Button icon={<UploadOutlined />} className="change__logo__btn">Change logo</Button>
                            </Upload>
                        </Form.Item>
                        <Button className="formButton" htmlType="submit"><i className={"fas fa-clinic-medical submitIcon"}></i>Save</Button>

                        </Form>
    </TabPane>
    <TabPane tab="About" key="2">
    <Form  onFinish={(formData)=>this.handleSubmit(formData)}>
    <Form.Item
                            name='aboutTitle'
                            label="About Title"
                        >
                        <Input placeholder={"About Title"} />
                        </Form.Item>
    <Form.Item name={'aboutText'} label="About Text">

        <Input.TextArea />
      </Form.Item>
      <Button className="formButton" htmlType="submit"><i className={"fas fa-clinic-medical submitIcon"}></i>Save</Button>

      </Form> 
      </TabPane>
    <TabPane tab="Our Team" key="3">
    <Form  onFinish={(formData)=>this.handleSubmit(formData)}>
    <Form.Item
                            name='ourTeamTitle'
                            label="Our Team Title"
                        >
                        <Input placeholder={"Our Team Title"} />
                        </Form.Item>
    <Form.Item name={"ourTeamText"} label="Our Team Text">

<Input.TextArea />

</Form.Item>
<Button className="formButton" htmlType="submit"><i className={"fas fa-clinic-medical submitIcon"}></i>Save</Button>

</Form>
    </TabPane>
    <TabPane tab="Gallery" key="4">
    <Form  onFinish={(formData)=>this.handleSubmit(formData)}>
    <Form.Item
                            name="galleryImages"
                            label="Gallery Images"
                            valuePropName="galleryImagesList"
                            getValueFromEvent={normFile}
                            extra="galleryImages"
                        >
                        
                        
                            <Upload name="galleryImages"  listType="picture-card" multiple className={"gallery_images_upload"}>
                            
                                <Button icon={<UploadOutlined />} className="change__logo__btn change_gallery_images_btn">Upload Clinic Gallery Images</Button>
                            </Upload>
                        </Form.Item>
                        <Button className="formButton" htmlType="submit"><i className={"fas fa-clinic-medical submitIcon"}></i>Save</Button>
                        </Form>
                        
    </TabPane> 
    <TabPane tab="Login Details" key="5">
                    <Form  onFinish={(formData)=>this.handleSubmit(formData)}>
                    <Form.Item
                            name='login'
                        >
                        <Input placeholder={"Login"} prefix={<UserOutlined className="site-form-item-icon"/>}/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                         
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            type="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input clinic Email!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<MailOutlined  className="site-form-item-icon" />}
                                placeholder="Email"
                            defaultValue={clinic.email}
                         
                            />
                        </Form.Item>
                        <Button className="formButton" htmlType="submit"><i className={"fas fa-clinic-medical submitIcon"}></i>Save</Button>
                    </Form>
    </TabPane>
  </Tabs>
                
                       
                        
                </div>
            </div>
        
    

        </Modal>

        );
    }
}
const mapStateToProps=(state)=>({
    editClinicModalShow:state.Clinics.editClinicModalShow,
    clinic:state.Clinics.clinicData
});

const mapDispatchToProps={
    editClinicToggleModal,
    editSingleClinic
};
const Container=connect(
    mapStateToProps,
    mapDispatchToProps
)(EditClinicModalForm);

export default withRouter(Container);
