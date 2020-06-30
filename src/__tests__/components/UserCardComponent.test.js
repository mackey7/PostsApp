import React from 'react'
import { render } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import { BrowserRouter as Router } from 'react-router-dom'
import { UserCardComponent } from '../../Components/HomeComponent/UserCardComponent'
import { fakeUserCardComponent } from '../../Helpers/fakeApi'


test("renders component", async () => {
    const { getByText } = render(
        <Router>
            <UserCardComponent key={1} UserData={fakeUserCardComponent} />
        </Router>
    )
    expect(getByText("Deatils")).toBeTruthy();
    expect(getByText("fakename")).toBeTruthy();
    expect(getByText("fakeemail")).toBeTruthy();
    expect(getByText("fakephone")).toBeTruthy();
    expect(getByText("fakewebsite")).toBeTruthy();
    expect(getByText("fakeCompany")).toBeTruthy();
    expect(getByText("fakecatchPhrase")).toBeTruthy();
    expect(getByText("fakebs")).toBeTruthy();

})