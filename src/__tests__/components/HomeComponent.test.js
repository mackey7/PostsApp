import React from 'react'
import { render } from '@testing-library/react'
import { HomeComponent } from '../../Components/HomeComponent'
import { userData } from '../../Helpers/fakeApi'
import { BrowserRouter as Router } from 'react-router-dom'
test("render width data", async () => {

    const { getByTestId } = render(
        <Router>
            <HomeComponent UserData={userData} />
        </Router>
    )
    const UserCard = getByTestId("UserCard")
    expect(UserCard).toBeDefined

})

test("render widthout data", async () => {
    const emptyUserData = {}
    const { getByTestId } = render(
        <Router>
            <HomeComponent UserData={emptyUserData} />
        </Router>
    )


    const loading = getByTestId("loading")
    expect(loading).toBeDefined


})