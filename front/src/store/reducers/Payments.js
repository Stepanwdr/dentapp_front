import {ADD_PAYMENTS_MODAL,SELECT_NOTES_FOR_PAYMENT } from "../actions/Payments";

const initialState = {
    
       }
export default function reducer(state = initialState, action) {

    switch (action.type) {
        case ADD_PAYMENTS_MODAL:{
            const {addPaymentsModalShow}=action.payload
            return{
                ...state,
                addPaymentsModalShow
              
            }
        }
        case SELECT_NOTES_FOR_PAYMENT:{
            const {selectNotesForPaymentsModalShow}=action.payload
            return{
                ...state,
                selectNotesForPaymentsModalShow
              
            }
        }
default:{
    return state
}
    }
}

























