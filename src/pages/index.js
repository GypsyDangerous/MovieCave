import MovieItem from "../components/shared/MovieItem";
import MovieSection from "../components/Styled components/MovieSection";

const Home = ({ movies }) => {
	return (
		<div>
			<MovieSection id="popular">
                <h1>Popular</h1>
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
	const response = await fetch("http://localhost:3000/api/movies/popular");
	const data = await response.json();
	return {
		movies: data.results,
	};
};

export default Home;
