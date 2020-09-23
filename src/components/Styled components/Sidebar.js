import styled from "styled-components";

const height = "calc(100vh - 64px)";

const Sidebar = styled.div`
	max-height: ${height};
	min-height: ${height};
	overflow: ${props => (props.open ? "auto" : "hidden")};
	width: ${props => (props.open ? "320px" : "0px")};
	transition: width padding 0.5s;
	position: fixed;
	display: flex;
	flex-direction: column;
	padding: ${props => (props.open ? "2rem" : "0px")};
	padding-right: 0;
	background: ${props => props.theme.colors.primary.dark};
	&::-webkit-scrollbar {
		width: 4px;
	}
`;

export default Sidebar;
