import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../Actions/HomeActions'
import { HomeComponent } from '../../Components/HomeComponent'
export const HomeContainer = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchData() {
            await dispatch(fetchUsers());
        }
        fetchData();
    }, []);
    const users = useSelector((state: any) => state.users.users);
    console.log(users)
    return (
        <HomeComponent UserData={users} />
    )
}
