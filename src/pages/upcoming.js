import MovieItem from "../components/shared/MovieItem";
import MovieSection from "../components/Styled components/MovieSection";

const Home = ({ movies }) => {
	return (
		<div>
			<MovieSection id="my-feed">
                <h1>Up Coming</h1>
				<div>
					{movies.map(movie => (
						<MovieItem {...movie} />
					))}
				</div>
			</MovieSection>
		</div>
	);
};

Home.getInitialProps = async ({ req, query }) => {
	const response = await fetch("http://localhost:3000/api/movies/upcoming");
	const data = await response.json();
	return {
		movies: data.results,
	};
};

export default Home;
