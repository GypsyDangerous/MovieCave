import styled from "styled-components"

const MovieSection = styled.section`
    & > div{
        display: flex;
        width: 100%;
        overflow: auto;
        height: min-content;
    }
    height: min-content;
    padding: .5rem;
    box-sizing: border-box;
    margin-left: 2rem;
    margin-top: 3rem;
    color: ${props => props.theme.colors.primary.text};
    &::-webkit-scrollbar, & *::-webkit-scrollbar {
		height: 4px;
	}

`

export default MovieSection