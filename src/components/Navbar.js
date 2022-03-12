import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavbarNav() {
  return (
    <Navbar expand="lg" bg="light">
      <Container>
        <Link className="navbar-brand" to="/">
          Rest Countries
        </Link>
      </Container>
    </Navbar>
  );
}
