import styled from "styled-components";

const height = "calc(100vh - 64px)";

const Sidebar = styled.div`
	max-height: ${height};
	min-height: ${height};
    overflow: auto;
	width: 320px;
	transition: transform 0.5s;
	position: fixed;
	display: flex;
	flex-direction: column;
    padding: 2rem;
    transform-origin: left;
    transform: scaleX(${props => props.open ? "1" : "0"});
	padding-right: 0;
	background: ${props => props.theme.colors.primary.dark};
	&::-webkit-scrollbar {
		width: 4px;
		opacity: 0;
		transition: opacity .25s
	}
	&:hover{
		&::-webkit-scrollbar {
			opacity: 1
		}
	}
`;

export default Sidebar;
