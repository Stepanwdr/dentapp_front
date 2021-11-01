import React, {Component,Fragment} from "react";
import {NavLink,Link} from "react-router-dom";
import logo from "../../assets/images/dashboard/logo.png";
import dentistIcon from "../../assets/images/dashboard/dentist__icon.png";
import { Navbar} from "react-bootstrap";
class DentistWrapper extends Component {
    render() {
        return (
            <Fragment >
                <Navbar bg="light" expand="lg" className="header ml " >
                    <Navbar.Toggle />
                    <Navbar.Collapse className="navbar_toggle" >
                        <div className="search">
                            <input type="text" placeholder="Search patient"/>
                            <button type="submit" className="search__btn"><i className="fas fa-search"></i></button>
                        </div>
                        <button className="add__btn"><i className="fas fa-calendar-plus"></i>Add appointment</button>
                        <div className="user">
                            <img src={dentistIcon} alt="avatar" className="avatar"/>
                                <div className="user__info">
                                    <p className="user__name">Poxos Poxosyan</p>
                                    <p className="user__special">
                                        Therapy
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
                            <Link to="/dentist" className="nav__link"><i
                                className="fas fa-clinic-medical"></i><span>My Dasboard</span></Link>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/dentist/patients" className="nav__link"><i className="fas fa-users"></i><span>My
                                Patients</span></NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/dentist/appointments" className="nav__link"><i className="fas fa-calendar-alt"></i><span>Appointments</span></NavLink>
                        </li>

                        <li className="nav__item">
                            <NavLink to="/dentist" className="nav__link"><i className="betaIcon">beta</i><i
                                className="fas fa-money-check-alt"></i><span>Finance</span></NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/dentist" className="nav__link"><i className="betaIcon">beta</i><i className="fas fa-user-cog"></i><span>Profile</span></NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/dentist/settings" className="nav__link"><i className="betaIcon">beta</i><i className="fas fa-cogs"></i><span>Settings</span></NavLink>
                        </li>

                    </ul>
                </nav>
                {this.props.children}

            </Fragment>
        );
    }}


export default DentistWrapper;