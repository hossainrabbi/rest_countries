import React, { useState } from 'react';
import { Button, Form, FormControl, Navbar } from 'react-bootstrap';

function Search({ setSearchCountries }) {
  const [searchItem, setSearchItem] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchCountries(searchItem);
  };

  return (
    <Navbar expand="lg">
      <Form className="d-flex" onSubmit={handleSubmit}>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form>
    </Navbar>
  );
}

export default React.memo(Search);
