import React from 'react'
import { render } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import { PostDetailsHeaderComponent } from '../../Components/PostDetailsComponent/PostDetailsHeaderComponent'
import { fakeUser } from '../../Helpers/fakeApi'
import { BrowserRouter as Router } from 'react-router-dom'


test("renders component", async () => {

    const { getByTestId } = render(
        <Router>
            <PostDetailsHeaderComponent userName={fakeUser} />
        </Router>
    )

    const btnBack = getByTestId("btnBack")
    expect(btnBack).toBeDefined
    expect(btnBack.innerHTML).toBe("<span>Back</span>")
    const title = getByTestId("title")
    expect(title).toBeDefined
    expect(title.innerHTML).toBe(fakeUser.name)

})