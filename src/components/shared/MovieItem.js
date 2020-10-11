import styled from "styled-components";

const MovieDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 1.25rem;
	margin-top: 1rem;
	// margin-left: 0;
	width: 220px;
	img {
		border-radius: 0.5rem;
		box-shadow: 0px 0px 45px -30px #000000;
	}
	position: relative;
	.vote {
		position: absolute;
		left: 50%;
		transform: translate(-50%, -50%);
		background: #ffb10a;
		border-radius: 1.75rem;
		padding: 0.15rem 0.75rem;
		display: flex;
		align-items: center;
	}
`;

const MovieItem = ({ passdownRef, poster_path, title, vote_average }) => {
	return (
		<MovieDiv ref={passdownRef}>
			<div className="vote">{vote_average}</div>
			<img width="220" src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`} />
			<h4>{title}</h4>
		</MovieDiv>
	);
};

export default MovieItem;
