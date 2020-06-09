import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserPosts } from '../../Actions/UserDetailsActions'

export const UserDetailsPostContainer = () => {
    let { id } = useParams(); //  user id which is able in location
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchData() {
            await dispatch(fetchUserPosts(id));
        }
        fetchData();
    }, []);
    const posts = useSelector((state: any) => state.posts.posts);
    console.log(posts)
    return (
        <div> UserDetailsPostContainer </div>
    )
}