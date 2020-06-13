import React from 'react'
import { SingleComment } from './SingleComment'
import { ComponentWrapper, SwitchesContainer, Btn } from '../../Helpers/Styles/PostDetailsComponent/PostCommentsComponents'

export const PostCommentsComponents = ({ comments, showComments, setShowComments }: any) => {
    const showCommentsBtn = showComments ? <Btn onClick={() => setShowComments()} type="button" value="Hide Comments" /> : <Btn onClick={() => setShowComments()} type="button" value="Show Comments" />
    const showAddCommentBtn = showComments ? <Btn type="button" value="Add Comments" /> : null
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