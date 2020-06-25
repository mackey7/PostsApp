import React from 'react'
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import '@testing-library/user-event'
require('mutationobserver-shim');
import { AddCommentComponent } from '../../Components/PostDetailsComponent/AddCommentComponent'
import { Provider } from 'react-redux'
import { store } from '../../Store/store'



test("renders component", async () => {
    const showAddCommentsFn = jest.fn();
    const id = 1;

    const { getByTestId } = render(
        <Provider store={store}>
            < AddCommentComponent showAddCommentsFn={showAddCommentsFn} id={id} />
        </Provider>

    )
    const InputName = getByTestId('name');
    fireEvent.change(InputName, { target: { value: "Tom " } })
    expect(InputName).toBeDefined

    const InputEmail = getByTestId('email');
    fireEvent.change(InputEmail, { target: { value: "Tom@mail.com" } })
    expect(InputEmail).toBeDefined

    const AreaBody = getByTestId("body");
    fireEvent.change(AreaBody, { target: { value: "Lerum ipsum " } })
    expect(AreaBody).toBeDefined;

})