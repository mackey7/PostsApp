import React from 'react'
import { PostDetailsHeaderContainer } from '../Containers/PostDetailsContainer/PostDetailsHeaderContainer'
import { PostDetailsContentContainer } from '../Containers/PostDetailsContainer/PostDetailsContentContainer'
import { PostCommentsContainer } from '../Containers/PostDetailsContainer/PostCommentsContainer'
export const PostDetailsPage = () => {
    return (
        <React.Fragment>
            <PostDetailsHeaderContainer />
            <PostDetailsContentContainer />
            <PostCommentsContainer />
        </React.Fragment>
    )
}