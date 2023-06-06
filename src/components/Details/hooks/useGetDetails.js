import { useState, useEffect } from 'react';

const useGetDetails = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getDetails = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/1');
      
      if (!response.ok) {
        throw new Error('Error fetching data');
      }

      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetails();
  }, [url]);

  return { data, loading, error };
};

export default useGetDetails;
