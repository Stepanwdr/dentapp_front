import React, {Component} from "react";
import ManagerWrapper from "../../components/manager_dashboard/ManagerWrapper"
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getClinics} from "../../store/actions/manager/Clinics";
import {getDentistByClinic}from "../../store/actions/Dentists"
class ManagerHeader extends Component {
  
    constructor(props) {
        super(props);
    }
    async componentDidMount(){
await this.props.getClinics()
        await this.props.getDentistByClinic()
    }
    render() {
        const {allclinics,alldentists} = this.props;
        return (
                    <div className="row info__tabs">
                        <div className="box total__patients__info__box">
                            <div className="box__inner">
                                <h3>{allclinics.length}</h3>
                                <p>Total Clinics</p>
                                <div className="icon">
                                <i className="fas fa-hospital-user"></i>
                                </div>
                            </div>
                            <Link to="/manager/clinics">view more <i className="fas fa-arrow-circle-right"></i></Link>
                        </div>
                        <div className="box  total_admin_info_box">
                            <div className="box__inner">
                                <h3>{allclinics.length}</h3>
                                <p>Total Administrators</p>
                                <div className="icon">
                                <i className="fas fa-user-nurse"></i>
                                </div>
                            </div>
                            <Link to="/manager/admins">view more <i className="fas fa-arrow-circle-right"></i></Link>
                        </div>
                        <div className="box">
                            <div className="box__inner">
                                <h3>{alldentists.length}</h3>
                                <p>Total Dentists</p>
                                <div className="icon">
                                <i className="fas  fa-user-md"></i>
                                </div>
                            </div>
                            <Link to="/manager/dentists">view more <i className="fas fa-arrow-circle-right"></i></Link>
                        </div>
                        <div className="box total__patients__info__box">
                            <div className="box__inner">
                                <h3>{allclinics.length}</h3>
                                <p>Total Patients</p>
                                <div className="icon">
                                    <i className="fas  fa-user-alt"></i>
                                </div>
                            </div>
                            <Link to="/manager/patients">view more <i className="fas fa-arrow-circle-right"></i></Link>
                        </div>
                    </div>
                        
        );
    }
}

const mapStateToProps=(state)=>({
    allclinics:state.Clinics.allclinics,
    alldentists:state.Dentists.alldentists
});
const mapDispatchToProps={
    getClinics,
    getDentistByClinic,

};
const Container=connect(
    mapStateToProps,
    mapDispatchToProps
)(ManagerHeader);

export default Container;
