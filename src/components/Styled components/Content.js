import styled from "styled-components";

const height = "calc(100vh - 60px)";


const Content = styled.div`
	height: ${height};
	overflow: auto;
	flex: 1;
	margin-left: ${props => (props.sidebarOpen ? "320px" : "0px")};
	transition: margin 0.5s;
	background: ${props => props.theme.colors.primary.normal};
	@media screen and (max-width: 768px) {
		margin-left: 0;
	}
`;

export default Content;
