import { useState, useEffect } from 'react';

interface RSSItem {
  title: string;
  link: string;
  description: string;
}

const useRSS = (url: string) => {
  const [data, setData] = useState<RSSItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const xml = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xml, 'text/xml');
        const items = Array.from(xmlDoc.getElementsByTagName('item')).map((item) => ({
          title: item.getElementsByTagName('title')[0].textContent || '',
          link: item.getElementsByTagName('link')[0].textContent || '',
          description: item.getElementsByTagName('description')[0].textContent || '',
        }));
        setData(items);
        setLoading(false);
      } catch (error) {
        setError('Error fetching RSS feed');
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useRSS;