import React from 'react'
import { ComponentWrapper, Btn, TitlePost } from '../../Helpers/Styles/UserDetailsComponent/UserDetailsTaskComponent'
import { Link } from "react-router-dom";
import { UserDetailsPostInterface } from '../../Helpers/Types'
export const UserDetailsPostComponent = ({ data, deletePostFn }: UserDetailsPostInterface) => {
    const { id, title, userId } = data

    return (
        <ComponentWrapper>
            <Btn data-testid="deleteBtn" className="far fa-trash-alt" onClick={() => deletePostFn(id)} ></Btn>
            <TitlePost data-testid="title" >{title}</TitlePost >
            <Link data-testid="link" to={`/user/${userId}/${id}`}><Btn className="fas fa-chevron-right"></Btn></Link>
        </ComponentWrapper>
    )
}