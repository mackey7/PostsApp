import React from 'react'
import { ComponentWrapper, Btn, TitlePost } from '../../Helpers/Styles/UserDetailsComponent/UserDetailsTaskComponent'

export const UserDetailsPostComponent = ({ data }: any) => {
    const { id, title, userId } = data
    return (
        <ComponentWrapper>
            <Btn className="far fa-trash-alt"></Btn>
            <TitlePost data-testid="title" >{title}</TitlePost >
        </ComponentWrapper>
    )
}