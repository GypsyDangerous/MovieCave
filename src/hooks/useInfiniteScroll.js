import { useState, useEffect, useRef } from "react";

const useInfiniteScroll = (url, page, setter) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();
	const [results, setResults] = useState([]);
    const [hasMore, setHasMore] = useState(false);

	useEffect(() => {
		(async () => {
			setLoading(true);
			setError(false);
			try {
				const response = await fetch(`${url}?page=${page}`);
                const json = await response.json();
                if(!response.ok){
                    throw new Error (`${json.status}: ${json.message}`)
                }
                const errors = json.errors;
				setHasMore(page < 500);
				if (errors) {
					throw new Error(errors[0]);
				}
				setResults(prev => [...new Set([...prev, ...json.results])]);
				setLoading(false);
			} catch (err) {
                setLoading(false)
                console.log(err.message)
				setError(err.message);
			}
		})();
	}, [page]);

	return { loading, error, results, hasMore };
};

export default useInfiniteScroll;
