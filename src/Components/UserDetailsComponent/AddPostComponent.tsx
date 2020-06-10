import React from 'react'
import { Wrapper, Content, Row, Label, Input, TextArea, BtnContainer, SaveBtn, CancelBtn, Form, H5 } from '../../Helpers/Styles/Modal/ModalAdd'
export const AddPostComponent = () => {
    return (
        <Wrapper>
            <Content>
                <H5>Add post</H5>
                <Form>
                    <h2> Add post</h2>
                    <Row>
                        <Label htmlFor="title">Title</Label>
                        <Input type="text" name="title" />
                    </Row>
                    <Row>
                        <Label htmlFor="body" >Body</Label>
                        <TextArea name="body" ></TextArea>
                    </Row>

                </Form>
                <BtnContainer>
                    <CancelBtn type="button" value="Cancel" />
                    <SaveBtn type="submit" value="Save" />
                </BtnContainer>
            </Content>

        </Wrapper>
    )
}