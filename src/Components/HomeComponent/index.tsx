import React from 'react'
import { HomeWrapper } from '../../Helpers/Styles/HomeComponent/HomeComponent'
import { CenterElement, Loader } from '../../Helpers/Styles/GeneralStyles'


export const HomeComponent = ({ UserData: any }) => {
    return (
        <HomeWrapper>
            <CenterElement>
                <Loader>  </Loader>
            </CenterElement>
        </HomeWrapper>
    )


}