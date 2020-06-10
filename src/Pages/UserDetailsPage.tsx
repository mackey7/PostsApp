import React from 'react'
import { UserHeaderContainer } from '../Containers/UserDetailsContainer/UserHeaderContainer'
import { UserDetailsPostContainer } from '../Containers/UserDetailsContainer/UserDetailsPostContainer'
import { AddPostContainer } from '../Containers/UserDetailsContainer/AddPostContainer'
export const UserDetailsPage = () => {
    return (
        <React.Fragment>
            <AddPostContainer />
            <UserHeaderContainer />
            <UserDetailsPostContainer />
        </React.Fragment>
    )
}