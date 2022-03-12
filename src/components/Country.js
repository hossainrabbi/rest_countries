import React from 'react';
import { Button, Card } from 'react-bootstrap';
import styles from '../styles/Country.module.css';

export default function Country({ country }) {
  const { flags, name, region, population, maps } = country;
  return (
    <Card bg="light" className={styles.country__card}>
      <Card.Img variant="top" className={styles.image} src={flags.svg} />
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
          <Button variant="primary">More Information</Button>
        </div>
      </Card.Body>
    </Card>
  );
}