import Styled from 'styled-components'

const BLUE = "#075394"
const BLACK = "black"

export const ComponentWrapper = Styled.div`
margin:0 auto;
margin-top:10px;
width:80%;
display:flex;
flex-wrap:nowrap;
justify-content:space-between;
align-items:center;
border:2px solid ${BLACK};
padding:10px;
color:${BLACK};
font-weight:500;
font-size:24px;
`
export const Btn = Styled.i`
color:${BLUE};
font-size:30px;
cursor:pointer;
height:100%;
max-width:100%;
`
