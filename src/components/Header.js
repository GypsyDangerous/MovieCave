import StyledHeader from "./Styled components/Header";
import styled from "styled-components";
import NavLink from "./shared/NavLink";
import Color from "color"

const HeaderContent = styled.div`
	height: 100%;
	display: flex;
	justify-content: space-between;
`;

const Media = styled.div`
	height: 100%;
	flex: 0.2;
	align-items: center;
	display: flex;
	// justify-content: space-evenly;
	
	a{
		border-radius: .5rem;
		padding: .5rem 1rem;
		margin: 0 .25rem;
		border: 1px solid transparent;
		&:hover, &:focus &.active{
			outline: none;
			background: ${props => props.theme.colors.secondary.dark};
			border: 1px solid ${props => new Color(props.theme.colors.secondary.dark).darken(.25).hex()};
		}
	}
`;

const LogoContainer = styled.div`
	height: 100%;
	width: 320px;
	background: ${props => props.theme.colors.secondary.dark};
	display: flex;
	align-items: center;
	justify-content: center;
	h1 {
		margin: 0;
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<HeaderContent>
				<LogoContainer>
					<h1>SMFM</h1>
				</LogoContainer>
				<Media>
					<NavLink activeClassName="active" href="/auth/login"><a>Login</a></NavLink>
					<NavLink activeClassName="active" href="/auth/register"><a>Sign Up</a></NavLink>
				</Media>
			</HeaderContent>
		</StyledHeader>
	);
};

export default Header;
