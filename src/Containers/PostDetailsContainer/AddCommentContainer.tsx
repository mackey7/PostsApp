import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { switchAddCommentModal } from '../../Actions/PostDetailsActions'

import { AddCommentComponent } from '../../Components/PostDetailsComponent/AddCommentComponent'


export const AddCommentContainer = () => {
    const dispatch = useDispatch();
    let { id } = useParams(); //  user id, which is able in location
    const OpenModal = useSelector((state: any) => state.AddCommentModalOpen.AddCommentModalOpen)

    const showAddCommentsFn = () => {
        OpenModal ? dispatch(switchAddCommentModal(false)) : dispatch(switchAddCommentModal(true))
    }

    const renderAddComment = OpenModal ? <AddCommentComponent /> : null
    return (
        <React.Fragment>
            {renderAddComment}
        </React.Fragment>
    )
}