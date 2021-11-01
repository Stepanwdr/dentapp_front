import {
    ADD_PATIENT,
    GET_PATIENTS,
    EDIT_PATIENT,
    DELETE_PATIENT,
    ADD_PATIENT_TOGGLE_MODAL,
    INFO_PATIENT_TOGGLE_MODAL,
} from "../actions/Patients";

const initialState = {
    patientModalShow:false,
    result: {},
    patientData: {},
    errors: {},
    userError: '',
    status: '',
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PATIENT_TOGGLE_MODAL:{
            const {addPatientModalShow}=action.payload
            return{
                ...state,
                addPatientModalShow:!addPatientModalShow
            }
        }
        case INFO_PATIENT_TOGGLE_MODAL:{
            const {infoPatientModalShow}=action.payload
            return{
                ...state,
                infoPatientModalShow:!infoPatientModalShow
            }
        }

        case ADD_PATIENT.REQUEST:{
            console.log(action, 'request')
            return{
                ...state,
            }
        }
        case ADD_PATIENT.SUCCESS:{
            console.log(action, 'success')
            return{
                ...state,
            }
        }
        case ADD_PATIENT.FAIL:{
            console.log(action, 'fail')
            return{
                ...state,
            }
        }
        case EDIT_PATIENT.REQUEST:{
            console.log(action, 'request')
            return{
                ...state,
            }
        }
        case EDIT_PATIENT.SUCCESS:{
            console.log(action, 'success')
            return{
                ...state,
            }
        }
        case EDIT_PATIENT.FAIL:{
            console.log(action, 'fail')
            return{
                ...state,
            }
        }
        case GET_PATIENTS.REQUEST:{
            console.log(action, 'request')
            return{
                ...state,
            }
        }
        case GET_PATIENTS.SUCCESS:{
            console.log(action, 'success')
            return{
                ...state,
            }
        }
        case GET_PATIENTS.FAIL:{
            console.log(action, 'fail')
            return{
                ...state,
            }
        }
        case DELETE_PATIENT.REQUEST:{
            console.log(action, 'request')
            return{
                ...state,
            }
        }
        case DELETE_PATIENT.SUCCESS:{
            console.log(action, 'success')
            return{
                ...state,
            }
        }
        case DELETE_PATIENT.FAIL:{
            console.log(action, 'fail')
            return{
                ...state,
            }
        }
        default: {
            return state;
        }

    }
}