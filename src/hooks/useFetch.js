import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(API, transformFn) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!API) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(API);

        const finalData = transformFn? transformFn(response.data): response.data;

        setData(finalData);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API, transformFn]);

  return { data, loading, error };
}

export default useFetch;