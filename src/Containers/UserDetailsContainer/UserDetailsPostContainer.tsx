import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserPosts, deleteUserPost } from '../../Actions/UserDetailsActions'
import { UserDetailsPostComponent } from '../../Components/UserDetailsComponent/UserDetailsPostComponent'
import { Centertext } from '../../Helpers/Styles/GeneralStyles'


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
    // Function to delete user post
    const deletePostFn = async function (id: any) {
        await dispatch(deleteUserPost(id));

    }

    // map  user posts
    const mapData = posts.length > 0 ? posts.map((data: any) => {
        return (
            <UserDetailsPostComponent key={data.id} data={data} deletePostFn={deletePostFn} />
        )

    }) : <Centertext>Sorry, You don`t have a  posts </Centertext>



    return (
        <React.Fragment>
            {mapData}
        </React.Fragment>
    )
}