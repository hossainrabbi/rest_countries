import React from 'react';
import { Button, Container, Form, FormControl, Navbar } from 'react-bootstrap';

export default function NavbarNav() {
  return (
    <Navbar expand="lg" bg="light">
      <Container>
        <Navbar.Brand href="#">Rest Countries</Navbar.Brand>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search..."
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
}
