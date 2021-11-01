import Api from '../../Api';
import {define} from '../../helpers/redux-request';

//Patients Modals

export const ADD_PATIENT_TOGGLE_MODAL = "ADD_PATIENT_TOGGLE_MODAL";
export function addPatientToggleModal(addPatientModalShow) {
    return {
        type: ADD_PATIENT_TOGGLE_MODAL,
        payload: {
            addPatientModalShow
        }
    }
}
export const INFO_PATIENT_TOGGLE_MODAL = "INFO_PATIENT_TOGGLE_MODAL";
export function infoPatientToggleModal(infoPatientModalShow) {
    return {
        type: INFO_PATIENT_TOGGLE_MODAL,
        payload: {
            infoPatientModalShow
        }
    }
}
export const EDIT_PATIENT_TOGGLE_MODAL = "EDIT_PATIENT-TOGGLE_MODAL";
export function editPatientToggleModal(editPatientModalShow) {
    return {
        type:EDIT_PATIENT_TOGGLE_MODAL,
        payload: {
            editPatientModalShow
        }
    }
}
export const DELETE_PATIENT_TOGGLE_MODAL = "EDIT_PATIENT-TOGGLE_MODAL";
export function deletePatientToggleModal( deletePatientModalShow) {
    return {
        type:DELETE_PATIENT_TOGGLE_MODAL,
        payload: {
            deletePatientModalShow
        }
    }
}
//Patients Requests


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





