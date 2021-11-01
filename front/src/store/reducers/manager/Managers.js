// import {
//     ADD_MANAGER,
//     GET_MANAGERS,
//     EDIT_MANAGER,
//     DELETE_MANAGER,
//     ADD_MANAGER_TOGGLE_MODAL,
//     INFO_MANAGER_TOGGLE_MODAL,
// } from "../../actions/manager/Managers";
//
// const initialState = {
//     managerModalShow:false,
//     result: {},
//     MANAGERsData: {},
//     errors: {},
//     userError: '',
//     status: '',
// };
//
// export default function reducer(state = initialState, action) {
//     switch (action.type) {
//         case ADD_MANAGER_TOGGLE_MODAL:{
//             const {managerModalShow}=action.payload
//             return{
//                 ...state,
//                 managerModalShow:!managerModalShow
//             }
//         }
//         case INFO_MANAGER_TOGGLE_MODAL:{
//             const {managerModalShow}=action.payload
//             return{
//                 ...state,
//                 managerModalShow:!managerModalShow
//             }
//         }
//
//         case ADD_MANAGER.REQUEST:{
//             console.log(action, 'request')
//             return{
//                 ...state,
//             }
//         }
//         case ADD_MANAGER.SUCCESS:{
//             console.log(action, 'success')
//             return{
//                 ...state,
//             }
//         }
//         case ADD_MANAGER.FAIL:{
//             console.log(action, 'fail')
//             return{
//                 ...state,
//             }
//         }
//         case EDIT_MANAGER.REQUEST:{
//             console.log(action, 'request')
//             return{
//                 ...state,
//             }
//         }
//         case EDIT_MANAGER.SUCCESS:{
//             console.log(action, 'success')
//             return{
//                 ...state,
//             }
//         }
//         case EDIT_MANAGER.FAIL:{
//             console.log(action, 'fail')
//             return{
//                 ...state,
//             }
//         }
//         case GET_MANAGERS.REQUEST:{
//             console.log(action, 'request')
//             return{
//                 ...state,
//             }
//         }
//         case GET_MANAGERS.SUCCESS:{
//             console.log(action, 'success')
//             return{
//                 ...state,
//             }
//         }
//         case DELETE_MANAGER.REQUEST:{
//             console.log(action, 'fail')
//             return{
//                 ...state,
//             }
//         }
//         case DELETE_MANAGER.SUCCESS:{
//             console.log(action, 'success')
//             return{
//                 ...state,
//             }
//         }
//         case DELETE_MANAGER.FAIL:{
//             console.log(action, 'fail')
//             return{
//                 ...state,
//             }
//         }
//         default: {
//             return state;
//         }
//
//     }
// }