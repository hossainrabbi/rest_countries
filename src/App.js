import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Countries from './components/Countries';
import Layout from './components/Layout';
import SingleCountry from './components/SingleCountry';
import { ThemeContext } from './contexts/ThemeContext';

export default function App() {
  return (
    <ThemeContext>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/countries" />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:countryName" element={<SingleCountry />} />
        </Routes>
      </Layout>
    </ThemeContext>
  );
}
