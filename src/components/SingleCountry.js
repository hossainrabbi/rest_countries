import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useCountries from '../hooks/useCountries';
import Loading from './Loading';

export default function SingleCountry() {
  const [findCountry, setFindCountry] = useState(null);
  const { countries, loading, error } = useCountries();
  const { countryName } = useParams();
  useEffect(() => {
    setFindCountry(
      countries.find((country) => country.name.common === countryName)
    );
  }, [countryName, countries]);

  if (loading) {
    return <Loading />;
  }

  return (
    !loading &&
    !error &&
    countries.length > 0 &&
    findCountry && (
      <>
        <h1 className="text-center mt-3 mb-4">{findCountry.name.common}</h1>
        <Row className="align-items-center">
          <Col md={6}>
            <img
              className="image"
              src={findCountry.flags.svg}
              alt={findCountry.name.common}
            />
          </Col>
          <Col md={6}>
            <Table>
              <tbody>
                <tr>
                  <td>
                    <strong>Region:</strong>
                  </td>
                  <td>{findCountry.region}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Subregion:</strong>
                  </td>
                  <td>{findCountry.subregion}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Capital:</strong>
                  </td>
                  <td>{findCountry.capital[0]}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Population:</strong>
                  </td>
                  <td>{findCountry.population}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Start of Week:</strong>
                  </td>
                  <td>{findCountry.startOfWeek}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Timezones:</strong>
                  </td>
                  <td>{findCountry.timezones[0]}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </>
    )
  );
}