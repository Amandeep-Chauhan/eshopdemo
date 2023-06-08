import { useState, useEffect, useCallback } from 'react';

const useGetProductList = (params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    const{name}=params
  const getDetails = useCallback(async () => {

      try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${name}`);
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
    }, []);

  useEffect(() => {
    getDetails();
  }, [getDetails]);
  return { data, loading, error };
};

export default useGetProductList;