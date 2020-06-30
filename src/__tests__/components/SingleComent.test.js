import React from 'react'
import { render } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import { SingleComment } from '../../Components/PostDetailsComponent/SingleComment'
import { fakeSingleComment } from '../../Helpers/fakeApi'
test("renders component", async () => {

    const { getByTestId } = render(
        < SingleComment key={fakeSingleComment.id} data={fakeSingleComment} />
    )

    const name = getByTestId("name");
    expect(name).toBeDefined
    expect(name.innerHTML).toBe(fakeSingleComment.name)
    const email = getByTestId("email");
    expect(email).toBeDefined
    expect(email.innerHTML).toBe(fakeSingleComment.email)
    const body = getByTestId("body");
    expect(body).toBeDefined
    expect(body.innerHTML).toBe(fakeSingleComment.body)
})