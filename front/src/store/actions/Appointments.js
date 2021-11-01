import Api from '../../Api';
import {define} from '../../helpers/redux-request';

//AppointmentsModal

export const ADD_APPOINTMENT_MODAL = "ADD_APPOINTMENT_MODAL";
export function addAppointmentModal(addAppointmentModalShow) {
    return {
        type: ADD_APPOINTMENT_MODAL,
        payload: {
            addAppointmentModalShow
        }
    }
}


//Appointment  Requests


export const ADD_APPOINTMENT = define("ADD_APPOINTMENT");
export function addAppointment(formData) {
    return ADD_APPOINTMENT.request(() => Api.addAppointment(formData)).takeLatest()
}






