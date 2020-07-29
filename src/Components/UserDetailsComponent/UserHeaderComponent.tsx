import React from 'react'
import { ComponentWrapper, BtnBack, Title, AddBtn } from '../../Helpers/Styles/UserDetailsComponent/UserHeaderComponent'
import { UserHeaderInterface } from '../../Helpers/Types'
export const UserHeaderComponent = ({ user, showAddPostFn }: UserHeaderInterface) => {
    const renderTitle = user.name ? <Title data-testid="title">{user.name}</Title> : <p>Loading...</p>
    return (
        <ComponentWrapper>
            <BtnBack data-testid="btnBack" to={"/"} className="fas fa-arrow-left"><span>Back</span></BtnBack>
            {renderTitle}
            <AddBtn data-testid="addBtn" className="fas fa-plus" onClick={() => showAddPostFn()}></AddBtn>
        </ComponentWrapper>
    )
}