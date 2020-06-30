import React from 'react'
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { fakeUser } from '../../Helpers/fakeApi'
import { UserHeaderComponent } from '../../Components/UserDetailsComponent/UserHeaderComponent'
import { BrowserRouter as Router } from 'react-router-dom'

test("renders component", async () => {

    const showAddPostFn = jest.fn();
    const { getByTestId } = render(
        < Router>
            <UserHeaderComponent showAddPostFn={showAddPostFn} name={fakeUser.name} />
        </Router>
    )

    const btnBack = getByTestId("btnBack")
    expect(btnBack).toBeDefined
    expect(btnBack.innerHTML).toBe("<span>Back</span>")

    const title = getByTestId("title")
    expect(title.innerHTML).toBe(fakeUser.name)

    const addBtn = getByTestId("addBtn")
    expect(addBtn).toBeDefined


})