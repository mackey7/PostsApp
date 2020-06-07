import { combineReducers } from 'redux'
import { HomePageReducer } from './HomePageReducer'

const rootReducer = combineReducers({
    users: HomePageReducer
})

export default rootReducer