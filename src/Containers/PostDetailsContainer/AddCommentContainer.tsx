import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { switchAddCommentModal } from '../../Actions/PostDetailsActions'

import { AddCommentComponent } from '../../Components/PostDetailsComponent/AddCommentComponent'
import { AddModalInterface } from '../../Helpers/Types'

export const AddCommentContainer = () => {
    const dispatch = useDispatch();
    let { id } = useParams(); //  user id, which is able in location
    const OpenModal = useSelector((state: AddModalInterface) => state.AddCommentModalOpen.AddCommentModalOpen)

    const showAddCommentsFn = () => {
        OpenModal ? dispatch(switchAddCommentModal(false)) : dispatch(switchAddCommentModal(true))
    }

    const renderAddComment = OpenModal ? <AddCommentComponent showAddCommentsFn={showAddCommentsFn} id={parseInt(`${id}`)} /> : null
    return (
        <React.Fragment>
            {renderAddComment}
        </React.Fragment>
    )
}