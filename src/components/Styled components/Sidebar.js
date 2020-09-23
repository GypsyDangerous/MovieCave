import styled from "styled-components"

const height = "calc(100vh - 64px)"

const Sidebar = styled.div`
    max-height: ${height};
    min-height: ${height};
    width: 320px;
    position: fixed;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-right: 0;
    background: ${props => props.theme.colors.primary.dark};
`

export default Sidebar