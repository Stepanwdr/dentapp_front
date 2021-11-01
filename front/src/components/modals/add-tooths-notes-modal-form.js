import React, {Component} from "react";
import { Modal, Button } from 'antd';
import {addToothsNotesModal,addToothsToTreatments} from "../../store/actions/PatientToothChart";
import {UserOutlined, LockOutlined,MailOutlined,ExclamationOutlined} from "@ant-design/icons";
import {connect} from "react-redux";
import  _ from "lodash";
import {
    Form,
    Input,   
    Select,
    Radio,
} from "antd";

class AddToothsNotesModalForm extends Component {
    constructor(props) {
        super(props);
     this.state={
isSelected:false
     }
        }
      

handleSubmit=(data)=>{
 
    const{selectedTooths}=this.props
    const formData=_.set(data,'selectedTooths',selectedTooths)
  
    this.props.addToothsToTreatments(formData)
}
   
    render() {
        const{selectedTooths,addToothsNotesModalShow}=this.props
        const {Option}=Select
            return (
            <Modal
            visible={addToothsNotesModalShow}
            title="Add Tooth Notes"
            onOk={this.handleOk}
            footer={null}
            width="520"
            wrapClassName="add_notes_modal"
            onCancel={()=>this.props.addToothsNotesModal(!addToothsNotesModalShow)}
            >
       
            <Form  onFinish={(formData)=>this.handleSubmit(formData)}>
                        <h5>Selected Toothes</h5>
                        <div className='modal_body'>
                {this.props.selectedTooths.map(tooth=>( 
                    <strong key={tooth} className="selected_toots_form">
                        {tooth}
                    </strong>
                ))}
            </div>
                                        <Form.Item
                            name="Current Diagnosis"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Select Current Diagnosis!',
                                },
                            ]}
                            >
                            <Select
                                    placeholder="Select Diagnosis"
                            >
                                <Option value="CANDIDAL STOMATITIS">
                                CANDIDAL STOMATITIS
                                </Option>
                                <Option value="SUPERNUMERARY TEETH">
                                SUPERNUMERARY TEETH
                                </Option>
                                <Option value="DENTAL ROOT CARIES">
                                DENTAL ROOT CARIES
                                </Option>
                                <Option value="EXCESSIVE ATTRITION OF TEETH">
                                EXCESSIVE ATTRITION OF TEETH
                                </Option>
                                <Option value="HYPERCEMENTOSIS">
                                HYPERCEMENTOSIS
                                </Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="weekend"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Select Procedure!',
                                },
                            ]}
                            >

                            <Select
                                    placeholder="Select Procedure"

                            >
                                <Option value="Teeth Cleanings">
                                Teeth Cleanings
                                </Option>
                                <Option value="Teeth Whitening">
                                Teeth Whitening
                                </Option>
                                <Option value="Fillings">
                                Fillings
                                </Option>
                                <Option value="Crowns">
                                Crowns
                                </Option>
                                <Option value="Veneers">
                                Veneers
                                </Option>
                            </Select>
                        </Form.Item>

      <Form.Item name={['notes', 'notes']} label="Notes">
        <Input.TextArea />
      </Form.Item>

                        <Button htmlType="submit" onClick={()=>this.props.addToothsNotesModal(!addToothsNotesModalShow)}  className={"formButton"}><i className={"fas fa-clinic-medical"}></i>   Add </Button>
                    </Form>
        </Modal>
        );
    }
}


const mapStateToProps=(state)=>({
    addToothsNotesModalShow:state.PatientToothChart.addToothsNotesModalShow
});

const mapDispatchToProps={
    addToothsNotesModal,
    addToothsToTreatments
};
const Container=connect(
    mapStateToProps,
    mapDispatchToProps
)(AddToothsNotesModalForm);

export default Container;

