import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PostDetailsHeaderComponent } from '../../Components/PostDetailsComponent/PostDetailsHeaderComponent'
import { fetchUser } from '../../Actions/UserDetailsActions'
import { UserDetailsInterface } from '../../Helpers/Types'

export const PostDetailsHeaderContainer = () => {
    const dispatch = useDispatch();
    let { id } = useParams();//  user id, which is able in location
    useEffect(() => {
        async function fetchData() {
            await dispatch(fetchUser(id))
        }
        fetchData();
    })

    const User = useSelector((state: UserDetailsInterface) => state.user.user)
    return (
        <PostDetailsHeaderComponent userName={User} />
    )
}