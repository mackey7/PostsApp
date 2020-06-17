import { UserDetailsReducer, UserReducer } from '../../Reducers/UserDetailsReducer'
import { FETCH_USER_POSTS_SUCCESS, DELETE_USER_POST_SUCCESS, FETCH_USER_SUCCESS, ADD_POST } from '../../Actions/actions_types'
import { fakePost, fakeUser } from '../../Helpers/fakeApi'

describe("test UserDetailsReducer", () => {

    it("Should return the initial state", () => {
        expect(UserDetailsReducer(undefined, {})).toEqual({
            posts: []
        })
    })

    it("Should handle FETCH_USER_POSTS_SUCCESS", () => {
        expect(
            UserDetailsReducer([], {
                type: FETCH_USER_POSTS_SUCCESS,
                payload: fakePost
            })
        ).toEqual({
            posts: fakePost
        })
    })

    it("Should handle DELETE_USER_POST_SUCCESS", () => {
        expect(
            UserDetailsReducer({ posts: [fakePost] }, {
                type: DELETE_USER_POST_SUCCESS,
                payload: 1
            })
        ).toEqual
            ({ posts: [] })
    })

    it("Should handle ADD_POST", () => {
        expect(
            UserDetailsReducer({ posts: [] }, {
                type: ADD_POST,
                payload: fakePost
            })
        ).toEqual({
            posts: [fakePost]
        })
    })


})

describe("Test UserReducer", () => {
    it("Should return the initial state", () => {
        expect(UserReducer(undefined, {})).toEqual({
            user: []
        })
    })

    it("Should handle Fetch_USER_SUCCESS", () => {
        expect(
            UserReducer([], {
                type: FETCH_USER_SUCCESS,
                payload: fakeUser
            })
        ).toEqual({
            user: fakeUser
        })
    })
})