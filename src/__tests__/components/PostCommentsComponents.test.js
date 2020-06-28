import React from 'react'
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { PostCommentsComponents } from '../../Components/PostDetailsComponent/PostCommentsComponents'
import { fakeCommentsData } from '../../Helpers/fakeApi'

test("renders post comments component with comments swith on ", async () => {
    const setCommentsFn = jest.fn();
    const showAddCommentsFn = jest.fn()
    const comments = true

    const { getByTestId } = render(
        < PostCommentsComponents comments={fakeCommentsData} showComments={comments} setShowComments={setCommentsFn} showModal={showAddCommentsFn} />
    )

    // const HideComments = getByTestId("HideComments")
    // expect(HideComments).toBeDefined

    const AddComments = getByTestId("AddComments")
    expect(AddComments).toBeDefined

    const SwitchesContainer = getByTestId("SwitchesContainer")
    expect(SwitchesContainer).toBeDefined


})
test("renders post comments component with comments swith of ", async () => {
    const setCommentsFn = jest.fn();
    const showAddCommentsFn = jest.fn()
    const comments = false

    const { getByTestId } = render(
        < PostCommentsComponents comments={fakeCommentsData} showComments={comments} setShowComments={setCommentsFn} showModal={showAddCommentsFn} />
    )

    const ShowComments = getByTestId("ShowComments")
    expect(ShowComments).toBeDefined


})