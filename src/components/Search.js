import React from 'react';
import { Form, FormControl } from 'react-bootstrap';

export default function Search({
  searchCountries,
  setSearchCountries,
  className,
}) {
  return (
    <Form className={`d-flex ${className}`}>
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        value={searchCountries}
        onChange={(e) => setSearchCountries(e.target.value)}
      />
    </Form>
  );
}
