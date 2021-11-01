import Api  from "../../Api";
import {define }from "../../helpers/redux-request"
export const PATIENT_TOOTH_MODAL = "PATIENT_TOOTH_MODAL";

export function patientToothChartModal(patientToothChartModalShow) {
    return {
        type: PATIENT_TOOTH_MODAL,
        payload: {
            patientToothChartModalShow,
        }
    }
}




export const ADD_TOOTH_NOTES_MODAL = "ADD_TOOTH_NOTES_MODAL";

export function addToothsNotesModal(addToothsNotesModalShow) {
    return {
        type: ADD_TOOTH_NOTES_MODAL,
        payload: {
            addToothsNotesModalShow,

        }
    }
}
export const ADD_TOOTH_NOTES = "ADD_TOOTH_NOTES";

export function addToothNotesToChart(addToothsNotesModalShow) {
    return {
        type: ADD_TOOTH_NOTES,
        payload: {
            addToothsNotesModalShow,
           
        }
    }
}



export const PATIENT_HEALTH_CHART="PATIENT_HEALTH_CHART";
export function getHealthChart(patientData) {
    return {
        type:  PATIENT_HEALTH_CHART,
        payload: {
            patientData
        }
    }
}




export const SELECT_NOTES_FOR_PAYMENTS_MODAL="SELECT_NOTES_FOR_PAYMENTS_MODAL";
export function selectNotesForPaymentsModal(patientData) {
    return {
        type:  SELECT_NOTES_FOR_PAYMENTS_MODAL,
        payload: {
            patientData
        }
    }
}










//Tooth Chart Modals




//Tooth Chart Requests
export const ADD_TOOTHS_TO_TREATHMENTS = define("ADD_TOOTH_NOTES");
export function addToothsToTreatments(formData) {
    return ADD_TOOTHS_TO_TREATHMENTS.request(() => Api.addToothsToTreatments(formData)).takeLatest()
}


export const GET_TOOTH_NOTES = define("GET_TOOTH_NOTES");

export function getToothNotes(formData) {
    return GET_TOOTH_NOTES.request(() => Api.getToothNotes(formData)).takeLatest()
}


export const EDIT_TOOTH_NOTES = define("EDIT_TOOTH_NOTES");

export function editToothNotes(formData) {
    return EDIT_TOOTH_NOTES.request(() => Api.editToothNotes(formData)).takeLatest()
}


export const DELETE_TOOTH_NOTES = define("DELETE_TOOTH_NOTES");

export function deleteToothNotes(id) {
    return DELETE_TOOTH_NOTES.request(() => Api.deleteToothNotes(id)).takeLatest()
}







