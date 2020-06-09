import Axios from 'axios'
import { FETCH_USER_POSTS_SUCCESS, DELETE_USER_POST_SUCCESS, FETCH_USER_SUCCESS } from './actions_types/index'
import { API_URL } from '../Helpers/ENV'

export const fetchUserPostsSuccess = (payload: any) => {
    return {
        type: FETCH_USER_POSTS_SUCCESS,
        payload
    }
}

export const fetchUserPosts = (id: any) => {
    return (dispatch: any) => {
        return Axios.get(`${API_URL}/posts?userId=${id}`)
            .then(response => {
                dispatch(fetchUserPostsSuccess(response.data))
            })
            .catch(error => {
                throw error
            });
    }
}

export const deleteUserPost = (payload: any) => {
    return {
        type: DELETE_USER_POST_SUCCESS,
        payload
    }
}


export const fetchUserSuccess = (payload: any) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload
    }
}
export const fetchUser = (id?: string) => {
    return (dispatch: any) => {
        return Axios.get(`${API_URL}/users/${id}`)
            .then(response => {
                dispatch(fetchUserSuccess(response.data))
            })
            .catch(error => {
                throw error
            });
    }
}