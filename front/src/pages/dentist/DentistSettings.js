import React, {Component} from 'react';
import dentistIcon from "../../assets/images/dashboard/dentist__icon.png";
import DentistWrapper from "../../components/dentist_dashboard/DentistWrapper";

class Settings extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <DentistWrapper>
                <div className="container settings__container">
                    <div className="content ml left__side">
                        <div className="profile__box">
                            <div className="profile__info">
                                <img src={dentistIcon} alt="avatar" className="profile__avatar"/>
                                <div className="user__info">

                                </div>
                            </div>
                            <div className="login__details">
                                <h4>LOGIN DETAILS</h4>
                                <label className="login__details__label">Old password</label>
                                <input className="login__details__inputs" type="password"/>
                                <label className="login__details__label">New password</label>
                                <input className="login__details__inputs" type="password"/>
                                <label className="login__details__label">Confirm password</label>
                                <input className="login__details__inputs" type="password"/>
                                <button className="btn__change">change</button>
                            </div>
                        </div>
                    </div>
                    <div className="content ml right__side">
                        <div className="personal__details">
                            <h3>DENTIST PERSONAL DETAILS</h3>
                            <label className="personal__details__label">Name</label>
                            <input className="personal__details__input" type="name"/>
                            <label className="personal__details__label">First name</label>
                            <input className="personal__details__input" type="name"/>
                            <label className="personal__details__label">Email</label>
                            <input className="personal__details__input" type="email"/>
                            <label className="personal__details__label">Phone</label>
                            <input className="personal__details__input" type="phone"/>
                            <button className="btn__save">save</button>
                        </div>
                    </div>
                </div>
            </DentistWrapper>
        );
    }
}

export default Settings;
