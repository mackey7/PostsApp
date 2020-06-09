import React from 'react'
import { ComponentWrapper, BtnBack, Title, AddBtn } from '../../Helpers/Styles/UserDetailsComponent/UserHeaderComponent'

export const UserHeaderComponent = () => {
    return (
        <ComponentWrapper>
            <BtnBack to={"/"} className="fas fa-arrow-left"><span>Back</span></BtnBack>
            <Title > Title</Title>
            <AddBtn className="fas fa-plus"></AddBtn>
        </ComponentWrapper>
    )
}