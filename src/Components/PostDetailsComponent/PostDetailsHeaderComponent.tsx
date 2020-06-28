import React from 'react'
import { useParams } from "react-router-dom";
import { BtnBack, Title, ComponentWrapper } from '../../Helpers/Styles/UserDetailsComponent/UserHeaderComponent'


export const PostDetailsHeaderComponent = ({ userName }: any) => {
    let { id } = useParams();
    return (
        <ComponentWrapper>
            <BtnBack data-testid="btnBack" to={`/user/${id}`} className="fas fa-arrow-left"><span>Back</span></BtnBack>
            <Title data-testid="title">{userName.name}</Title>
            <div></div>
        </ComponentWrapper>
    )
}