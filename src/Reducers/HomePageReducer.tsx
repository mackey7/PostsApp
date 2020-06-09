import { Reducer } from 'redux'
import { FETCH_USERS_SUCCESS } from '../Actions/actions_types/index'

export interface IUserState {
    users: string[];
}

const initial = {
    users: []
}

export const HomePageReducer: Reducer<IUserState> = (state = initial, actions) => {
    switch (actions.type) {
        case FETCH_USERS_SUCCESS:
            return { users: actions.payload }

        default:
            return state
    }
}