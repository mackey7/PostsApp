import Axios from 'axios'

import { FETCH_USER_POST_SUCCESS, FETCH_COMMENTS_SUCCESS, CHANGE_ADD_COMMENT_MODAL } from './actions_types/index'
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

export const fetchPostCommentsSuccess = (payload: any) => {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload
    }
}

export const fetchPostComments = (id: any) => {
    return (dispatch: any) => {
        return Axios.get(`${API_URL}/comments?postId=${id}`)
            .then(response => {
                dispatch(fetchPostCommentsSuccess(response.data))
            })
            .catch(error => {
                throw error
            })
    }
}

export const switchAddCommentModal = (condition: boolean) => {
    return {
        type: CHANGE_ADD_COMMENT_MODAL,
        condition
    }
}