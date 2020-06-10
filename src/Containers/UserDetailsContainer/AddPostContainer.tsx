import React from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { switchAddPostModal } from '../../Actions/UserDetailsActions'
import { AddPostComponent } from '../../Components/UserDetailsComponent/AddPostComponent'


export const AddPostContainer = () => {
    const dispatch = useDispatch();
    let { id } = useParams(); //  user id, which is able in location
    const OpenModal = useSelector((state: any) => state.AddPostModalOpen.AddPostModalOpen)
    const showAddPostFn = () => {
        OpenModal ? dispatch(switchAddPostModal(false)) : dispatch(switchAddPostModal(true))
    }
    const renderAddPost = OpenModal ? <AddPostComponent showAddPostFn={showAddPostFn} id={parseInt(`${id}`)} /> : null
    return (
        <React.Fragment>
            {renderAddPost}
        </React.Fragment>
    )
}