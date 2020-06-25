import React, { useState } from 'react'
import { Wrapper, Content, Row, Label, Input, TextArea, BtnContainer, SaveBtn, CancelBtn, Form, H5 } from '../../Helpers/Styles/Modal/ModalAdd'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Errormessage } from '../../Helpers/Styles/GeneralStyles'
import { v4 as uuidv4 } from 'uuid';
import { addPost } from '../../Actions/UserDetailsActions'
import { AddPostInterface, HandleNameChangeInterface } from '../../Helpers/Types'

export const AddPostComponent = ({ showAddPostFn, id }: AddPostInterface) => {
    const { register, handleSubmit, errors } = useForm();

    const [poststate, setPostState] = useState(
        { id: uuidv4(), title: '', body: '', userId: id }
    );
    const handlePostChange = (e: HandleNameChangeInterface) => setPostState({
        ...poststate,
        [e.target.name]: e.target.value, id: uuidv4(), userId: id
    });
    const dispatch = useDispatch();


    const handleSendPost = () => {
        dispatch(addPost(poststate))
        setPostState({ id: uuidv4(), title: '', body: '', userId: id });
        showAddPostFn()
    }

    return (
        <Wrapper>
            <Content>
                <H5>Add post</H5>
                <Form onSubmit={handleSubmit(handleSendPost)}>
                    <h2> Add post</h2>
                    <Errormessage> {errors.title && 'Title is required.'} </Errormessage>
                    <Row>
                        <Label htmlFor="title">Title</Label>
                        <Input data-testid="title" type="text" name="title" onChange={handlePostChange} ref={register({ required: true })} />
                    </Row>
                    <Errormessage> {errors.body && 'Body is required.'} </Errormessage>
                    <Row>
                        <Label htmlFor="body" >Body</Label>
                        <TextArea data-testid="body" name="body" onChange={handlePostChange} ref={register({ required: true })}  ></TextArea>
                    </Row>
                    <BtnContainer>
                        <CancelBtn onClick={() => showAddPostFn()} type="button" value="Cancel" />
                        <SaveBtn type="submit" value="Save" />
                    </BtnContainer>
                </Form>

            </Content>

        </Wrapper>
    )
}