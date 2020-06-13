import React from 'react'
import { ComponentWrapper, CommentHeader } from '../../Helpers/Styles/PostDetailsComponent/SingleComment'

export const SingleComment = ({ data }: any) => {
    return (
        <ComponentWrapper>
            <CommentHeader>
                <h4 >{data.name}</h4>
                <a href={`${data.email}`}> {data.email}</a>
            </CommentHeader>
            <article >
                {data.body}
            </article>
        </ComponentWrapper>
    )
}