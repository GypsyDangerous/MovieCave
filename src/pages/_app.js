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
		flex: 0.25;
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
        background: ${props => props.theme.colors.primary.normal};

        &:after{
            content: "\\2192";
            font-size: 1.25rem;
            position: absolute;
            top: 50%;
            color: #aaa;
            right: 1rem;
            transform: translateY(-55%)
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
    }

    a {
    	color: inherit;
    	text-decoration: none;
    }


    * {
    	box-sizing: border-box;
    }
`;

function MyApp({ Component, pageProps }) {
	return (
		<>
			<SEO title="IMNOTDB"></SEO>
			<Theme>
				<GlobalStyle />
				<Header />
				<Body>
					<Sidebar>
						<SidebarContent>
							<LinkList>
								<NavLink href="/" activeClassName="active-link">
									<ListLink>My Feed</ListLink>
								</NavLink>
								<NavLink href="/popular" activeClassName="active-link">
									<ListLink>Popular</ListLink>
								</NavLink>
								<NavLink href="/now-playing" activeClassName="active-link">
									<ListLink>Now Playing</ListLink>
								</NavLink>
								<NavLink href="/upcoming" activeClassName="active-link">
									<ListLink>Up Coming</ListLink>
								</NavLink>
								<NavLink href="/top-rated" activeClassName="active-link">
									<ListLink>Top Rated</ListLink>
								</NavLink>
							</LinkList>
						</SidebarContent>
						<Divider />
						<SidebarContent>
							<h3>Latest Activity</h3>
						</SidebarContent>
					</Sidebar>
					<Component {...pageProps} />
				</Body>
				{/* <Footer /> */}
			</Theme>
		</>
	);
}

export default MyApp;
