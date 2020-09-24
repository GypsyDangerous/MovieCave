import StyledHeader from "./Styled components/Header";
import styled from "styled-components";
import NavLink from "./shared/NavLink";
import Color from "color";
import Link from "next/link";
import { HamburgerButton } from "react-hamburger-button";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

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
        color: ${props => props.theme.colors.secondary.text};
        outline: none;
		&:hover,
		&:focus, &.active {
			outline: none !important;
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
	justify-content: space-around;
	a {
		display: flex;
		align-items: center;
		color: white;
		img {
		}
		* {
			margin: 0 0.5rem;
		}
	}
	@media screen and (max-width: 768px) {
		min-width: 240px;
	}
`;

const Header = () => {
    const {sidebarOpen, setSidebarOpen} = useContext(AppContext)
	return (
		<StyledHeader>
			<HeaderContent>
				<LogoContainer>
					<HamburgerButton
						open={sidebarOpen}
						onClick={() => setSidebarOpen(prev => !prev)}
						width={30}
						height={30}
						strokeWidth={3}
						color="white"
						animationDuration={0.5}
					/>
					<Link href="/">
						<a>
							<img src="/logo.png" alt="" width="50" />
							<h1>SMFM</h1>
						</a>
					</Link>
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
