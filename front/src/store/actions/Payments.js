import Api from '../../Api';
import {define} from '../../helpers/redux-request';

//Payments

export const ADD_PAYMENTS_MODAL = "ADD_PAYMENTS_MODAL";
export function addPaymentsModal(addPaymentsModalShow) {
    return {
        type: ADD_PAYMENTS_MODAL,
        payload: {
            addPaymentsModalShow
        }
    }
}
export const SELECT_NOTES_FOR_PAYMENT="SELECT_NOTES_FOR_PAYMENT";
export function selectNotesForPaymentsModal(selectNotesForPaymentsModalShow) {
   
    return {
        type:  SELECT_NOTES_FOR_PAYMENT,
        payload: {
            selectNotesForPaymentsModalShow
        }
    }
}



//Payments Requests


export const ADD_PATIENT = define("ADD_PATIENT");
export function addSinglePatient(formData) {
    return ADD_PATIENT.request(() => Api.addSinglePatient(formData)).takeLatest()
}

export const EDIT_PATIENT = define("EDIT_PATIENT");
export function editSinglePatient(formData) {
    return EDIT_PATIENT.request(() => Api.editSinglePatient(formData)).takeLatest()
}
export const DELETE_PATIENT = define("DELETE_PATIENT");

export function deleteSinglePatient(id) {
    return DELETE_PATIENT.request(() => Api.deleteSinglePatient(id)).takeLatest()
}

export const GET_PATIENTS = define("GET_PATIENTS");
export function getPatients(patientsCount) {
    return GET_PATIENTS.request(() => Api.getPatients(patientsCount)).takeLatest()
}





