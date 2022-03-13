import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/Country.module.css';

export default function Country({ country }) {
  const { flags, name, region, population, maps } = country;
  const { dark } = useThemeContext();

  return (
    <Card
      className={`${styles.country__card} ${dark ? styles.country__dark : ''}`}
    >
      <Card.Img variant="top" className="image" src={flags.svg} />
      <Card.Body>
        <Card.Title>{name.common}</Card.Title>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span>
            <strong>Region:</strong> {region}
          </span>
          <span>
            <strong>Population:</strong> {population}
          </span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <Button variant="primary" href={maps.googleMaps} target="_blank">
            Go to Map
          </Button>
          <Link to={`/countries/${name.common}`} className="btn btn-primary">
            More Information
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}
