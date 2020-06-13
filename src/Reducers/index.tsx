import { combineReducers } from 'redux'
import { HomePageReducer } from './HomePageReducer'
import { UserDetailsReducer, UserReducer, AddPostModalReducer } from './UserDetailsReducer'
import { PostDetailsReducer, CommentsReducer } from './PostDetailsReducer'
const rootReducer = combineReducers({
    users: HomePageReducer,
    posts: UserDetailsReducer,
    user: UserReducer,
    AddPostModalOpen: AddPostModalReducer,
    postDetails: PostDetailsReducer,
    comments: CommentsReducer,

})

export default rootReducer