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
margin-top:30px;
width:100%;
display:flex;
justify-content:flex-end;
`
export const CancelBtn = Styled.input`
color:#000;
background:#fff;
border:2px solid #000;
padding:10px 40px;
font-size:14px;
-webkit-box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
-moz-box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
cursor: pointer;
margin-right:10px;
&:hover{
    background:#d9d9d9;
    
}
`

export const SaveBtn = Styled.input`
color:#fff;
background: #075394;
border:2px solid #000;
padding:10px 40px;
font-size:14px;
-webkit-box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
-moz-box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
cursor: pointer;
&:hover{
    background:blue;
}
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