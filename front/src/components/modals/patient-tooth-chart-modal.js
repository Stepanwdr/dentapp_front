import React, {Component} from "react";
import {toothSvgData} from "../../helpers/ToothSvgData";
import {patientToothChartModal,addToothsNotesModal }from "../../store/actions/PatientToothChart";
import {CSSTransition, TransitionGroup,} from 'react-transition-group';
import AddToothsNotesModalForm from "../modals/add-tooths-notes-modal-form";
import {UserOutlined, LockOutlined,MailOutlined,ExclamationOutlined} from "@ant-design/icons";
import {connect} from "react-redux";
import {Modal,Button} from "antd";
import _ from "lodash";
import {
    Form,
    Input,   
    Select,
    Radio,
} from "antd";

class PatientToothChartModal extends Component {
    constructor(props){
        super(props)
        this.state={
          isSelected:false,
          treathedTooth:false,
          isPendding:false,
          selectedTooths:[],
          selected:''
        }
    }
    deleteTooth=(tooth)=>{
        let {selectedTooths}=this.state
        console.log(tooth)
      selectedTooths=selectedTooths.filter(t=>t != tooth)
      this.setState({selectedTooths})
    }
    handleModalClose=()=>{
    }
    handleClick=(toothNumber)=>{
        let {selectedTooths}=this.state
               const{patientToothChart}=this.props.patientData
           
               const tooth=patientToothChart.filter(toot=>toot.toothNumber==toothNumber)

                   if(tooth[0].toothStatus!="healthy"){
                 
                console.log('edit tooth number ----',toothNumber)
          return
               }
                 if(!selectedTooths.includes(toothNumber)){
                 selectedTooths=[...selectedTooths,toothNumber]
                 this.setState({selectedTooths})
               }
            }
                     
        
    render() {
        console.log(this.props)
        let{selectedTooths,selected}=this.state
        const{patientToothChartModalShow,addToothsNotesModalShow}=this.props
          const{patientToothChart}=this.props.patientData
        
        return (
            <Modal
                visible={patientToothChartModalShow}
            title="Patient Tooth Chart"
            onOk={this.handleOk}
            footer={null}
            onCancel={()=>this.props.patientToothChartModal(!patientToothChartModalShow)}
            > 
                  <div className='modal_body selectedTooths_chart_modal'>
                <div className="dental_chart">
                <svg min-width="200" height="600" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {patientToothChart.map(svg=>(
                      <path d={svg.toothSvgD}
                 
                      className={svg.toothStatus ? svg.toothStatus: "tooth" }
                       key={svg.id} 
                       onClick={()=>this.handleClick(svg.toothNumber)}
                       />
                       ))
                       }
            </svg>
           
            {selectedTooths.length?
             <div className="selected_toots">
             <div className="selected_header">
                 <strong>{selectedTooths.length}<i> Toothes Selected </i></strong>
                 <ul className="selected_toots_list">
                     {selectedTooths.map(tooth=><li key={tooth.id}><svg width="27" height="33" viewBox="0 0 27 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.942 1.99994C12.1543 1.99994 10.4673 1.6836 8.91335 1.35489C8.71359 1.31264 8.51508 1.26991 8.31819 1.22754C7.01048 0.946108 5.77411 0.680027 4.71398 0.667124C3.45643 0.651819 2.33688 0.991056 1.57349 2.12584C0.849213 3.20248 0.503944 4.91917 0.503542 7.48903C0.429344 11.7065 1.52297 17.8078 3.72702 22.7905C4.82991 25.2839 6.22505 27.53 7.92032 29.1194C9.61838 30.7114 11.6388 31.6614 13.96 31.5C15.9583 31.4946 17.7449 30.5887 19.2814 29.1253C20.8188 27.6609 22.1283 25.6192 23.191 23.2835C25.3161 18.6125 26.5 12.6644 26.5 7.49352C26.5 4.92933 26.211 3.22269 25.5842 2.15228C25.2616 1.60132 24.8473 1.21455 24.3442 0.974414C23.8484 0.737817 23.2998 0.659457 22.7291 0.667133C21.7872 0.679802 20.6759 0.934209 19.4859 1.20661C19.2689 1.25629 19.0492 1.30657 18.8275 1.35609C17.3596 1.68397 15.7282 1.99994 13.942 1.99994Z" fill="white" stroke="#636363"/>
</svg>
<strong>Number {tooth}</strong>
<div><Button onClick={()=>this.deleteTooth(tooth)}>X</Button></div>
</li>
                    )}
                 </ul>
                 <Button onClick={()=>this.props.addToothsNotesModal(!addToothsNotesModalShow)}>+ Add Notes</Button>
                
                 </div>
                
            </div> :null }
            </div>
                 </div>
                
                 <AddToothsNotesModalForm selectedTooths={this.state.selectedTooths}/>
        </Modal>
        );
    }
}

const mapStateToProps=(state)=>({
    patientToothChartModalShow:state.PatientToothChart.patientToothChartModalShow,
    addToothsNotesModalShow:state.PatientToothChart.addToothsNotesModalShow,
    patientData:state.PatientToothChart.patientData
});

const mapDispatchToProps={
    patientToothChartModal,
    addToothsNotesModal
};
const Container=connect(
    mapStateToProps,
    mapDispatchToProps
)(PatientToothChartModal);

export default Container;


