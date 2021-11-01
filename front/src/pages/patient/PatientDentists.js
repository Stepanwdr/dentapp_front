import React, {Component} from 'react';
import PatientWrapper from "../../components/patient_dashboard/PatientWrapper";
import AllDentists from "../../components/dentists_cards_components/AllDentists";

class PatientDentists extends Component {
    render() {
        return (
            <PatientWrapper>
                <div className={'content ml'}>
         <AllDentists/>
                </div>



            </PatientWrapper>
        );
    }
}

export default PatientDentists;