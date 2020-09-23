import React from "react";
import styled from "styled-components";
import Content from "../../components/Styled components/Content";
import Color from "color";

const AuthContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const width = "640px";
const height = "320px";

const AuthBody = styled.div`
	width: ${width};
	height: ${height};
	background: ${props => props.theme.colors.secondary.normal};
	position: relative;
`;

const AuthBackground = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	overflow: hidden;
	&::before,
	&::after {
		content: "";
		position: absolute;
		left: 159px;
		top: 50px;
		background: ${props => props.theme.colors.secondary.dark};
		transform: rotateX(52deg) rotateY(15deg) rotateZ(-38deg);
		width: 300px;
		height: 285px;
		transition: all 0.5s;
	}
	&::after {
		background: ${props => props.theme.colors.secondary.light};
		top: -10px;
		left: 80px;
		width: 320px;
		height: 180px;
	}
	.login &::before {
		left: 180px;
		top: 62px;
		height: 265px;
	}
	.login &::after {
		top: 22px;
		left: 192px;
		width: 324px;
		height: 220px;
	}
`;

const AuthForms = styled.div`
	position: relative;
`;

const AuthInfo = styled.div`
	text-align: left;
	font-size: 0;
`;
const InfoItem = styled.div`
	text-align: center;
	font-size: 1rem;
	width: 300px;
	height: 320px;
	display: inline-block;
	vertical-align: top;
	color: ${props => props.theme.colors.secondary.text};
	opactiy: 1;
`;

const FormContainer = styled.div`
	overflow: hidden;
	position: absolute;
	height: 380px;
	width: 305px;
	background: ${props => props.theme.colors.primary.dark};
	top: -30px;
	left: 30px;
	transition: 0.5s;
	.login & {
		left: 295px;
	}
`;

const AuthPage = ({ type }) => {
	return (
		<Content>
			<AuthContainer className={type === "login" ? "login" : ""}>
				<AuthBody>
					<AuthBackground />
					<AuthForms>
						<AuthInfo>
							<InfoItem></InfoItem>
							<InfoItem></InfoItem>
						</AuthInfo>
						<FormContainer></FormContainer>
					</AuthForms>
				</AuthBody>
			</AuthContainer>
		</Content>
	);
};

AuthPage.getInitialProps = async ({ req, query }) => {
    console.log(query)
	return query;
};

export default AuthPage;
