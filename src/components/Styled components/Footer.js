import styled from "styled-components"

const Footer = styled.footer`
    height: 64px;
    background: ${props => props.theme.colors.primary.dark};
    color: ${props => props.theme.colors.primary.text};
    z-index: 2;
    
`

export default Footer