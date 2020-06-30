import React from 'react'
import { ComponentWrapper, BtnBack, Title, AddBtn } from '../../Helpers/Styles/UserDetailsComponent/UserHeaderComponent'
import { UserHeaderInterface } from '../../Helpers/Types'
export const UserHeaderComponent = ({ name, showAddPostFn }: UserHeaderInterface) => {
    const renderTitle = name ? <Title data-testid="title">{name}</Title> : <p>Loading...</p>
    return (
        <ComponentWrapper>
            <BtnBack data-testid="btnBack" to={"/"} className="fas fa-arrow-left"><span>Back</span></BtnBack>
            {renderTitle}
            <AddBtn data-testid="addBtn" className="fas fa-plus" onClick={() => showAddPostFn()}></AddBtn>
        </ComponentWrapper>
    )
}