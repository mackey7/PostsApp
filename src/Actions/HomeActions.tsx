import axios from 'axios'
import { FETCH_USERS_SUCCESS } from './actions_types/index'
import { API_URL } from '../Helpers/ENV'

const fetchUsersSuccess = (payload: any) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload
    }
}

export const fetchUsers = () => {
    return (dispatch: any) => {
        return axios.get(`${API_URL}/users`)
            .then(response => {
                dispatch(fetchUsersSuccess(response.data));
            })
            .catch(error => {
                throw error
            })
    }
}