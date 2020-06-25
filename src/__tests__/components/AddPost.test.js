import React from 'react'
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { AddPostComponent } from '../../Components/UserDetailsComponent/AddPostComponent'
import { Provider } from 'react-redux'
import { store } from '../../Store/store'
import jsdom from 'jsdom'
const { JSDOM } = jsdom;
require('mutationobserver-shim');

global.MutationObserver = window.MutationObserver;

test("renders component", async () => {
    const id = 1;
    const showAddPostFn = jest.fn();

    const { getByTestId } = render(
        <Provider store={store}>
            <AddPostComponent showAddPostFn={showAddPostFn} id={id} />
        </Provider>
    )


    const InputName = getByTestId('title');
    fireEvent.change(InputName, { target: { value: "Title " } })
    expect(InputName).toBeDefined



    const AreaBody = getByTestId("body");
    fireEvent.change(AreaBody, { target: { value: "Lerum ipsum " } })
    expect(AreaBody).toBeDefined;
})