import { combineReducers } from 'redux'
import { HomePageReducer } from './HomePageReducer'
import { UserDetailsReducer, UserReducer } from './UserDetailsReducer'
const rootReducer = combineReducers({
    users: HomePageReducer,
    posts: UserDetailsReducer,
    user: UserReducer,
})

export default rootReducer