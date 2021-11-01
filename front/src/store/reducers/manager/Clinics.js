import {
    GET_CLINICS,
    ADD_CLINIC_TOGGLE_MODAL,
    INFO_CLINIC_TOGGLE_MODAL,
    EDIT_CLINIC_TOGGLE_MODAL,
    ADD_CLINIC,
} from "../../actions/manager/Clinics";
import logo1 from "../../../assets/images/logo1.png";
import logo2 from "../../../assets/images/logo2.png";
import logo3 from "../../../assets/images/logo3.png";
import _ from "lodash";
const initialState = {
    result: {},
    allclinics:[],
    errors: {},
    userError: '',
    status: '',
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CLINIC_TOGGLE_MODAL: {
            const {addClinicModalShow} = action.payload
            return {
                ...state,
                addClinicModalShow: !addClinicModalShow
            }
        }
        case INFO_CLINIC_TOGGLE_MODAL: {
            const {infoClinicModalShow, clinic} = action.payload
            return {
                ...state,
                clinicData: clinic,
                infoClinicModalShow: !infoClinicModalShow
            }
        }
        case EDIT_CLINIC_TOGGLE_MODAL:{
            const {editClinicModalShow, clinic} = action.payload
            return {
                ...state,
                clinicData: clinic,
                editClinicModalShow: !editClinicModalShow
            }
        }

        case ADD_CLINIC.REQUEST: {
          
            console.log(action, 'request')
            return {
                ...state,
              
            }
        }
        case ADD_CLINIC.SUCCESS: {
          const{allclinics}=state
            console.log(action, 'success')
            const{clinic}=action.payload.data
        let clinicsData=allclinics.push(clinic)
            return {
                ...state,
              allclinics:clinicsData
            }
        }

        case ADD_CLINIC.FAIL: {

              console.log(action, 'fail')
              const{errors}=action.payload.data
              console.log(errors)
              return {
                  ...state,
                  errors
              }
          }





        case GET_CLINICS.REQUEST: {
            const {status}=action
            console.log(action, status,8-9)
            return {
                ...state,
                status
            }
        }
        case GET_CLINICS.SUCCESS: {
            console.log(action, 'success')
const{status}=action
const{allclinics}=action.payload.data
            return {
                ...state,
                allclinics,
                status
               
            }
           
        }

        case GET_CLINICS.FAIL: {
            console.log(action, 'fail')
            return {
                ...state,
            }
        }
        default: {
            return state;
        }

    }
}