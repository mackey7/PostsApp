import React from 'react'
import { HomeWrapper } from '../../Helpers/Styles/HomeComponent/HomeComponent'
import { CenterElement, Loader } from '../../Helpers/Styles/GeneralStyles'


export const HomeComponent = ({ UserData }: any) => {
    if (UserData.length > 0) {
        const mapUsers = UserData.map((data: any) => {
            return (<div></div>)
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