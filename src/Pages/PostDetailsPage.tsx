import React from 'react'
import { PostDetailsHeaderContainer } from '../Containers/PostDetailsContainer/PostDetailsHeaderContainer'
import { PostDetailsContentContainer } from '../Containers/PostDetailsContainer/PostDetailsContentContainer'
import { PostCommentsContainer } from '../Containers/PostDetailsContainer/PostCommentsContainer'
import { AddCommentContainer } from '../Containers/PostDetailsContainer/AddCommentContainer'
export const PostDetailsPage = () => {
    return (
        <React.Fragment>
            <AddCommentContainer />
            <PostDetailsHeaderContainer />
            <PostDetailsContentContainer />
            <PostCommentsContainer />
        </React.Fragment>
    )
}