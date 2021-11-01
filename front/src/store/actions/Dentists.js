import Api from '../../Api';
import {define} from '../../helpers/redux-request';

//Dentists Modals

export const ADD_DENTIST_TOGGLE_MODAL = "ADD_DENTIST_TOGGLE_MODAL";
export function addDentistToggleModal(addDentistModalShow) {
    return {
        type: ADD_DENTIST_TOGGLE_MODAL,
        payload: {
            addDentistModalShow
        }
    }
}
export const INFO_DENTIST_TOGGLE_MODAL = "INFO_DENTIST_TOGGLE_MODAL";
export function infoDentistToggleModal(infoDentistModalShow) {
    return {
        type: INFO_DENTIST_TOGGLE_MODAL,
        payload: {
            infoDentistModalShow
        }
    }
}
export const EDIT_DENTIST_TOGGLE_MODAL = "EDIT_DENTIST-TOGGLE_MODAL";
export function editDentistToggleModal(editDentistModalShow) {
    return {
        type:EDIT_DENTIST_TOGGLE_MODAL,
        payload: {
            editDentistModalShow
        }
    }
}
export const DELETE_DENTIST_TOGGLE_MODAL = "EDIT_DENTIST-TOGGLE_MODAL";
export function deleteDentistToggleModal( deleteDentistModalShow) {
    return {
        type:DELETE_DENTIST_TOGGLE_MODAL,
        payload: {
            deleteDentistModalShow
        }
    }
}
//Dentists Requests


export const ADD_DENTIST = define("ADD_DENTIST");
export function registerDentist(formData) {
    return ADD_DENTIST.request(() => Api.registerDentist(formData)).takeLatest()
}

export const GET_DENTISTS = define("GET_DENTISTS");
export function getDentistByClinic(clinicId) {
    return GET_DENTISTS.request(() => Api.getDentistByClinic(clinicId)).takeLatest()
}







/*
export const GET_ALL_USERS = define("GET_ALL_USERS");
export function getClinicUsers(clinicsId) {
    return GET_ALL_USERS.request(() => Api.getClinicUsers(clinicsId)).takeLatest()
}
*/



/*export const EDIT_DENTIST = define("EDIT_DENTIST");
export function editSingleDentist(formData) {
    return EDIT_DENTIST.request(() => Api.editSingleDentist(formData)).takeLatest()
}
export const DELETE_DENTIST = define("DELETE_DENTIST");

export function deleteSingleDentist(id) {
    return DELETE_DENTIST.request(() => Api.deleteSingleDentist(id)).takeLatest()
}*/


