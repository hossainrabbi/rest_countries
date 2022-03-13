import React, { useState } from 'react';
import { Col, Navbar, Row } from 'react-bootstrap';
import useCountries from '../hooks/useCountries';
import Country from './Country';
import FilterRange from './FilterRange';
import Loading from './Loading';
import Search from './Search';
import SelectRegion from './SelectRegion';
import SelectSort from './SelectSort';

export default function Countries() {
  const [rangeValue, setRangeValue] = useState(0);
  const {
    loading,
    error,
    countries,
    setSearchCountries,
    selectRegion,
    setSelectRegion,
    totalPopulationArray,
    selectSort,
    setSelectSort,
    handleSort,
  } = useCountries(rangeValue);

  const maxPopulation =
    totalPopulationArray.length > 0
      ? Math.max(...totalPopulationArray) - 1
      : 10000000;

  const minPopulation =
    totalPopulationArray.length > 0 ? Math.min(...totalPopulationArray) : 0;

  return (
    <section className="mt-4">
      <Navbar className="mb-4" expand="lg">
        <Row className="w-100">
          <Col md={4}>
            <Search setSearchCountries={setSearchCountries} />
          </Col>
          <Col md={3}>
            <FilterRange
              maxPopulation={maxPopulation}
              minPopulation={minPopulation}
              rangeValue={rangeValue}
              setRangeValue={setRangeValue}
            />
          </Col>
          <Col md={1} />
          <Col md={2}>
            <SelectSort
              selectSort={selectSort}
              handleSort={handleSort}
              setSelectSort={setSelectSort}
            />
          </Col>
          <Col md={2}>
            <SelectRegion
              selectRegion={selectRegion}
              setSelectRegion={setSelectRegion}
            />
          </Col>
        </Row>
      </Navbar>
      {loading ? (
        <Loading />
      ) : (
        <>
          {error && (
            <h2 className="text-danger text-center">
              Oh snap! You got an error!
            </h2>
          )}
          {!loading && !error && countries.length > 0 ? (
            <Row>
              {countries.map((country) => (
                <Col md={4} className="mb-4" key={country.name.official}>
                  <Country country={country} />
                </Col>
              ))}
            </Row>
          ) : (
            <h3 className="text-danger text-center mt-3">Data Not Found!</h3>
          )}
        </>
      )}
    </section>
  );
}
