import React, {Component,Fragment} from "react";
import {NavLink,Link} from "react-router-dom";
import logo from "../../assets/images/dashboard/logo.png";
import dentistIcon from "../../assets/images/dashboard/dentist__icon.png";
import {connect} from "react-redux";
import {Navbar} from "react-bootstrap";
import {addClinicToggleModal} from "../../store/actions/manager/Clinics";
import {addAdminToggleModal} from "../../store/actions/manager/Administrators";
import {addDentistToggleModal} from "../../store/actions/Dentists";
import {addPatientToggleModal} from "../../store/actions/Patients";
import EditClinicModalForm from "../modals/edit-clinic-modal-form";
import AddClinicModalForm from "../modals/add-clinic-modal-form";
import AddAdminModalForm from "../modals/add-admin-modal-form";
import AddDentistModalForm from "../modals/add-dentist-modal-form";
import InfoClinicModalForm from "../modals/info-clinic-modal";
import AddPatientModalForm from "../modals/add-patient-modal-form";
import {withRouter} from "react-router-dom";
class ManagerWrapper extends Component {
    render() {
        return (
            <Fragment>
                <Navbar bg="light" expand="lg" className="header ml " >
                    <Navbar.Toggle />
                    <Navbar.Collapse className="navbar_toggle" >
                        <div className="search">
                            <input type="text" placeholder="Search clinics"/>
                            <button type="submit" className="search__btn"><i className="fas fa-search"></i></button>
                        </div>
                        <button className="add__btn" onClick={()=>this.props.addClinicToggleModal(this.props.addClinicModalShow)}>
                            <i className="fas fa-calendar-plus" ></i>Add Clinics</button>
                        <div className="user">
                            <img src={dentistIcon} alt="avatar" className="avatar"/>
                                <div className="user__info">
                                    <p className="user__name">Stepan Manukyan</p>
                                    <p className="user__special">
                                        Manager
                                    </p>
                                </div>
                        </div>
                        <div className="header__nav__link">
                            <NavLink to=""><i className="fas fa-bell"></i></NavLink>
                            <NavLink to=""><i className="fas fa-globe-europe"></i></NavLink>
                            <NavLink to=""><i className="fas fa-sign-out-alt"></i></NavLink>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
                <nav className="sidebar ">
                    <div className="logo" id="logo">
                        <NavLink to="/">
                            <img src={logo} alt="logo"/>
                                <p className="logo__text">DentApp</p>
                        </NavLink>
                    </div>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/manager" className="nav__link"><i
                                className="fas fa-clinic-medical"></i><span>My Dasboard</span></Link>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/manager/clinics" className="nav__link"><i className="fas fa-hospital-user"></i><span>Clinics</span></NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/manager/admins" className="nav__link"><i className="fas fa-user-nurse"></i><span>Admins</span></NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/manager/dentists" className="nav__link"><i className="fas fa-user-md"></i><span>Dentists</span></NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/manager/patients" className="nav__link"><i className="fas fa-user-alt"></i><span>Patients</span></NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/manager" className="nav__link"><i className="betaIcon">beta</i><i
                                className="fas fa-money-check-alt"></i><span>Finance</span></NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/manager" className="nav__link"><i className="betaIcon">beta</i><i className="fas fa-user-cog"></i><span>Profile</span></NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/manager" className="nav__link"><i className="betaIcon">beta</i><i className="fas fa-cogs"></i><span>Settings</span></NavLink>
                        </li>

                    </ul>
                </nav>
                {this.props.children}
                <AddClinicModalForm/>
                <AddAdminModalForm/>
                <AddDentistModalForm/>
                 <AddPatientModalForm/>
                <EditClinicModalForm/>
                <InfoClinicModalForm/>
            </Fragment>
        );
    }}


    const mapStateToProps=(state)=>({
        addClinicModalShow:state.Clinics.addClinicModalShow,
        addAdminModalShow:state.Administrators.addAdminModalShow,
        addDentistModalShow:state.Dentists.addDentistModalShow,
        addPatientModalShow:state.Patients.addPatientModalShow,
    });
    
    const mapDispatchToProps={
        addClinicToggleModal,
    addAdminToggleModal,
    addDentistToggleModal,
    addPatientToggleModal,
    };
    const Container=connect(
        mapStateToProps,
        mapDispatchToProps
    )(ManagerWrapper);
    
    export default withRouter(Container);
    