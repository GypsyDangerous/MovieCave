import fetch from "fetchio-js";

export default async (req, res) => {
	const data = await fetch(`https://api.themoviedb.org/3/movie/latest?api_key=${process.env.API_KEY}`);
	res.json(data);
};
