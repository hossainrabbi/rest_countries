import { useEffect, useState } from 'react';

export default function useCountries() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [countriesData, setCountriesDada] = useState([]);
  const [countries, setCountries] = useState([]);
  const [searchCountriesData, setSearchCountriesData] = useState([]);

  const [searchCountries, setSearchCountries] = useState('');
  const [selectRegion, setSelectRegion] = useState('all');
  const [selectSort, setSelectSort] = useState('default');
  const [rangeValue, setRangeValue] = useState(0);

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

  // Filter data with input range
  const handleRangeValue = (value) => {
    setRangeValue(value);
  };

  useEffect(() => {
    const filterRange = searchCountriesData.filter(
      (item) => item.population > rangeValue
    );
    console.log(filterRange);
    setCountries(filterRange);
  }, [searchCountriesData, rangeValue]);

  // Sort data
  const handleSort = (e) => {
    const { value } = e.target;
    setSelectSort(value);

    if (value === 'aToZ') {
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
    } else if (value === 'zToA') {
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
    } else {
      searchCountriesData.forEach((item) => item);
      setCountries(searchCountriesData);
    }
  };

  // Filter data with select region
  const handleRegionChange = (e) => {
    const { value } = e.target;
    setSelectRegion(value);
  };

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

  // Search with country name
  useEffect(() => {
    const filterSearch = countriesData.filter((item) =>
      item.name.common.toLowerCase().includes(searchCountries.toLowerCase())
    );

    setSearchCountriesData(filterSearch);
    setCountries(filterSearch);
  }, [countriesData, searchCountries]);

  return {
    countries,
    loading,
    error,
    searchCountries,
    setSearchCountries,
    selectRegion,
    handleRegionChange,
    selectSort,
    handleSort,
    rangeValue,
    handleRangeValue,
  };
}
