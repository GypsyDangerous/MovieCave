import React, { useState } from "react";
import styled from "styled-components";
import Content from "../../components/Styled components/Content";
import Color from "color";
import Link from "next/link";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {  withStyles, } from "@material-ui/core/styles";

const CssTextField = withStyles({
	root: {
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: "#ccc",
			},
			"&:hover fieldset": {
				borderColor: "white",
			},
		},
	},
})(FormControl);

const WhiteInput = withStyles({
	root: {
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: "#ccc",
			},
			"&:hover fieldset": {
				borderColor: "white",
			},
		},
	},
})(TextField);

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
	@media screen and (max-width: 625px) {
		width: 100vw;
		left: 0 !important;
	}
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
	transition: left 0.5s, border-radius 0.5s;
	display: flex;
	&:hover {
		border-radius: 0.5rem;
	}
	.register & {
		left: 295px;
	}
	@media screen and (max-width: 625px) {
		width: 100vw;
		left: 0 !important;
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
		border: 1px solid ${props => new Color(props.theme.colors.secondary.text).darken(0.25).alpha(0.5).hex()};
	}
`;

const AuthForm = styled.form`
	&,
	& * {
		color: white !important;
		// border-color: white;
	}
	.MuiFormControl-root {
		width: 70% !important;
		margin: 0.5rem;
		& fieldset {
			border-color: "red";
		}

		&:hover fieldset {
			border-color: "yellow";
		}
		&.mui-focused fieldset {
			border-color: "green";
		}
	}
	height: 380px;
	min-width: 305px;
	position: absolute;
	transition: 0.5s;
	left: 0;
	opacity: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${props => props.theme.colors.primary.text};
	&:first-child {
		.login & {
			left: 100%;
			opacity: 0;
		}
	}
	&:last-child {
		.register & {
			left: -100%;
			opactity: 0;
		}
	}
	@media screen and (max-width: 625px) {
		width: 100vw;
		// left: 0 !important;
	}
`;

const TextInput = styled.input`
	padding: 0.5rem 1rem;
	margin: 0.5rem;
`;

const SubmitButton = styled.input`
	cursor: pointer;
	text-align: center;
	margin-top: 0.5rem;
	border: none;
	// border: solid ${props => props.theme.colors.primary.light};
	// border-radius: .5rem;
	color: ${props => props.theme.colors.primary.text};
	background: ${props => props.theme.colors.primary.normal};
	padding: 0.75rem 1.25rem;
	box-shadow: 0 0 10px 1px ${props => props.theme.colors.primary.normal};
`;

const FormTitle = styled.h1`
	text-transform: uppercase;
`;

const AuthPage = ({ type }) => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<AuthContainer className={type}>
			<AuthBody>
				<AuthBackground />
				<AuthForms>
					<AuthInfo>
						<InfoItem>
							<InfoP>Have an Account?</InfoP>
							<Link href="login">
								<a>
									<InfoButton>Login</InfoButton>
								</a>
							</Link>
						</InfoItem>
						<InfoItem>
							<InfoP>Don't Have an Account?</InfoP>
							<Link href="register">
								<a>
									<InfoButton>Sign Up</InfoButton>
								</a>
							</Link>
						</InfoItem>
					</AuthInfo>
					<FormContainer>
						<AuthForm
							onSubmit={e => {
								e.preventDefault();
								console.log(...new FormData(e.target), e.target);
							}}
						>
							<FormTitle>Sign Up</FormTitle>
							<WhiteInput required name="email" id="register-email" label="Email" type="email" variant="outlined" />
							<WhiteInput required name="username" id="register-username" label="Username" variant="outlined" />
							<WhiteInput
								required
								id="create-password"
								variant="outlined"
								label="Password"
								name="create-password"
								type={showPassword ? "text" : "password"}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={e => setShowPassword(prev => !prev)}
												onMouseDown={e => e.preventDefault()}
											>
												{showPassword ? <Visibility /> : <VisibilityOff />}
											</IconButton>
										</InputAdornment>
									),
								}}
							/>

							<SubmitButton type="submit" value="Sign Up" />
						</AuthForm>
						<AuthForm
							onSubmit={e => {
								e.preventDefault();
								console.log(new FormData(e.target));
							}}
						>
							<FormTitle>Login</FormTitle>
							<WhiteInput required name="email" id="login-email" label="Email" type="email" variant="outlined" />
							<WhiteInput
								required
								id="enter-password"
								variant="outlined"
								label="Password"
								name="enter-password"
								type={showPassword ? "text" : "password"}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={e => setShowPassword(prev => !prev)}
												onMouseDown={e => e.preventDefault()}
											>
												{showPassword ? <Visibility /> : <VisibilityOff />}
											</IconButton>
										</InputAdornment>
									),
								}}
							/>
							<SubmitButton type="submit" value="Login" />
						</AuthForm>
					</FormContainer>
				</AuthForms>
			</AuthBody>
		</AuthContainer>
	);
};

AuthPage.getInitialProps = async ({ req, query }) => {
	return query;
};

export default AuthPage;
