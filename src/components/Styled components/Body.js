import styled from "styled-components"

const Body = styled.main`
    margin-top: 64px;
    display: flex;
    height: 100vh;
    font-family: ${props => props.theme.fonts.join(",")}
`

export default Body