import React from 'react'
import { render } from '@testing-library/react'
import { NotFound404 } from '../../Components/ErrorPageComponent/404'
import { BrowserRouter as Router } from 'react-router-dom'

test("renders notFound404 component", async () => {

    const { getByTestId } = render(
        <Router>
            <NotFound404 />
        </Router>
    )

    const wrapper = getByTestId("wrapper")
    expect(wrapper).toBeDefined

    const header = getByTestId("header")
    expect(header.innerHTML).toBe("404")

    const span = getByTestId("span");
    expect(span.innerHTML).toBe("Page not found")
})