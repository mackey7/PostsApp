import React from 'react'
import { useParams } from "react-router-dom";
import { BtnBack, Title, ComponentWrapper } from '../../Helpers/Styles/UserDetailsComponent/UserHeaderComponent'


export const PostDetailsHeaderComponent = ({ userName }: any) => {
    let { id } = useParams();
    return (
        <ComponentWrapper>
            <BtnBack to={`/user/${id}`} className="fas fa-arrow-left"><span>Back</span></BtnBack>
            <Title >  {userName.name} </Title>
            <div></div>
        </ComponentWrapper>
    )
}