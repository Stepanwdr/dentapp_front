import axios from "axios";
import Storage from "./helpers/Storage";

const api = axios.create({
    baseURL: "http://localhost:5000",
});

api.interceptors.request.use((config) => {
    const c = config;
    const token = Storage.getToken();
    if (token) {
        c.headers.authorization = token;
    }
    return c;
}, Promise.reject);
class Api {
//clinics Request
    static addSingleClinic(formData) {
        console.log(formData)
        return api.post("/clinic/clinic-register", formData);
    }


    static getClinics() {
        return api.get("/clinic/clinics");
    }

    static editSingleClinic(formData) {
        return api.get("/clinics/edit_clinic", {
            params: {
                ...formData,
            },
        });
    }

    static deleteSingleClinic(id) {
        return api.get("/clinics/delete_clinic", id);
    }

//dentists  Request

    static registerDentist(formData) {
        return api.post("/users/register-dentist", formData);
    }


    static getDentistByClinic(clinicId) {
        return api.get("/users/dentist-list",{
            params:{
                clinicId
            }
        })
    }




    static addAppointment(formData) {
        console.log(formData)
        return api.get("users/all-user-list", formData);

    }


 //comments


  /*  static addToothsToTreatments(formData) {
        return api.put("/dentist/add_tooth_treathments", {
            params: {
                formData
            }
        })
    }
    */



/*
    static getAllUsers(clinicsId) {
        console.log(clinicsId)
        return api.get("users/all-user-list", clinicsId);

    }
*/


    /*static getAllUsers(role) {
        console.log(role)
        return api.get("users/all-user-list",role);
    }*/

    /*  static getClinicUsers(clinicsId) {

          return api.get("dentist/clinic-users-list",clinicsId)
      }
  */

}
export default Api;