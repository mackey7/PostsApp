import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import { PostDetailsContentComponent } from '../../Components/PostDetailsComponent/PostDetailsContentComponent'
import { fakePostDetail } from '../../Helpers/fakeApi'

test("Renders not empty post details component", async () => {
    const { getByTestId } = render(
        <PostDetailsContentComponent detailsData={fakePostDetail} />
    )

    const post = getByTestId("post");
    expect(post).toBeDefined

    const title = getByTestId("title");
    expect(title).toBeDefined

    const body = getByTestId("body");
    expect(body).toBeDefined
})

test("Renders empty post details component", async () => {
    const empty = false
    const { getByTestId } = render(
        <PostDetailsContentComponent detailsData={empty} />
    )

    const loading = await waitForElement(() => getByTestId("loading"));
    expect(loading).toBeDefined
})