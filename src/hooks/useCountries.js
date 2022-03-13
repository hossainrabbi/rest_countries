import { useEffect, useState } from 'react';

export default function useCountries(maxPopulation) {
  const [countriesData, setCountriesDada] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchCountries, setSearchCountries] = useState('');
  const [searchCountriesData, setSearchCountriesData] = useState([]);
  const [selectRegion, setSelectRegion] = useState('All');
  const [totalPopulationArray, setTotalPopulationArray] = useState([]);

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
    const filterRegion = searchCountriesData.filter((item) => {
      if (selectRegion.toLowerCase() === 'all') {
        return item.region;
      } else {
        return item.region.toLowerCase() === selectRegion.toLowerCase();
      }
    });

    setCountries(filterRegion);
  }, [searchCountriesData, selectRegion]);

  useEffect(() => {
    const filterRange = searchCountriesData.filter(
      (item) => item.population > maxPopulation
    );
    setCountries(filterRange);
  }, [searchCountriesData, maxPopulation]);

  useEffect(() => {
    const filterSearch = countriesData.filter((item) =>
      item.name.common.toLowerCase().includes(searchCountries.toLowerCase())
    );

    setSearchCountriesData(filterSearch);
  }, [countriesData, searchCountries]);

  useEffect(() => {
    const populationsArray = [];
    countriesData.forEach((item) => populationsArray.push(item.population));
    setTotalPopulationArray(populationsArray);
  }, [countriesData]);

  return {
    countries,
    loading,
    error,
    searchCountries,
    setSearchCountries,
    selectRegion,
    setSelectRegion,
    totalPopulationArray,
  };
}
