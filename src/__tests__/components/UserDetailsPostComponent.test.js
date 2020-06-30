import React from 'react'
import { render } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import { UserDetailsPostComponent } from '../../Components/UserDetailsComponent/UserDetailsPostComponent'
import { fakePost } from '../../Helpers/fakeApi'
import { BrowserRouter as Router } from 'react-router-dom'
test("renders component", async () => {
    const deletePostFn = jest.fn();

    const { getByTestId, } = render(
        <Router>
            < UserDetailsPostComponent key={fakePost.id} data={fakePost} deletePostFn={deletePostFn} />
        </Router >
    )

    const deleteBtn = getByTestId("deleteBtn")
    expect(deleteBtn).toBeDefined
    const title = getByTestId("title")
    expect(title).toBeDefined
    expect(title.innerHTML).toBe(fakePost.title)
    const link = getByTestId("link")
    expect(link).toBeDefined
})