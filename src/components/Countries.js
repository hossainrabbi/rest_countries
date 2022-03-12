import React from 'react';
import { Col, Navbar, Row } from 'react-bootstrap';
import useCountries from '../hooks/useCountries';
import Country from './Country';
import Loading from './Loading';
import Search from './Search';
import SelectRegion from './SelectRegion';

export default function Countries() {
  const {
    loading,
    error,
    countries,
    setSearchCountries,
    selectRegion,
    setSelectRegion,
  } = useCountries();

  return (
    <section className="mt-4">
      <Navbar expand="lg">
        <Row className="w-100">
          <Col md={4}>
            <Search setSearchCountries={setSearchCountries} />
          </Col>
          <Col md={6} />
          <Col md={2}>
            <SelectRegion
              selectRegion={selectRegion}
              setSelectRegion={setSelectRegion}
            />
          </Col>
        </Row>
      </Navbar>
      {loading && <Loading />}
      {error && (
        <h2 className="text-danger text-center">Oh snap! You got an error!</h2>
      )}
      {!loading && !error && countries.length > 0 && (
        <Row>
          {countries.map((country) => (
            <Col md={4} className="mb-4" key={country.name.official}>
              <Country country={country} />
            </Col>
          ))}
        </Row>
      )}
    </section>
  );
}
