import React from 'react';
import { Col, Row } from 'react-bootstrap';
import useCountries from '../hooks/useCountries';
import Country from './Country';
import FilterRange from './FilterRange';
import Loading from './Loading';
import Search from './Search';
import SelectRegion from './SelectRegion';
import SelectSort from './SelectSort';

export default function Countries() {
  const {
    loading,
    error,
    countries,
    setSearchCountries,
    selectRegion,
    handleRegionChange,
    selectSort,
    handleSort,
    rangeValue,
    handleRangeValue,
  } = useCountries();

  return (
    <section className="mt-4">
      <Row className="w-100 justify-content-between ms-0">
        <Col lg={4} md={6} className="mb-4">
          <Search setSearchCountries={setSearchCountries} />
        </Col>
        <Col lg={4} md={6} className="mb-4">
          <FilterRange
            rangeValue={rangeValue}
            handleRangeValue={handleRangeValue}
          />
        </Col>
        <Col lg={2} md={6} className="mb-4">
          <SelectSort selectSort={selectSort} handleSort={handleSort} />
        </Col>
        <Col lg={2} md={6} className="mb-4">
          <SelectRegion
            selectRegion={selectRegion}
            handleRegionChange={handleRegionChange}
          />
        </Col>
      </Row>
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
                <Col lg={4} md={6} className="mb-4" key={country.name.official}>
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
