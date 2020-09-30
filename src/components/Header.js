import StyledHeader from "./Styled components/Header";
import styled from "styled-components";
import NavLink from "./shared/NavLink";
import Color from "color";
import Link from "next/link";
import { HamburgerButton } from "react-hamburger-button";
import { useCallback, useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { useMediaQuery } from "react-responsive";
import { memo, useMemo } from "react";
import { InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
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
        width: max-content;
		color: ${props => props.theme.colors.secondary.text};
		outline: none;
		&:hover,
		&:focus,
		&.active {
			outline: none !important;
			background: ${props => props.theme.colors.secondary.dark};
			border: 1px solid ${props => new Color(props.theme.colors.secondary.dark).darken(0.25).hex()};
		}
		@media screen and (max-width: 625px) {
			border-radius: 0.25rem;
			padding: 0.25rem 0.5rem;
		}
	}
`;

const LogoTitle = styled.h1`
	@media screen and (max-width: 450px) {
		display: none;
	}
`;

const LogoContainer = styled.div`
	height: 100%;
	min-width: 320px;
	background: ${props => props.theme.colors.secondary.dark};
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 0 0.5rem;
	a {
		display: flex;
		align-items: center;
		color: white;
		* {
			margin: 0 0.5rem;
		}
	}
	@media screen and (max-width: 768px) {
		min-width: 240px;
	}
	@media screen and (max-width: 450px) {
		min-width: 10px;
		width: max-content;
	}
`;

const SearchContainer = styled.div`
	&,
	& * {
		color: white !important;
	}
	// height: 100%;
	// display: flex;
	// align-items: center;
	align-self: center;
    border-radius: 0.25rem;
    margin: 0 .5rem;
	background: ${props => props.theme.colors.secondary.dark};
`;

const Header = ({ HideSidebar }) => {
	const { sidebarOpen, setSidebarOpen } = useContext(AppContext);

	const isMobile = useMediaQuery({
		query: "(max-width: 450px)",
	});

	return (
		<StyledHeader>
			<HeaderContent>
				<LogoContainer>
					{!isMobile && !HideSidebar && (
						<HamburgerButton
							open={sidebarOpen}
							onClick={() => setSidebarOpen(prev => !prev)}
							width={30}
							height={30}
							strokeWidth={3}
							color="white"
							animationDuration={0.5}
						/>
					)}
					<Link href="/">
						<a>
							<img style={{filter: "brightness(60%) contrast(3) hue-rotate(180deg) invert(2)"}} src={isMobile ? "/logo-small.png" : "/logo-big.png"} alt="" width={isMobile ? "50" : "130"} />
							{/* {!isMobile && <h1>SMFM</h1>} */}
						</a>
					</Link>
				</LogoContainer>
				{!isMobile && (
					<SearchContainer>
						<TextField
							id="input-with-icon-textfield"
							// label="Search"
							variant="outlined"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<SearchIcon />
									</InputAdornment>
								),
							}}
						/>
					</SearchContainer>
				)}
				<Media>
					{!isMobile ? (
						<>
							<NavLink activeClassName="active" href="/auth/login">
								<a>Login</a>
							</NavLink>
							<NavLink activeClassName="active" href="/auth/register">
								<a>Sign Up</a>
							</NavLink>
						</>
					) : !HideSidebar ? (
						<HamburgerButton
							open={sidebarOpen}
							onClick={() => setSidebarOpen(prev => !prev)}
							width={20}
							height={15}
							strokeWidth={3}
							color="white"
							animationDuration={0.5}
						/>
					) : (
						<></>
					)}
				</Media>
			</HeaderContent>
		</StyledHeader>
	);
};

export default Header;
