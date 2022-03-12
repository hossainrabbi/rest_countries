import { useEffect, useState } from 'react';

export default function useCountries() {
  const [countriesData, setCountriesDada] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchCountries, setSearchCountries] = useState('');

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_REST_COUNTRIES_API}`
        );
        const data = await response.json();

        setCountriesDada(data);
        setError(false);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    };

    fetchFunction();
  }, [searchCountries]);

  useEffect(() => {
    const filterSearch = countriesData.filter((item) =>
      item.name.common.toLowerCase().includes(searchCountries.toLowerCase())
    );

    setCountries(filterSearch);
  }, [countriesData, searchCountries]);

  return {
    countries,
    loading,
    error,
    setSearchCountries,
  };
}
