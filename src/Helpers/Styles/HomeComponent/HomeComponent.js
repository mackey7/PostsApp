import Styled from 'styled-components'
import { Link } from "react-router-dom";

const BLACK = "black"

export const HomeWrapper = Styled.section`
margin:0 auto;
width:80%;
display:flex;
flex-wrap:wrap;
`

export const UserCardWrapper = Styled.article`
max-width:33%;
width:200px;
display:flex;
flex-direction:column;
border:3px solid ${BLACK};
min-height:400px;
margin:20px;
padding:30px;
`


export const UserCardButton = Styled(Link)`
border-top: 2px solid ${BLACK};
border-right: 4px solid ${BLACK};
border-bottom: 4px solid ${BLACK};
border-left: 2px solid ${BLACK};
background:none;
text-decoration:none;
text-align:center;
padding:20px;
color:${BLACK};
font-weight:500;
cursor:pointer;
`