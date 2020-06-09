import { combineReducers } from 'redux'
import { HomePageReducer } from './HomePageReducer'
import { UserDetailsReducer } from './UserDetailsReducer'
const rootReducer = combineReducers({
    users: HomePageReducer,
    posts: UserDetailsReducer,
})

export default rootReducer