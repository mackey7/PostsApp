import Styled from 'styled-components'
import { Link } from 'react-router-dom'
const BLUE = "#075394"
const BLACK = "black"

export const ComponentWrapper = Styled.section`
display:flex;
margin:0 auto;
width:84%;
display:flex;
flex-wrap:nowrap;
justify-content:space-between;
align-items:center;
position:relative;

padding:30px 10px 10px 10px;
color:${BLACK};
font-weight:500;
font-size:24px;
`

export const BtnBack = Styled(Link)`
color:${BLUE};
font-weight:900;
font-size:30px;
cursor:pointer;
display:flex;
align-items:center;
text-decoration:none;

span{
   font-size:14px; 
   padding-left:9px;
}
`
