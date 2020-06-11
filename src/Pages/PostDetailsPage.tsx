import React from 'react'
import { PostDetailsHeaderContainer } from '../Containers/PostDetailsContainer/PostDetailsHeaderContainer'
import { PostDetailsContentContainer } from '../Containers/PostDetailsContainer/PostDetailsContentContainer'
export const PostDetailsPage = () => {
    return (
        <React.Fragment>
            <PostDetailsHeaderContainer />
            <PostDetailsContentContainer />
        </React.Fragment>
    )
}