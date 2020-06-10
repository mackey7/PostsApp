import { combineReducers } from 'redux'
import { HomePageReducer } from './HomePageReducer'
import { UserDetailsReducer, UserReducer, AddPostModalReducer } from './UserDetailsReducer'
const rootReducer = combineReducers({
    users: HomePageReducer,
    posts: UserDetailsReducer,
    user: UserReducer,
    AddPostModalOpen: AddPostModalReducer,
})

export default rootReducer