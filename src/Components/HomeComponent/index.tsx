import React from 'react'
import { HomeWrapper } from '../../Helpers/Styles/HomeComponent/HomeComponent'
import { CenterElement, Loader } from '../../Helpers/Styles/GeneralStyles'
import { UserCardComponent } from './UserCardComponent'
import { UsersTypesComponent } from '../../Helpers/Types'
export const HomeComponent = ({ UserData }: UsersTypesComponent) => {
    if (UserData.length > 0) {
        const mapUsers = UserData.map((data: any) => {
            return (<UserCardComponent key={data.id} userData={data} />)
        })
        return (
            <HomeWrapper >
                {mapUsers}
            </HomeWrapper>
        )

    } else {
        return (
            <HomeWrapper>
                <CenterElement>
                    <Loader>  </Loader>
                </CenterElement>
            </HomeWrapper>
        )
    }

}