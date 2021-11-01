import React, {Component} from "react";
import {Link} from "react-router-dom";
class PatientHeader extends Component {
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
        return (
                        <div className="row info__tabs">
                              <div className="box served__appointments__info__box">
                                    <div className="box__inner">
                                         <h3>0</h3>
                                         <p>Now is served</p>
                                           <div className="icon">
                                               <i className="fas  fa-calendar-alt"></i>
                                  </div>
                                      </div>
                               <Link to="">view more <i className="fas fa-arrow-circle-right"></i></Link>
                           </div>
                        
                        <div className="box pending__appointments__info__box">
                            <div className="box__inner">
                                <h3>0</h3>
                                <p>Pending Appointment</p>
                                <div className="icon">
                                <i className="fas  fa-user-alt"></i>
                                </div>
                            </div>
                            <Link to="">view more <i className="fas fa-arrow-circle-right"></i></Link>
                        </div>
                       
                        <div className="box overdue__appointments__info__box">
                            <div className="box__inner">
                                <h3>0</h3>
                                <p>Appointmnets For Overdue</p>
                                <div className="icon">
                                    <i className="fas  fa-phone"></i>
                                </div>
                            </div>
                            <Link to="">view more <i className="fas fa-arrow-circle-right"></i></Link>
                        </div>
                        <div className="box completed__appointments__info__box">
                            <div className="box__inner">
                                <h3>0</h3>
                                <p>Completed Appointments</p>
                                <div className="icon">
                                    <i className="fas  fa-calendar-check"></i>
                                </div>
                            </div>
                            <Link to="">view more <i className="fas fa-arrow-circle-right"></i></Link>
                        </div>
                           </div>
        
     
        );
    }
}
export default PatientHeader


