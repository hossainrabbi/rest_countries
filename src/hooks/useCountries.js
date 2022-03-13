import { useEffect, useState } from 'react';

export default function useCountries(maxPopulation) {
  const [countriesData, setCountriesDada] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchCountries, setSearchCountries] = useState('');
  const [searchCountriesData, setSearchCountriesData] = useState([]);
  const [selectRegion, setSelectRegion] = useState('All');
  const [selectSort, setSelectSort] = useState('default');
  const [totalPopulationArray, setTotalPopulationArray] = useState([]);

  // Fetch data from REST COUNTRIES API
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

  // Filter data with select region
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

  // Filter data with input range
  useEffect(() => {
    const filterRange = searchCountriesData.filter(
      (item) => item.population > maxPopulation
    );
    setCountries(filterRange);
  }, [searchCountriesData, maxPopulation]);

  // Sort data
  useEffect(() => {
    if (selectSort === 'aToZ') {
      const sortedAtoZ = searchCountriesData.sort((a, b) => {
        if (a.name.common < b.name.common) {
          return -1;
        }
        if (a.name.common > b.name.common) {
          return 1;
        }
        return 0;
      });
      setCountries(sortedAtoZ);
    } else if (selectSort === 'zToA') {
      const sortedZtoA = searchCountriesData.sort((a, b) => {
        if (a.name.common < b.name.common) {
          return 1;
        }
        if (a.name.common > b.name.common) {
          return -1;
        }
        return 0;
      });
      setCountries(sortedZtoA);
    } else if (selectSort === 'default') {
      setCountries(searchCountriesData);
    } else {
      setCountries(searchCountriesData);
    }
  }, [searchCountriesData, selectSort]);

  // Search with country name
  useEffect(() => {
    const filterSearch = countriesData.filter((item) =>
      item.name.common.toLowerCase().includes(searchCountries.toLowerCase())
    );

    setSearchCountriesData(filterSearch);
  }, [countriesData, searchCountries]);

  // Filter all population & make an array
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
    selectSort,
    setSelectSort,
  };
}
