import styled from "styled-components";

const Content = styled.div`
	height: 100%;
	flex: 1;
	margin-left: ${props => props.sidebarOpen ? "320px" : "0px"};
	transition: margin .5s;
	background: ${props => props.theme.colors.primary.normal};
`;

export default Content;
