import Styled from 'styled-components'


export const CenterElement = Styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
`
export const Loader = Styled.div`
border:16px solid #f3f3f3;
 border-top: 16px solid #3498db;
 border-radius:50%;
 width:60px;
 height:60px;
 animation:spin 2s linear infinite;

 @keyframes spin{
     0% {transform:rotate(0deg);}
     100%{transform: rotate(360deg);}
 }
`
export const Centertext = Styled.p`
text-align:center;
padding:20px;
`


export const Errormessage = Styled.p`
width:100%;
text-align:center;
color:red;
`
