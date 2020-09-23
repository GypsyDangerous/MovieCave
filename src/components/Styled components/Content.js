import styled from "styled-components";

const Column = styled.div`
	height: 100%;
	flex: 1;
	margin-left: 320px;
	background: ${props => props.theme.colors.primary.normal};
`;

export default Column;
