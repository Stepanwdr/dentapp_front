import {
    ADD_APPOINTMENT,
    ADD_APPOINTMENT_MODAL,
} from "../actions/Appointments";


const initialState = {
    addAppointmentModalShow:false,
    result: {},
    allappintments: {},
    errors: {},
    userError: '',
    status: '',
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case  ADD_APPOINTMENT_MODAL: {
            const {addAppointmentModalShow} = action.payload


            return {
                ...state,
                addAppointmentModalShow:!addAppointmentModalShow
            }
        }

        case ADD_APPOINTMENT.REQUEST:{
            const{status}=action
            console.log(action, 'request')
            return{
                ...state,
                status
            }
        }


        case ADD_APPOINTMENT.SUCCESS:{
            const{status}=action
            console.log(action, 'success')
            return{
                ...state,
                status
            }
        }

        case ADD_APPOINTMENT.FAIL:{
            const{status}=action

            console.log(action, 'fail')
            return{
                ...state,
                status
            }
        }

        default: {
            return state;
        }

    }
}