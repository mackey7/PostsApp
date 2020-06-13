import React, { useEffect, useState, } from 'react'
import { PostCommentsComponents } from '../../Components/PostDetailsComponent/PostCommentsComponents'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import { fetchPostComments } from '../../Actions/PostDetailsActions'

export const PostCommentsContainer = () => {
    let { id } = useParams();//  user id, which is able in location
    const dispatch = useDispatch()
    useEffect(() => {
        async function fetchData() {
            await dispatch(fetchPostComments(id))
        }
        fetchData()
    }, [])
    const Comments = useSelector((state: any) => state.comments.comments)
    return (
        <PostCommentsComponents comments={Comments} />
    )
}