import React from 'react';
import { Form, FormControl } from 'react-bootstrap';

export default function Search({ searchCountries, setSearchCountries }) {
  return (
    <Form className="d-flex">
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
