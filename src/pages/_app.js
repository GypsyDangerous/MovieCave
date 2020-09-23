import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Theme from "../components/shared/Theme";
import SEO from "../components/shared/SEO";
import Body from "../components/Styled components/Body";
import Sidebar from "../components/Styled components/Sidebar";
import LinkList from "../components/Styled components/LinkList";
import NavLink from "../components/shared/NavLink";
import styled from "styled-components";

const SidebarContent = styled.div`
	display: flex;
	color: ${props => props.theme.colors.primary.text};
	width: 100%;
	flex: 1;
	&:first-child {
		flex: 0.15;
	}
	a{
		color: ${props => props.theme.colors.primary.text};
	font-size: 1rem;
	padding: 1rem;
	padding-right: 0;
	cursor: pointer;
	position: relative;
	&.active-link {
		color: ${props => props.theme.colors.secondary.normal};
		// background-color: ${props => props.theme.colors.primary.normal};
		&:before{
			border-radius: .5rem 0 0 .5rem;
			// animation: slide-background-in .5s forwards;
			@media screen and (min-width: 768px) {
				
				animation: slide-background-in 0.5s forwards;
			}
			@media screen and (max-width: 768px){
				width: 100%;
				height: 100%;
			}
			// width: 100%;
			height: 100%;
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
			background: ${props => props.theme.colors.primary.normal};
		}
		&:after {
			content: "\\2192";
			font-size: 1.25rem;
			position: absolute;
			top: 50%;
			color: #aaa;
			right: 1rem;
			// opacity: 0;
			animation: slide-in .5s forwards;
			// transform: translateY(-55%);
		}
	}
	
`;

const ListLink = styled.a`
	color: ${props => props.theme.colors.primary.text};
	font-size: 1rem;
	padding: 1rem;
	padding-right: 0;
	cursor: pointer;
	position: relative;
	&.active-link {
		color: ${props => props.theme.colors.secondary.normal};
		// background-color: ${props => props.theme.colors.primary.normal};
		&:before {
			border-radius: 0.5rem 0 0 0.5rem;

			height: 100%;
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
			background: ${props => props.theme.colors.primary.normal};
		}
		&:after {
			content: "\\2192";
			font-size: 1.25rem;
			position: absolute;
			top: 50%;
			color: #aaa;
			right: 1rem;
			// opacity: 0;
			animation: slide-in 0.5s forwards;
			// transform: translateY(-55%);
		}
	}
`;

const Divider = styled.hr`
	width: 80%;
	border: none;
	border-top: 1px solid #aaaaaaaa;
	justify-self: center;
	margin: 0;
`;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
    	padding: 0;
        margin: 0;
		font-family: ${props => props.theme.fonts.join(", ")};
		overflow: hidden;
    }

    a {
    	color: inherit;
    	text-decoration: none;
    }


    * {
    	box-sizing: border-box;
	}
	
	::-webkit-scrollbar {
		width: 8px;
	  }
	  
	  /* Track */
	  ::-webkit-scrollbar-track {
		background: ${props => props.theme.colors.primary.normal};
	  }
	  
	  /* Handle */
	  ::-webkit-scrollbar-thumb {
		background: ${props => props.theme.colors.secondary.dark};
		border-radius: .5rem;
	  }
	  
	  /* Handle on hover */
	  ::-webkit-scrollbar-thumb:hover {
		background: ${props => props.theme.colors.secondary.normal};
	  }
`;

function MyApp({ Component, pageProps, ...props }) {
	const isError = props.router.route === "/_error";
	return (
		<>
			<SEO title="Social Media For Movies"></SEO>
			<Theme>
				<GlobalStyle />
				<Header />
				<Body>
					{!isError && (
						<Sidebar open>
							<SidebarContent>
								<LinkList>
									<NavLink href="/" activeClassName="active-link">
										<a>My Feed</a>
									</NavLink>
									<NavLink href="/popular" activeClassName="active-link">
										<a>Popular</a>
									</NavLink>
									<NavLink href="/now-playing" activeClassName="active-link">
										<a>Now Playing</a>
									</NavLink>
									<NavLink href="/upcoming" activeClassName="active-link">
										<a>Up Coming</a>
									</NavLink>
									<NavLink href="/top-rated" activeClassName="active-link">
										<a>Top Rated</a>
									</NavLink>
								</LinkList>
							</SidebarContent>
							<Divider />
							<SidebarContent>
								<h3>Latest Activity</h3>
							</SidebarContent>
						</Sidebar>
					)}
					<Component {...pageProps} />
				</Body>
				{/* <Footer /> */}
			</Theme>
		</>
	);
}

export default MyApp;
