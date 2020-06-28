import React from 'react'
import { SingleComment } from './SingleComment'
import { ComponentWrapper, SwitchesContainer, Btn } from '../../Helpers/Styles/PostDetailsComponent/PostCommentsComponents'

export const PostCommentsComponents = ({ comments, showComments, setShowComments, showModal }: any) => {
    const showCommentsBtn = showComments ? <Btn data-testid="HideComments" onClick={() => setShowComments()} type="button" value="Hide Comments" /> : <Btn data-testid="ShowComments" onClick={() => setShowComments()} type="button" value="Show Comments" />
    const showAddCommentBtn = showComments ? <Btn data-testid="AddComments" type="button" value="Add Comments" onClick={() => showModal()} /> : null
    const showCommentContainer = showComments ?

        comments ? comments.map((data: any) => {

            return (
                < SingleComment key={data.id} data={data} />
            )
        }) : <div>Loading...</div>
        : null

    return (
        <ComponentWrapper>
            <SwitchesContainer data-testid="SwitchesContainer">
                {showCommentsBtn}
                {showAddCommentBtn}
            </SwitchesContainer>
            {showCommentContainer}
        </ComponentWrapper >
    )
}