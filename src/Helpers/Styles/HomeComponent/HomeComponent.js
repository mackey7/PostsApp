import Styled from 'styled-components'

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