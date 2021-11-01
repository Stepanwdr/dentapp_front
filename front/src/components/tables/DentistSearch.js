import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    editClinicToggleModal,
    getClinics,
} from "../../store/actions/manager/Clinics"
import _ from "lodash";

class DentistSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
           searchValue:""
        }
    }

    handleChange=(searchFilled,ev)=>{
        let searchValue=ev.target.value
        this.setState({searchValue})
            let{formData}=this.props
        _.set(formData,searchFilled,searchValue)
      this.props.getClinics(formData)
    }
    render() {
        const {searchValue} = this.state
        const {searchFilled}=this.props
        return (
            <div className={"input-group"}>
                <div className={"input-group-prepend"}></div>
                <input type={"text"} 
                className={"form-control"}
                 placeholder="Search by" 
                 onChange={(ev)=>this.handleChange(searchFilled,ev)}
                 value={searchValue}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    clinicData:state.Clinics.clinicData,
    formData:state.Clinics.formData
})

const mapDispatchToProps = {
    getClinics,
}

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(DentistSearch)

export default Container;