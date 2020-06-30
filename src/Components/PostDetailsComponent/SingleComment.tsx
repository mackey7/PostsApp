import React from 'react'
import { ComponentWrapper, CommentHeader } from '../../Helpers/Styles/PostDetailsComponent/SingleComment'

export const SingleComment = ({ data }: any) => {
    return (
        <ComponentWrapper>
            <CommentHeader>
                <h4 data-testid="name" >{data.name}</h4>
                <a data-testid="email" href={`${data.email}`}>{data.email}</a>
            </CommentHeader>
            <article data-testid="body" >
                {data.body}
            </article>
        </ComponentWrapper>
    )
}