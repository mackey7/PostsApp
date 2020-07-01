import { FETCH_USER_POST_SUCCESS, FETCH_COMMENTS_SUCCESS, CHANGE_ADD_COMMENT_MODAL, ADD_COMMENT } from '../Actions/actions_types/index'
import { Reducer } from 'redux'

export interface IPostState {
    post?: any;
    comments?: any;
    AddCommentModalOpen?: boolean
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
        case ADD_COMMENT:
            return { ...state, comments: [...state.comments, actions.payload] }
            break
        default:
            return state
    }
}
const inistialAddCommentModalReducer = {
    AddCommentModalOpen: false
}
export const AddCommentModalReducer: Reducer<IPostState> = (state = inistialAddCommentModalReducer, actions) => {
    switch (actions.type) {
        case CHANGE_ADD_COMMENT_MODAL:
            return { AddCommentModalOpen: actions.condition }
        default:
            return state
    }
}