import React from 'react'


export const PostCommentsComponents = ({ comments }) => {
    return (
        comments ? comments.map((data: any) => {

            return (
                < SingleComment key={data.id} data={data} />
            )
        }) : <div>Loading...</div>
    )
}