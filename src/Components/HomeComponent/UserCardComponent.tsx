import React from 'react'
import { UserCardWrapper, UserCardButton } from '../../Helpers/Styles/HomeComponent/HomeComponent'

export const UserCardComponent = ({ userData }: any) => {
    return (
        <UserCardWrapper>
            <h3>{userData.name}</h3>
            <a href={`"${userData.email}"`}>{userData.email}</a>
            <a href="tel:+48713333222">{userData.phone}</a>
            <a href={`"${userData.website}"`}>{userData.website}</a>
            <p>{userData.company.name}</p>
            <p>{userData.company.catchPhrase}</p>
            <p>{userData.company.bs}</p>
            <UserCardButton to={`/user/${userData.id}`}>Deatils</UserCardButton>
        </UserCardWrapper>
    )
}