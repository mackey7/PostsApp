import { Reducer } from 'redux'
import { FETCH_USER_POSTS_SUCCESS } from '../Actions/actions_types/index'

export interface IPostsState {
    posts?: any
}
const initialUserDetailsReducer = {
    posts: [],
}
export const UserDetailsReducer: Reducer<IPostsState> = (state = initialUserDetailsReducer, actions) => {
    switch (actions.type) {
        case FETCH_USER_POSTS_SUCCESS:
            return { posts: actions.payload }
        default:
            return state;
    }
}