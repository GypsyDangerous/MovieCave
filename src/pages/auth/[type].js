import React from "react";
import styled from "styled-components";
import Content from "../../components/Styled components/Content";
import Color from "color";
import Link from "next/link";

const AuthContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const width = "620px";
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
	.register &::before {
		left: 180px;
		top: 62px;
		height: 265px;
	}
	.register &::after {
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
	display: flex;
	justify-content: space-between;
`;
const InfoItem = styled.div`
	text-align: center;
	font-size: 1rem;
	width: 300px;
	height: 320px;
	display: inline-block;
	vertical-align: top;
	color: ${props => props.theme.colors.secondary.text};
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
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
	.register & {
		left: 295px;
	}
`;

const InfoP = styled.p`
	font-size: 1.25rem;
`;

const InfoButton = styled.button`
	border-radius: 0.5rem;
	padding: 0.5rem 1rem;
	margin: 0 0.25rem;
	border: 1px solid ${props => new Color(props.theme.colors.secondary.text).darken(0.25).hex()};
    color: ${props => props.theme.colors.secondary.text};
    outline: none;
	background: none;
	font-size: 1.25rem;
	&:hover,
	&:focus &.active {
		outline: none;
		background: ${props => props.theme.colors.secondary.dark};
		border: 1px solid ${props => new Color(props.theme.colors.secondary.text).darken(0.25).alpha(.5).hex()};
	}
`;

const AuthPage = ({ type }) => {
	return (
		<AuthContainer className={type}>
			<AuthBody>
				<AuthBackground />
				<AuthForms>
					<AuthInfo>
						<InfoItem>
							<InfoP>Have an Account?</InfoP>
							<Link href="login"><a><InfoButton>Login</InfoButton></a></Link>
						</InfoItem>
						<InfoItem>
							<InfoP>Don't Have an Account?</InfoP>
							<Link href="register"><a><InfoButton>Sign Up</InfoButton></a></Link>
						</InfoItem>
					</AuthInfo>
					<FormContainer></FormContainer>
				</AuthForms>
			</AuthBody>
		</AuthContainer>
	);
};

AuthPage.getInitialProps = async ({ req, query }) => {
	return query;
};

export default AuthPage;
