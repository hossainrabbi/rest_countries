import { useEffect, useState } from 'react';

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchFunction = async () => {
    try {
      setLoading(true);
      const response = await fetch(process.env.REACT_APP_REST_COUNTRIES_API);
      const data = await response.json();
      setCountries(data);
      setError(false);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchFunction();
  }, []);

  return {
    countries,
    loading,
    error,
  };
}
