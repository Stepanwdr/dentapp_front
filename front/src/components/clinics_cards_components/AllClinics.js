import React, {Component} from 'react';
import _ from "lodash";
import {Row, Col, Card, Button} from "antd";
import SingleClinicCard from "./SingleClinicCard";
import { getClinics} from "../../store/actions/manager/Clinics";
import {connect} from "react-redux";
class AllClinicsComponent extends Component {
    constructor(props) {
        super(props);
    }
componentDidMount() {
        this.props.getClinics()
}

    render() {
        const{allclinics}=this.props
        console.log(allclinics,5-9)
        return (
                <Row>
                    {_.map(allclinics,clinic=>(
                 <SingleClinicCard clinic={clinic} key={clinic.id}/>
                    ))
                    }
                </Row>
        );
    }
}


const mapStateToProps = (state) => ({
    addClinicModalShow: state.Clinics.addClinicModalShow,
    status: state.Clinics.status,
    errors: state.Clinics.errors,
    allclinics:state.Clinics.allclinics
});

const mapDispatchToProps = {
    getClinics
};
const ClinicContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AllClinicsComponent);

export default ClinicContainer;
