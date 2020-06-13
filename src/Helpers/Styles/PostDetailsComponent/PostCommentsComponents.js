import Styled from 'styled-components'

const BLUE = "blue"

export const ComponentWrapper = Styled.section`
width:80%;
margin:0 auto;
`

export const SwitchesContainer = Styled.div`
display:flex;
justify-content: space-between;
`

export const Btn = Styled.input`
border:0;
background:none;
color:${BLUE}
text-decoration:underline;
`