import StyledHeader from "./Styled components/Header";
import styled from "styled-components";
import NavLink from "./shared/NavLink";
import Color from "color";
import Link from "next/link"


const HeaderContent = styled.div`
	height: 100%;
	display: flex;
	justify-content: space-between;
`;

const Media = styled.div`
	height: 100%;
	// flex: 0.25;
	padding-right: 1rem;
	align-items: center;
	display: flex;
	// outline: solid;
	a {
		border-radius: 0.5rem;
		padding: 0.5rem 1rem;
		margin: 0 0.25rem;
		border: 1px solid transparent;
		&:hover,
		&:focus &.active {
			outline: none;
			background: ${props => props.theme.colors.secondary.dark};
			border: 1px solid ${props => new Color(props.theme.colors.secondary.dark).darken(0.25).hex()};
		}
	}
`;

const LogoContainer = styled.div`
	height: 100%;
	min-width: 320px;
	background: ${props => props.theme.colors.secondary.dark};
	display: flex;
	align-items: center;
	justify-content: center;
	h1 {
		margin: 0;
	}
	@media screen and (max-width: 768px) {
		min-width: 240px;
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<HeaderContent>
				<LogoContainer>
					<Link href="/"><a><h1>SMFM</h1></a></Link>
				</LogoContainer>
				<Media>
					<NavLink activeClassName="active" href="/auth/login">
						<a>Login</a>
					</NavLink>
					<NavLink activeClassName="active" href="/auth/register">
						<a>Sign Up</a>
					</NavLink>
				</Media>
			</HeaderContent>
		</StyledHeader>
	);
};

export default Header;
