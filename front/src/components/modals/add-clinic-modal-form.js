    import React, {Component} from "react";
    import {Modal, Button, Upload} from 'antd';
    import {addClinicToggleModal, addSingleClinic,getClinics} from "../../store/actions/manager/Clinics";

    import _  from "lodash";
    import {
        UserOutlined,
        LockOutlined,
        MailOutlined,
        ExclamationOutlined,
        MobileOutlined,
        UploadOutlined,
    } from "@ant-design/icons";
    import {connect} from "react-redux";


    import {
        Form,
        Input,
        Select,
        TimePicker,
    } from "antd";
    import {set} from "lodash";


    const {RangePicker} = TimePicker;
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

    class AddClinicModalForm extends Component {

        constructor(props) {
            super(props);
            this.state = {
                formData: {},
            }
        }

        handleModalClose = () => {
            const {addClinicModalShow} = this.props.addClinicModalShow
            this.props.addClinicToggleModal(!addClinicModalShow)

        }
        handleSubmit = async (formData) => {
            const {addClinicModalShow, errors} = this.props
            await this.props.addSingleClinic(formData)
            await this.props.getClinics()
            if(_.isEmpty(errors)){
                this.handleModalClose(!addClinicModalShow)
            }


        }


        render() {
            const {addClinicModalShow} = this.props
            const {errors} = this.props
            console.log(errors)
            const {Option} = Select
            return (
                <Modal
                    visible={addClinicModalShow}
                    title="Add Clinic"
                    onCancel={this.handleModalClose}
                    footer={null}
                >
                    <div className='modal_body'>
                        <div>
                            <Form onFinish={(formData) => this.handleSubmit(formData)}>


                                <h4>Clinic Information</h4>
                                <i className={"form_errors"}>{this.props.errors?.name}</i>
                                <Form.Item
                                    name="name"
                                    type="text"
                                    rules={[
                                        {
                                            required: true,

                                        }]}>

                                    <Input
                                        prefix={<i className="fas fa-clinic-medical site-form-item-icon"></i>}
                                        placeholder="Clinic name"
                                    />

                                </Form.Item>
                                <i className={"form_errors"}>{this.props.errors?.email}</i>
                                <Form.Item
                                    name="email"
                                    type="email"
                                    rules={[
                                        {

                                            required: true,
                                        }]}>

                                    <Input
                                        prefix={<MailOutlined className="site-form-item-icon"/>}
                                        placeholder="Email"
                                    />
                                </Form.Item>
                                <i className={"form_errors"}>{this.props.errors?.address}</i>
                                <Form.Item
                                    name="address"
                                    type="text"
                                    rules={[
                                        {
                                            required: true,

                                        }]}>
                                    <Input
                                        prefix={<i className="fas fa-map-marker-alt site-form-item-icon"></i>}
                                        placeholder="Address"
                                    />
                                </Form.Item>
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
                                <i className={"form_errors"}>{this.props.errors?.description}</i>
                                <Form.Item
                                    name="description"
                                    type="text"
                                    rules={[
                                        {
                                            required: true,
                                        }]}>
                                    <Input
                                        prefix={<MobileOutlined className="site-form-item-icon"/>}
                                        placeholder="Description"
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="image"
                                    label="Clinic Logo"
                                    valuePropName="fileList"
                                    getValueFromEvent={normFile}
                                    extra="Clini Logo"
                                >
                                    <Upload name="image" listType="picture" className={'uploaded_logo'}>
                                        <Button icon={<UploadOutlined/>}>Click to upload Clinic logo</Button>
                                    </Upload>
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
        addClinicModalShow: state.Clinics.addClinicModalShow,
        status: state.Clinics.status,
        errors: state.Clinics.errors
    });

    const mapDispatchToProps = {
        addClinicToggleModal,
        addSingleClinic,
        getClinics
    };
    const Container = connect(
        mapStateToProps,
        mapDispatchToProps
    )(AddClinicModalForm);

    export default Container;
