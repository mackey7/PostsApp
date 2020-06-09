import React from 'react'
import { UserHeaderContainer } from '../Containers/UserDetailsContainer/UserHeaderContainer'
import { UserDetailsPostContainer } from '../Containers/UserDetailsContainer/UserDetailsPostContainer'
export const UserDetailsPage = () => {
    return (
        <React.Fragment>
            <UserHeaderContainer />
            <UserDetailsPostContainer />
        </React.Fragment>
    )
}