import React, {Component} from "react";
import Wrapper from "../../components/dentist_dashboard/DentistWrapper";
import {Table, Button, Tag} from "antd";
import dentistIcon from "../../assets/images/dashboard/dentist__icon.png";
import clinicAvatar from "../../assets/images/logo1.png";
import {Link} from "react-router-dom";
import PatientWrapper from "../../components/patient_dashboard/PatientWrapper";
import PatientHeader from "../../components/patient_dashboard/PatientHeader";
class PatientDashboard extends Component {
    constructor(props) {
        super(props);
       this.state = {
          
        };
    }

  
    handleChange = (pagination, filters, sorter) => {
        console.log("Various parameters", pagination, filters, sorter);
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };

   



    render() {
       let {sortedInfo,filteredInfo}=this.state;
  
     
        return (
            <PatientWrapper>
                    <div className="content ml">
                    <PatientHeader/>
         <div className="appointments__manage">
         <div className="patient_dashboard_left_col">
         <div className="patient_dashboard_left_head">
         <h3 className="">My Clinic</h3>
         </div>
         <div className="patient_dashboard_left_col_body">
           <div className="patient_clinic_card">
         <div className="patient_card_header">
         <div className="patient_clinic_card_avatar">
          <img src={clinicAvatar} alt="clinic_avatar" className="clinic_card_avatar"/>
          </div> 
          <h4 className="clinic_name">Dental Clinic</h4>
         </div>
         <div className="card_body">
<div className="card_body_item">
    <div>
    <i></i><span>adress: <strong>Gyumri,Rizhkov 15</strong></span>
    </div>
    <div>
    <div>
    <i></i><span>phone: <strong>(+374)123456</strong></span>
    </div>
    <div>
    <i></i><span>rating: <strong>* * * * * </strong></span>
    </div>
     <div>
    <i></i><span>open: <strong>11:30-18:00 </strong></span>
    </div>
    </div>
</div>
         </div>
         <div className="patient_clinic_card_footer">
<button className="show_dir">Show direction</button>
         </div>
         </div>
         </div>
        </div>
        <div className="table_container">
        <div className="appointments_timeline">
          <h3 className="appointments_timeline_head">Appointments Timeline</h3>
      <ul className="appointments_timeline_list">
         <li className="appointments_timeline_list_item">   
<p className="mounth">Mar</p>
<h4 className="day">15</h4>
<p className="status"></p>
        </li>
        <li className="appointments_timeline_list_item">   
<p className="mounth">Mar</p>
<h4 className="day">28</h4>
<p className="status"></p>
        </li>
        <li className="appointments_timeline_list_item">   
<p className="mounth">Apr</p>
<h4 className="day">29</h4>
<p className="status"></p>
        </li>
        <li className="appointments_timeline_list_item">   
<p className="mounth">May</p>
<h4 className="day">10</h4>
<p className="status"></p>
        </li>
        <li className="appointments_timeline_list_item next_appointments">   
<div><p className="mounth">May</p>
<h4 className="day">25</h4>
<p className="status"></p>
</div>
<div className="next_appointment">
    <p><strong>Next</strong><br/>appointments</p>
</div>
        </li>
       
        <li className="appointments_timeline_list_item">   
<p className="mounth">Jun</p>
<h4 className="day">26</h4>
<p className="status"></p>
        </li>
        <li className="appointments_timeline_list_item">   
<p className="mounth">Jul</p>
<h4 className="day">15</h4>
<p className="status"></p>
        </li>
        <li className="appointments_timeline_list_item">   
<p className="mounth">Aug</p>
<h4 className="day">20</h4>
<p className="status"></p>
        </li>
        <li className="appointments_timeline_list_item">   
<p className="mounth">Sep</p>
<h4 className="day">20</h4>
<p className="status"></p>
        </li>

      </ul>
         </div>
         <div className="appointments_details">
          <h3 className="appointments_details_head">Appointments Details</h3>
        <div className={"appointments_details_body"}>

        <div className={"appointments_details_dentist"}>
<img src={dentistIcon} alt="avatar" className="avatar"/>
<div className={"appointments_details_info"}>
<p>Dentist</p>
<p><strong>Poxos Poxosyan</strong></p>
<p>Thearpy</p>
        </div>
        <p>Tooth Removing</p>
        <img src={clinicAvatar} alt="avatar" className="avatar"/>
        <div>
            <h3>25 May</h3>
            <p>10:30pm</p>
        </div>
        <div className="next_appointment">
    <p><strong>Next</strong><br/>appointments</p>
        </div>
        </div> 
        </div> 
        </div> 
         </div>

         </div>
         </div>
            </PatientWrapper>
        );
    }
}

export default PatientDashboard;


