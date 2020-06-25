import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Wrapper, Content, H5, Form, BtnContainer, Input, TextArea, Label, Row, CancelBtn, SaveBtn } from '../../Helpers/Styles/Modal/ModalAdd.js'
import { Errormessage } from '../../Helpers/Styles/GeneralStyles'
import { addComment } from '../../Actions/PostDetailsActions'

export const AddCommentComponent = ({ id, showAddCommentsFn }) => {
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();
    const [commentState, setCommentState] = useState(
        { postId: id, id: uuidv4(), name: '', email: '', body: '' }
    );

    const handleCommentChange = (e: any) => setCommentState({
        ...commentState,
        [e.target.name]: e.target.value, postId: id, id: uuidv4(),
    });
    const handleSendComment = () => {
        dispatch(addComment(commentState));
        setCommentState(
            { postId: id, id: uuidv4(), name: '', email: '', body: '' }
        );
        showAddCommentsFn();
    }


    return (
        <Wrapper>
            <Content>
                <H5>
                    Add comment
                </H5>
                <Form onSubmit={handleSubmit(handleSendComment)} >
                    <h2>Add comment</h2>

                    <Errormessage>  {errors.name && 'Name is required.'} </Errormessage>


                    <Row>
                        <Label htmlFor="name">Name</Label>
                        <Input data-testid="name" type="text" name="name" ref={register({ required: true })} onChange={handleCommentChange} />
                    </Row>


                    <Errormessage>{errors.email && 'Email is required.'} </Errormessage>


                    <Row>
                        <Label htmlFor="email">Email</Label>
                        <Input data-testid="email" type="email" name="email" ref={register({ required: true })} onChange={handleCommentChange} />
                    </Row>

                    <Errormessage> {errors.body && 'Body is required.'} </Errormessage>


                    <Row>
                        <Label htmlFor="body" >Body</Label>
                        <TextArea data-testid="body" name="body" ref={register({ required: true })} onChange={handleCommentChange} ></TextArea>
                    </Row>

                    <BtnContainer>
                        <CancelBtn type="button" value="Cancel" onClick={() => showAddCommentsFn()} />
                        <SaveBtn type="submit" value="Save" />
                    </BtnContainer>
                </Form>

            </Content>
        </Wrapper >
    )

}