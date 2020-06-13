import { FETCH_USER_POST_SUCCESS, FETCH_COMMENTS_SUCCESS } from '../Actions/actions_types/index'
import { Reducer, Action } from 'redux'

export interface IPostState {
    post?: any;
    comments?: any;
}
const initialPost = {
    post: []
}


export const PostDetailsReducer: Reducer<IPostState> = (state = initialPost, actions) => {
    switch (actions.type) {
        case FETCH_USER_POST_SUCCESS:
            return { post: actions.payload }
            break

        default:
            return state
    }

}
const initialComments = {
    comments: [],
}

export const CommentsReducer: Reducer<IPostState> = (state = initialComments, actions) => {
    switch (actions.type) {
        case FETCH_COMMENTS_SUCCESS:
            return { comments: actions.payload }
            break
        default:
            return state
    }
}
