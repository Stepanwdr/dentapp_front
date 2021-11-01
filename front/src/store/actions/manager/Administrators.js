import Api from '../../../Api';
import {define} from '../../../helpers/redux-request';

//Administrators Modals

export const ADD_ADMIN_TOGGLE_MODAL = "ADD_ADMIN-TOGGLE_MODAL";
export function addAdminToggleModal(addAdminModalShow) {
    return {
        type: ADD_ADMIN_TOGGLE_MODAL,
        payload: {
            addAdminModalShow
        }
    }
}
export const INFO_ADMIN_TOGGLE_MODAL = "INFO_ADMIN_TOGGLE_MODAL";
export function infoAdminToggleModal(infoAdminModalShow) {
    return {
        type: INFO_ADMIN_TOGGLE_MODAL,
        payload: {
            infoAdminModalShow
        }
    }
}
export const EDIT_ADMIN_TOGGLE_MODAL = "EDIT_ADMIN-TOGGLE_MODAL";
export function editAdminToggleModal(editAdminModalShow) {
    return {
        type:EDIT_ADMIN_TOGGLE_MODAL,
        payload: {
            editAdminModalShow
        }
    }
}
export const DELETE_ADMIN_TOGGLE_MODAL = "EDIT_ADMIN-TOGGLE_MODAL";
export function deleteAdminToggleModal( deleteAdminModalShow) {
    return {
        type:DELETE_ADMIN_TOGGLE_MODAL,
        payload: {
            deleteAdminModalShow
        }
    }
}
//Admins Requests


export const ADD_ADMIN = define("ADD_ADMIN");
export function addSingleAdmin(formData) {
    return ADD_ADMIN.request(() => Api.addSingleAdmin(formData)).takeLatest()
}

export const EDIT_ADMIN = define("EDIT_ADMIN");
export function editSingleAdmin(formData) {
    return EDIT_ADMIN.request(() => Api.editSingleAdmin(formData)).takeLatest()
}
export const DELETE_ADMIN = define("DELETE_ADMIN");

export function deleteSingleAdmin(id) {
    return DELETE_ADMIN.request(() => Api.deleteSingleAdmin(id)).takeLatest()
}

export const GET_ADMINS = define("GET_ADMINS");
export function getAdmins(adminsCount) {
    return GET_ADMINS.request(() => Api.getAdmins(adminsCount)).takeLatest()
}





