import { useEffect, useState } from "react";

interface FetchItem {
  id: number;
  title: string;
  score: number;
  by: string;
  time: number;
  url: string;
  descendants: number;
  kids: number[];
}

const useFetch = ( url: string) => {
  const [data, setData] = useState<FetchItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);
  return { data, loading, error };
}

export default useFetch;