import React, {Component} from "react";
import Wrapper from "../../components/dentist_dashboard/DentistWrapper";
import {Table, Button, Tag} from "antd";
// import {ReactSVG} from "react-svg";
// import svg from "../../assets/images/Dent.svg";
// import "antd/dist/Linkntd.css";
import {Link} from "react-router-dom";
import DentistAppointmentsTable from "../../components/tables/DentistAppointmentsTable";
import DentistWrapper from "../../components/dentist_dashboard/DentistWrapper";
import DentistHeader from "../../components/dentist_dashboard/DentistHeader";
class DentistDashboard extends Component {
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
            <DentistWrapper>
                    <div className="content ml">
                    <DentistHeader/>
    <div className="appointments__manage">
        <div className=" appointments__manage__btns">
            <div className="appointments__manage__btn">
                <div className="icon">
                    <i className="fas fa-plus-circle"></i>
                </div>
                <p>Add patient</p>
                <i className="fas fa-hospital-user"></i>
            </div>
            <div className="appointments__manage__btn">
                <div className="icon">
                    <i className="fas fa-plus-circle"></i>
                </div>
                <p>Add appointment</p>
                <i className="fas fa-calendar-plus"></i>
            </div>
            <div className="appointments__manage__btn">
                <div className="icon">
                    <i className="fas fa-plus-circle"></i>
                </div>
                <p>Add payment</p>
                <i className="fas  fa-money-bill-alt"></i>
            </div>
        </div>
        <div className="table_container">
         
        <DentistAppointmentsTable/>
        </div>
    </div>
    </div>
            </DentistWrapper>
        );
    }
}

export default DentistDashboard;


