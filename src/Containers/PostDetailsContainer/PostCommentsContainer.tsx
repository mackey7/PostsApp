import React, { useEffect, useState, } from 'react'
import { PostCommentsComponents } from '../../Components/PostDetailsComponent/PostCommentsComponents'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import { fetchPostComments, switchAddCommentModal } from '../../Actions/PostDetailsActions'
import { postCommentsInterface, AddModalInterface } from '../../Helpers/Types'

export const PostCommentsContainer = () => {
    let { id } = useParams();//  user id, which is able in location
    const dispatch = useDispatch()
    useEffect(() => {
        async function fetchData() {
            await dispatch(fetchPostComments(id))
        }
        fetchData()
    }, [])
    const Comments = useSelector((state: postCommentsInterface) => state.comments.comments);
    const OpenModal = useSelector((state: AddModalInterface) => state.AddCommentModalOpen.AddCommentModalOpen)
    const [renderComments, ShowComments] = useState(false)

    const setShowComments = () => {
        renderComments ? ShowComments(false) : ShowComments(true)
    }

    const showAddCommentsFn = () => {
        OpenModal ? dispatch(switchAddCommentModal(false)) : dispatch(switchAddCommentModal(true))
    }

    return (
        <PostCommentsComponents comments={Comments} showComments={renderComments} setShowComments={setShowComments} showModal={showAddCommentsFn} />
    )
}