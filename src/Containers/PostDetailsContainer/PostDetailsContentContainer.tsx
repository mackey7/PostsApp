import React, { useEffect } from 'react'
import { UseParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PostDetailsContentComponent } from '../../Components/PostDetailsComponent/PostDetailsContentComponent'
import { fetchUserPost } from '../../Actions/PostDetailsActions'
import { useParams } from 'react-router'

export const PostDetailsContentContainer = () => {
    const { type } = useParams()
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchData() {
            await dispatch(fetchUserPost(type))
        }
        fetchData()
    })

    const PostData = useSelector((state: any) => state.postDetails.post)

    return (
        <PostDetailsContentComponent detailsData={PostData} />
    )
}