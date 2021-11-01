import React, {Component} from 'react';
import _ from "lodash";
import {Row, Col, Card, Button} from "antd";
import SingleDentistCard from "./SingleDentistCard"
import {getDentistByClinic} from "../../store/actions/Dentists";
import {connect} from "react-redux";

class AllDentists extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getDentistByClinic()
    }

    render() {
        const{alldentists}=this.props
        return (
            <Row>
                {_.map(alldentists,dentist=>(
                    <SingleDentistCard dentist={dentist} key={dentist.id}/>
                ))
                }
            </Row>
        );
    }
}


const mapStateToProps = (state) => ({
    status: state.Dentists.status,
    errors: state.Dentists.errors,
    alldentists:state.Dentists.alldentists
});

const mapDispatchToProps = {
    getDentistByClinic
};
const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(AllDentists);

export default Container;
