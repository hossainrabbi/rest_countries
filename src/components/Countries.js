import React from 'react';
import useCountries from '../hooks/useCountries';

export default function Countries() {
  const { loading, error, countries } = useCountries();

  return <div>Countries</div>;
}
