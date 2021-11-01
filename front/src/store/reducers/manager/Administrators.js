import {
    ADD_ADMIN,
    GET_ADMINS,
    EDIT_ADMIN,
    DELETE_ADMIN,
    ADD_ADMIN_TOGGLE_MODAL,
    INFO_ADMIN_TOGGLE_MODAL,
} from "../../actions/manager/Administrators";

const initialState = {
    addAdminModalShow:false,
    result: {},
    adminData: {},
    errors: {},
    userError: '',
    status: '',
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ADMIN_TOGGLE_MODAL:{
            const {addAdminModalShow}=action.payload
            return{
                ...state,
                addAdminModalShow:!addAdminModalShow
            }
        }
        case INFO_ADMIN_TOGGLE_MODAL:{
            const {infoAdminModalShow}=action.payload
            return{
                ...state,
                infoAdminModalShow:!infoAdminModalShow
            }
        }

        case ADD_ADMIN.REQUEST:{
            console.log(action, 'request')
            return{
                ...state,
            }
        }
        case ADD_ADMIN.SUCCESS:{
            console.log(action, 'success')
            return{
                ...state,
            }
        }
        case ADD_ADMIN.FAIL:{
            console.log(action, 'fail')
            return{
                ...state,
            }
        }
        case EDIT_ADMIN.REQUEST:{
            console.log(action, 'request')
            return{
                ...state,
            }
        }
        case EDIT_ADMIN.SUCCESS:{
            console.log(action, 'success')
            return{
                ...state,
            }
        }
        case EDIT_ADMIN.FAIL:{
            console.log(action, 'fail')
            return{
                ...state,
            }
        }
        case GET_ADMINS.REQUEST:{
            console.log(action, 'request')
            return{
                ...state,
            }
        }
        case GET_ADMINS.SUCCESS:{
            console.log(action, 'success')
            return{
                ...state,
            }
        }
        case DELETE_ADMIN.REQUEST:{
            console.log(action, 'fail')
            return{
                ...state,
            }
        }
        case DELETE_ADMIN.SUCCESS:{
            console.log(action, 'success')
            return{
                ...state,
            }
        }
        case DELETE_ADMIN.FAIL:{
            console.log(action, 'fail')
            return{
                ...state,
            }
        }
        default: {
            return state;
        }

    }
}