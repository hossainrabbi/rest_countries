import React from 'react';
import { Container, Form, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/Navbar.module.css';

export default function NavbarNav() {
  const { dark, setDark } = useThemeContext();

  return (
    <Navbar expand="lg" bg={dark ? 'dark' : 'light'}>
      <Container>
        <Link
          className={`${
            dark ? styles.dark__brand : styles.light__brand
          } navbar-brand`}
          to="/"
        >
          Rest Countries
        </Link>
        <Form.Check
          value={dark}
          onChange={(e) => setDark(e.target.checked)}
          type="switch"
          id="custom-switch"
        />
      </Container>
    </Navbar>
  );
}
