// import Api from '../../../Api';
// import {define} from '../../../helpers/redux-request';
//
// //Managers Modals
//
// export const ADD_MANAGER_TOGGLE_MODAL = "ADD_Manager-TOGGLE_MODAL";
// export function addManagerToggleModal(addManagerModalShow) {
//     return {
//         type: ADD_MANAGER_TOGGLE_MODAL,
//         payload: {
//             addManagerModalShow
//         }
//     }
// }
// export const INFO_MANAGER_TOGGLE_MODAL = "INFO_Manager_TOGGLE_MODAL";
// export function infoManagerToggleModal(infoManagerModalShow) {
//     return {
//         type: INFO_MANAGER_TOGGLE_MODAL,
//         payload: {
//             infoManagerModalShow
//         }
//     }
// }
// export const EDIT_MANAGER_TOGGLE_MODAL = "EDIT_MANAGER_TOGGLE_MODAL";
// export function editManagerToggleModal(editManagerModalShow) {
//     return {
//         type:EDIT_MANAGER_TOGGLE_MODAL,
//         payload: {
//             editManagerModalShow
//         }
//     }
// }
// export const DELETE_MANAGER_TOGGLE_MODAL = "DELETE_MANAGER_TOGGLE_MODAL";
// export function deleteManagerToggleModal( deleteManagerModalShow) {
//     return {
//         type:DELETE_MANAGER_TOGGLE_MODAL,
//         payload: {
//             deleteManagerModalShow
//         }
//     }
// }
// //Managers Requests
//
// export const ADD_MANAGER = define("ADD_Manager");
// export function addSingleManager(formData) {
//     return ADD_MANAGER.request(() => Api.addSingleManager(formData)).takeLatest()
// }
//
// export const EDIT_MANAGER = define("EDIT_Manager");
// export function editSingleManager(formData) {
//     return EDIT_MANAGER.request(() => Api.editSingleManager(formData)).takeLatest()
// }
// export const DELETE_MANAGER = define("DELETE_Manager");
//
// export function deleteSingleManager(id) {
//     return DELETE_MANAGER.request(() => Api.deleteSingleManager(id)).takeLatest()
// }
//
// export const GET_MANAGERS = define("GET_ManagerS");
// export function getManagers(ManagersCount) {
//     return GET_MANAGERS.request(() => Api.getManagers(ManagersCount)).takeLatest()
// }
//
//
//
//
//
