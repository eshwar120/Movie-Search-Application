import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetActor(url, id) {
  const [actor, setActor] = useState({});
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
        // console.log(response);
        setActor(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });

    return () => {
      setLoading(false);
      setActor({});
      setError(false)
    };
  }, [id]);

  return { loading, error, actor };
}
