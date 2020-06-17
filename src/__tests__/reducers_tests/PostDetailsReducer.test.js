import { PostDetailsReducer, CommentsReducer } from '../../Reducers/PostDetailsReducer'
import { FETCH_USER_POST_SUCCESS, FETCH_COMMENTS_SUCCESS, ADD_COMMENT } from '../../Actions/actions_types'
import { fakePostDetail, fakeCommentsData, fakeComment } from '../../Helpers/fakeApi'

describe("Test PostDetailsReducer", () => {
    it("should return the initail state", () => {
        expect(PostDetailsReducer(undefined, {})).toEqual({
            post: []
        })
    })


    it("Should handle FETCH_USER_POST_SUCCESS", () => {
        expect(
            PostDetailsReducer([], {
                type: FETCH_USER_POST_SUCCESS,
                payload: fakePostDetail
            })
        ).toEqual({
            post: fakePostDetail
        })
    })
})


describe("test CommentsReducer", () => {
    it(" Should return the initial state", () => {
        expect(CommentsReducer(undefined, {})).toEqual({
            comments: []
        })
    })

    it("Should handle FETCH_COMMENTS_SUCCESS", () => {
        expect(
            CommentsReducer([], {
                type: FETCH_COMMENTS_SUCCESS,
                payload: fakeCommentsData
            })
        ).toEqual({
            comments: fakeCommentsData
        })
    })

    it("Should handle ADD_COMMENT", () => {
        expect(
            CommentsReducer({ comments: [] }, {
                type: ADD_COMMENT,
                payload: fakeComment
            })
        ).toEqual({
            comments: [fakeComment]
        })
    })

})

