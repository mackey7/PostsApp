import React from 'react'
import { Wrapper, Content, Row, Label, Input, TextArea, BtnContainer, SaveBtn, CancelBtn, Form, H5 } from '../../Helpers/Styles/Modal/ModalAdd'
import { useForm } from 'react-hook-form'
import { Errormessage } from '../../Helpers/Styles/GeneralStyles'



export const AddPostComponent = () => {
    const { register, handleSubmit, errors } = useForm();
    return (
        <Wrapper>
            <Content>
                <H5>Add post</H5>
                <Form>
                    <h2> Add post</h2>
                    <Errormessage> {errors.title && 'Title is required.'} </Errormessage>
                    <Row>
                        <Label htmlFor="title">Title</Label>
                        <Input type="text" name="title" />
                    </Row>
                    <Errormessage> {errors.body && 'Body is required.'} </Errormessage>
                    <Row>
                        <Label htmlFor="body" >Body</Label>
                        <TextArea name="body" ></TextArea>
                    </Row>
                    <BtnContainer>
                        <CancelBtn type="button" value="Cancel" />
                        <SaveBtn type="submit" value="Save" />
                    </BtnContainer>
                </Form>

            </Content>

        </Wrapper>
    )
}