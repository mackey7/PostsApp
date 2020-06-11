import { FETCH_USER_POST_SUCCESS } from '../Actions/actions_types/index'
import { Reducer } from 'redux'

export interface IPostState {
    post?: any;

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