import { HomePageReducer } from '../../Reducers/HomePageReducer'
import { FETCH_USERS_SUCCESS } from '../../Actions/actions_types/index'
import { userData } from '../../Helpers/fakeApi'

describe("Test HomepageReducer", () => {

    it("should return the initial state", () => {
        expect(HomePageReducer(undefined, {})).toEqual({
            users: []
        })
    })

    it("should handle FETCH_USERS_SUCCESS", () => {
        expect(
            HomePageReducer([], {
                type: FETCH_USERS_SUCCESS,
                payload: userData

            })
        ).toEqual({
            users: userData

        }

        )
    })
})