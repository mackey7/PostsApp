import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { UserHeaderComponent } from '../../Components/UserDetailsComponent/UserHeaderComponent'
import { fetchUser, switchAddPostModal } from '../../Actions/UserDetailsActions'


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
    const OpenModal = useSelector((state: any) => state.AddPostModalOpen.AddPostModalOpen)

    const showAddPostFn = () => {
        OpenModal ? dispatch(switchAddPostModal(false)) : dispatch(switchAddPostModal(true))
    }

    return (
        <React.Fragment>
            <UserHeaderComponent user={user} showAddPostFn={showAddPostFn} />
        </React.Fragment>
    )
}