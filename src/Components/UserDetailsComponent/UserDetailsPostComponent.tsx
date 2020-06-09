import React from 'react'
import { ComponentWrapper, Btn, TitlePost } from '../../Helpers/Styles/UserDetailsComponent/UserDetailsTaskComponent'
import { Link } from "react-router-dom";

export const UserDetailsPostComponent = ({ data, deletePostFn }: any) => {
    const { id, title, userId } = data

    return (
        <ComponentWrapper>
            <Btn className="far fa-trash-alt" onClick={() => deletePostFn(id)} ></Btn>
            <TitlePost >{title}</TitlePost >
            <Link to={`/user/${userId}/${id}`}><Btn className="fas fa-chevron-right"></Btn></Link>
        </ComponentWrapper>
    )
}