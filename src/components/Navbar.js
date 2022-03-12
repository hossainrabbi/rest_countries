import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

export default function NavbarNav() {
  return (
    <Navbar expand="lg" bg="light">
      <Container>
        <Navbar.Brand href="#">Rest Countries</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
