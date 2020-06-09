import { Reducer } from 'redux'
import { FETCH_USER_POSTS_SUCCESS, DELETE_USER_POST_SUCCESS } from '../Actions/actions_types/index'

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
        case DELETE_USER_POST_SUCCESS:

            let new_array = state.posts.filter((item: any) => actions.payload !== item.id)
            return { ...state, posts: new_array }

        default:
            return state;
    }
}