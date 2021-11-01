import Api from "../../../Api";
import {define} from '../../../helpers/redux-request';
export const GET_ALL_USERS=define("GET_ALL_USERS");
export function getAllUsers(clinicsId) {
    return GET_ALL_USERS.request(() => Api.getAllUsers(clinicsId)).takeLatest()
}


