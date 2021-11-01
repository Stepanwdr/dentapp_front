import React, {Component} from "react";
import { Modal, Button } from 'antd';
import {addPaymentsModal,selectNotesForPaymentsModal} from "../../store/actions/Payments";
import SelectNotesForPayment from "./select_notes_for_payment_modal_form";
import {UserOutlined, LockOutlined,MailOutlined,ExclamationOutlined} from "@ant-design/icons";
import {connect} from "react-redux";
import  _ from "lodash";
import {
    Form,
    Input,   
    Select,
    Radio,
} from "antd";

class AddPaymentsModalForm extends Component {
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
        console.log(this.props)
        const{addPaymentsModalShow,selectNotesForPaymentsModalShow}=this.props
        const {Option}=Select
            return (
            <Modal

            visible={addPaymentsModalShow}
            title="Add Payment"
            footer={null}
            width="520"
            wrapClassName="add_notes_modal"
            onCancel={()=>this.props.addPaymentsModal(!addPaymentsModalShow)}
            >
       <div className="add_payment_modal_header">
           <Button onClick={()=>this.props.selectNotesForPaymentsModal(!selectNotesForPaymentsModalShow)} className="select_payment_btn">+ Add Note</Button>
       </div>
            <Form  onFinish={(formData)=>this.handleSubmit(formData)}>
                        <div className='modal_body'>
            </div>
                         <Form.Item
                            name="Payment Method"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Select Payment Method!',
                                },
                            ]}
                            >
                            <Select
                                    placeholder="Select Payment Method"
                            >
                                <Option value="Bank Transfer">
                                Bank Transfer
                                </Option>
                                <Option value="Cash">
                                Cash
                                </Option>
                                <Option value="Cheque">
                                Cheque
                                </Option>
                                <Option value="Credit Card">
                                Credit Card
                                </Option>
                                <Option value="Installment">
                                Installment
                                </Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="amount"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input amount!',
                                },
                            ]}
                            >
                           <Input/>
                            
                        </Form.Item>

      <Form.Item name={['notes', 'notes']} label="Notes">
        <Input.TextArea />
      </Form.Item>
                  <Button htmlType="submit"
                    onClick={()=>this.props.addPaymentsModal(!addPaymentsModalShow)}  className={"formButton"}><i className={"fas fa-clinic-medical"}></i> Save Payment</Button>
                    </Form>
                    <SelectNotesForPayment/>
        </Modal>
        );
    }
}

const mapStateToProps=(state)=>({
    addPaymentsModalShow:state.Payments.addPaymentsModalShow,
    selectNotesForPaymentsModalShow:state.Payments.selectNotesForPaymentsModalShow
});

const mapDispatchToProps={
   addPaymentsModal,
   selectNotesForPaymentsModal
};
const Container=connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPaymentsModalForm );

export default Container;

