import styled from "styled-components"

const Header = styled.header`
    height: 64px;
    // padding: 12px 0;
    background: ${props => props.theme.colors.secondary.normal};
    color: ${props => props.theme.colors.primary.text};
    position: fixed;
    top: 0;
    width: 100vw;
`

export default Header