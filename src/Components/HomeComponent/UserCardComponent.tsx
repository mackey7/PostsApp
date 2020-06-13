import React from 'react'
import { UserCardWrapper, UserCardButton } from '../../Helpers/Styles/HomeComponent/HomeComponent'
import { UserCardTypes } from '../../Helpers/Types'
export const UserCardComponent = ({ UserData }: UserCardTypes) => {
    console.log(UserData)
    return (
        <UserCardWrapper>
            <h3>{UserData.name}</h3>
            <a href={`"${UserData.email}"`}>{UserData.email}</a>
            <a href="tel:+48713333222">{UserData.phone}</a>
            <a href={`"${UserData.website}"`}>{UserData.website}</a>
            <p>{UserData.company.name}</p>
            <p>{UserData.company.catchPhrase}</p>
            <p>{UserData.company.bs}</p>
            <UserCardButton to={`/user/${UserData.id}`}>Deatils</UserCardButton>
        </UserCardWrapper>
    )
}