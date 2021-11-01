import {
    GET_ALL_USERS,

} from "../actions/manager/AllClinicUsers";


const initialState = {
    addDentistModalShow:false,
    result: {},
    allDentists: {},
    errors: {},
    userError: '',
    status: '',
};

export default function reducer(state = initialState, action) {
    switch (action.type) {


        case GET_ALL_USERS.REQUEST:{
            console.log(action, 'request')
            return{
                ...state,
            }
        }
        case GET_ALL_USERS.SUCCESS:{
            console.log(action, 'success')
            return{
                ...state,
            }
        }

        default: {
            return state;
        }

    }
}