import { useMemo } from "react";
import { useState, useRef, useCallback } from "react";
import MovieItem from "../components/shared/MovieItem";
import MovieSection from "../components/Styled components/MovieSection";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

const Home = ({ movies }) => {
	const [page, setPage] = useState(2);

	const { loading, error, results, hasMore } = useInfiniteScroll("http://localhost:3000/api/movies/popular", page);

	const observer = useRef();
	const lastElementRef = useCallback(
		node => {
			if (loading) return;
			if (observer.current) observer.current.disconnect();
			let options = {
				// rootMargin: "-400px",
			};
			observer.current = new IntersectionObserver(entries => {
				if (entries[0].isIntersecting && hasMore) {
					setPage(prev => prev + 1);
				}
			}, options);
			if (node) observer.current.observe(node);
		},
		[loading, hasMore]
	);

	const displayResults = useMemo(() => [...movies, ...results]);

	return (
		<div>
			<MovieSection id="my-feed">
				<h1>My Feed</h1>
				<div>
					{displayResults.map((movie, index) =>
						displayResults.length === index + 1 ? <MovieItem {...movie} passdownRef={lastElementRef} /> : <MovieItem {...movie} />
					)}
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
