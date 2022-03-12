import React from 'react';
import { Col, Row } from 'react-bootstrap';
import useCountries from '../hooks/useCountries';
import Country from './Country';
import Loading from './Loading';
import Search from './Search';

export default function Countries() {
  const { loading, error, countries, setSearchCountries } = useCountries();

  return (
    <section className="mt-4">
      <Search setSearchCountries={setSearchCountries} />
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
