import Axios from 'axios'

import { FETCH_USER_POST_SUCCESS } from './actions_types/index'
import { API_URL } from '../Helpers/ENV'

export const fetchUserPostSuccess = (payload: any) => {
    return {
        type: FETCH_USER_POST_SUCCESS,
        payload
    }
}

export const fetchUserPost = (type?: string) => {
    return (dispatch: any) => {
        return Axios.get(`${API_URL}/posts/${type}`)
            .then(response => {
                dispatch(fetchUserPostSuccess(response.data))
            })
            .catch(error => {
                throw error
            })
    }
}