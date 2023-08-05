import axios from "axios";
import { useEffect, useState } from "react";

export default function useMoviesSearch(url, query, pageNumber) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    setMovies([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios
      .get(`${url}`, {
        params: {
          movieName: query,
          page: pageNumber,
        },
        cancelToken: new axios.CancelToken((canc) => {
          cancel = canc;
        }),
      })
      .then((response) => {
        // console.log(response);
        setMovies((movies) => [
          ...movies,
          ...response.data.data.results.map((item) => {
            return {
              id: item.id,
              original_title: item.original_title,
              poster_path: item.poster_path,
              vote_average: item.vote_average,
            };
          }),
        ]);
        setHasMore(response.data.data.results.length > 0);
        setNotFound(response.data.data.results.length === 0 && response.data.data.page === 1)
        setLoading(false);
        setError(false)
      })
      .catch((err) => {
        if (axios.isCancel(err)) return
        console.log(err)
          setError(true);
          setLoading(false);
          setNotFound(false)
      });

    return () => {
      cancel();
    };
  }, [query, pageNumber]);

  return { loading, error, hasMore, movies, notFound };
}
