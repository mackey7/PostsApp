import React from 'react'
import { ComponentWrapper, BtnBack, Title, AddBtn } from '../../Helpers/Styles/UserDetailsComponent/UserHeaderComponent'

export const UserHeaderComponent = ({ user }: any) => {
    const renderTitle = user.name ? <Title data-testid="title">{user.name}</Title> : <p>Loading...</p>
    return (
        <ComponentWrapper>
            <BtnBack to={"/"} className="fas fa-arrow-left"><span>Back</span></BtnBack>
            {renderTitle}
            <AddBtn className="fas fa-plus"></AddBtn>
        </ComponentWrapper>
    )
}