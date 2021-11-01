import {
    ADD_DENTIST,
    GET_DENTISTS,

    ADD_DENTIST_TOGGLE_MODAL,
    INFO_DENTIST_TOGGLE_MODAL,
} from "../actions/Dentists";


const initialState = {
    result: {},
    alldentists: {},
    errors: {},
    userError: '',
    status: '',
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_DENTIST_TOGGLE_MODAL:{
            const {addDentistModalShow}=action.payload
            return{
                ...state,
                addDentistModalShow:!addDentistModalShow
            }
        }
        case INFO_DENTIST_TOGGLE_MODAL:{
            const {infoDentistModalShow}=action.payload
            return{
                ...state,
                infoDentistModalShow:!infoDentistModalShow
            }
        }


        case ADD_DENTIST.REQUEST:{
            console.log(action, 'request')
            return{
                ...state,
            }
        }




        case ADD_DENTIST.FAIL:{
            const{errors}=action.payload
            console.log(action, 'fail')
            return{
                ...state,
                errors
            }
        }


        case GET_DENTISTS.REQUEST:{
            const {status}=action
            console.log(action, status,8-9)
            return {
                ...state,
                status
            }
        }

        case GET_DENTISTS.SUCCESS:{
            const{list}=action.payload.data
            const{status}=action
            console.log(action, 'success')
            return{
                ...state,
                alldentists:list,
                status
            }
        }
        case GET_DENTISTS.FAIL:{
            const{errors}=action.payload.data
            console.log(action, 'success')
            return{
                ...state,
                errors
            }
        }


/*
        case EDIT_DENTIST.REQUEST:{
            console.log(action, 'request')
            return{
                ...state,
            }
        }
        case EDIT_DENTIST.SUCCESS:{
            console.log(action, 'success')
            return{
                ...state,
            }
        }
        case EDIT_DENTIST.FAIL:{
            console.log(action, 'fail')
            return{
                ...state,
            }
        }


        case DELETE_DENTIST.SUCCESS:{
            console.log(action, 'success')
            return{
                ...state,
            }
        }*/
        default: {
            return state;
        }

    }
}