import React from 'react'
import { HomeWrapper } from '../../Helpers/Styles/HomeComponent/HomeComponent'
import { CenterElement, Loader } from '../../Helpers/Styles/GeneralStyles'
import { UserCardComponent } from './UserCardComponent'
import { UsersTypesComponent, userDataTypes } from '../../Helpers/Types'
export const HomeComponent = ({ UserData }: UsersTypesComponent) => {
    if (UserData.length > 0) {
        const mapUsers = UserData.map((data: userDataTypes) => {
            return (<UserCardComponent key={data.id} UserData={data} />)
        })
        return (
            <HomeWrapper data-testid="UserCard">
                {mapUsers}
            </HomeWrapper>
        )

    } else {
        return (
            <HomeWrapper data-testid="loading">
                <CenterElement>
                    <Loader>  </Loader>
                </CenterElement>
            </HomeWrapper>
        )
    }

}