import React from 'react'
import { ComponentWrapper } from '../../Helpers/Styles/PostDetailsComponent/PostDetailsContentComponent'
import { Loader, CenterElement } from '../../Helpers/Styles/GeneralStyles'

export const PostDetailsContentComponent = ({ detailsData }: any) => {
    const { title, body } = detailsData
    if (detailsData) {
        return (
            <ComponentWrapper data-testid="post">
                <h2 data-testid="title">{title}</h2>
                <p data-testid="body"> {body}</p>
            </ComponentWrapper>
        )
    } else {
        return (
            <ComponentWrapper data-testid="loading">
                <CenterElement>
                    <Loader>  </Loader>
                </CenterElement>
            </ComponentWrapper>
        )
    }
}