import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../Actions/HomeActions'
import { HomeComponent } from '../../Components/HomeComponent'
import { UsersHomepage } from '../../Helpers/Types'

export const HomeContainer = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchData() {
            await dispatch(fetchUsers());
        }
        fetchData();
    }, []);
    const users = useSelector((state: UsersHomepage) => state.users.users);
    return (
        <HomeComponent UserData={users} />
    )
}
