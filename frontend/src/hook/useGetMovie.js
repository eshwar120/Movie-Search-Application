import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetMovie(url, id) {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios
      .get(`${url}`, {
        params: {
          id: id,
        },
      })
      .then((response) => {
        console.log(response);
        setMovie(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });

    return () => {
      setLoading(false);
      setMovie({});
      setError(false)
    };
  }, [id]);

  return { loading, error, movie };
}
