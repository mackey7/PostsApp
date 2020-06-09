import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { UserHeaderComponent } from '../../Components/UserDetailsComponent/UserHeaderComponent'
import { fetchUser } from '../../Actions/UserDetailsActions'


export const UserHeaderContainer = () => {
    let { id } = useParams(); //  user id, which is able in location
    const dispatch = useDispatch();
    // fetch data from store
    useEffect(() => {
        async function fetchData() {
            await dispatch(fetchUser(id));//fetch user name to header
        }
        fetchData();
    }, []);
    const user = useSelector((state: any) => state.user.user)
    return (
        <React.Fragment>
            <UserHeaderComponent />
        </React.Fragment>
    )
}