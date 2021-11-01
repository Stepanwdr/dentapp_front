import Api from '../../../Api';
import {define} from '../../../helpers/redux-request';

//Clinics Modals

export const ADD_CLINIC_TOGGLE_MODAL = "ADD_CLINIC_TOGGLE_MODAL";

export function addClinicToggleModal(addClinicModalShow) {
    return {
        type: ADD_CLINIC_TOGGLE_MODAL,
        payload: {
            addClinicModalShow
        }
    }
}

export const INFO_CLINIC_TOGGLE_MODAL = "INFO_CLINIC_TOGGLE_MODAL";

export function infoClinicToggleModal(infoClinicModalShow, clinic) {
    return {
        type: INFO_CLINIC_TOGGLE_MODAL,
        payload: {
            infoClinicModalShow,
            clinic
        }
    }
}

export const EDIT_CLINIC_TOGGLE_MODAL = "EDIT_CLINIC-TOGGLE_MODAL";

export function editClinicToggleModal(editClinicModalShow, clinic) {
    return {
        type: EDIT_CLINIC_TOGGLE_MODAL,
        payload: {
            editClinicModalShow,
            clinic
        }
    }
}


//Clinics Requests
export const ADD_CLINIC = define("ADD_CLINIC");

export function addSingleClinic(formData) {
    return ADD_CLINIC.request(() => Api.addSingleClinic(formData)).takeLatest()
}

export const EDIT_CLINIC = define("EDIT_CLINIC");

export function editSingleClinic(formData) {
    return EDIT_CLINIC.request(() => Api.editSingleClinic(formData)).takeLatest()
}

export const DELETE_CLINIC = define("DELETE_CLINIC");

export function deleteSingleClinic(id) {
    return DELETE_CLINIC.request(() => Api.deleteSingleClinic(id)).takeLatest()
}

export const GET_CLINICS = define("GET_CLINICS");

export function getClinics() {
    return GET_CLINICS.request(() => Api.getClinics()).takeLatest()
}




