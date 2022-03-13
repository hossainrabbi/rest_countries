import React from 'react';
import { Container } from 'react-bootstrap';
import { useThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/Layout.module.css';
import Navbar from './Navbar';

export default function Layout({ children }) {
  const { dark } = useThemeContext();
  return (
    <main
      style={{ minHeight: '100vh' }}
      className={dark ? styles.dark__body : styles.light__body}
    >
      <Navbar />
      <Container>{children}</Container>
    </main>
  );
}
