import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Theme from "../components/shared/Theme";
import SEO from "../components/shared/SEO";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<SEO title="IMNOTDB"></SEO>
			<Theme>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</Theme>
		</>
	);
}

export default MyApp;
