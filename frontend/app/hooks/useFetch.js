import { useState, useEffect } from "react";

const useFetch = (url, type = null) => {
  const BASE_URL = 'https://gutenmorgenclub.herokuapp.com/api/';
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchData = async ()  => {
      setLoading(true);

      try {
        const res = await fetch(BASE_URL + url);
        const json = await res.json();
        
        if (type === 'collection') {
          setData(json.data);
        } else {
          setData(json.data.attributes);
        }
        setLoading(false);
      } catch(err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchData();
  }, [url, type])

  return {loading, error, data};
}

export default useFetch;