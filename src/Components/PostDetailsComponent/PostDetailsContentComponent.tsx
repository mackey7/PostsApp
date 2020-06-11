import React from 'react'
import { ComponentWrapper } from '../../Helpers/Styles/PostDetailsComponent/PostDetailsContentComponent'
export const PostDetailsContentComponent = ({ detailsData }: any) => {
    const { title, body } = detailsData
    return (
        <ComponentWrapper>
            <h2 >{title}</h2>
            <p> {body}</p>
        </ComponentWrapper>
    )
}