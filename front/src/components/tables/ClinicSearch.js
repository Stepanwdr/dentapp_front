import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    editClinicToggleModal,
    getClinics,

} from "../../store/actions/manager/Clinics"
import _ from "lodash";

class PatientsSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
           searchValue:""
        }
    }

    handleChange=async(searchFilled,ev)=>{
        let searchValue=ev.target.value
        this.setState({searchValue:[...searchValue,searchValue]})
            let{formData}=this.props

        console.log(_.set(formData,searchFilled,searchValue))
      await this.props.getClinics(formData)
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
)(PatientsSearch)

export default Container;