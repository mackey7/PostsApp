import React from 'react'
import { ComponentWrapper, Btn } from '../../Helpers/Styles/UserDetailsComponent/UserDetailsTaskComponent'

export const UserDetailsPostComponent = ({ data }: any) => {
    console.log(data)
    return (
        <ComponentWrapper>
            <Btn className="far fa-trash-alt"></Btn>

        </ComponentWrapper>
    )
}