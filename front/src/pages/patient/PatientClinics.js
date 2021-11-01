import React, {Component} from 'react';
import PatientWrapper from "../../components/patient_dashboard/PatientWrapper";
import AllClinics from "../../components/clinics_cards_components/AllClinics";

class PatientClinics extends Component {
    render() {
        return (
            <PatientWrapper>
            <div className={'content ml'}>
                <AllClinics/>
            </div>



            </PatientWrapper>
        );
    }
}

export default PatientClinics;