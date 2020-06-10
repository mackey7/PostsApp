import Styled from 'styled-components'

export const Wrapper = Styled.section`
position: absolute;
display:flex;
justify-content:center;
align-items:center;
width:100vw;
height:100vh;
background:rgb(0, 0, 0, 0.5);
z-index: 999;
left: 0;
top: 0;
`

export const Content = Styled.section`
background-color:#fefefe;
border:2px solid black;
width:450px;
max-height:100%;
`

export const Row = Styled.div`
display:flex;
justify-content:space-between;
min-width:100%;
`
export const Input = Styled.input`
border:2px solid black;
margin-bottom:10px;
width:300px;
`
export const Label = Styled.label`
padding: 0px 20px;
font-weight:600;
`
export const TextArea = Styled.input`
border:2px solid black;
width:300px;
height:150px;
`
export const BtnContainer = Styled.div`

`
export const CancelBtn = Styled.input`

`

export const SaveBtn = Styled.input`
border:2px solid black;
margin-bottom:10px;
width:300px;
`

export const Form = Styled.form`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-top:2px  solid black;
border-bottom:2px  solid black;
margin-bottom:20px;
padding:0px 20px 20px 20px;
`

export const H5 = Styled.h5`
padding:5px;
margin:0;
font-weight:900;
`