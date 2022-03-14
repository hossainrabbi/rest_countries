import React from 'react';
import { Form } from 'react-bootstrap';

const regions = [
  { name: 'All', value: 'all' },
  { name: 'Europe', value: 'europe' },
  { name: 'Americas', value: 'americas' },
  { name: 'Oceania', value: 'oceania' },
  { name: 'Asia', value: 'asia' },
  { name: 'Africa', value: 'africa' },
];

export default function SelectRegion({ selectRegion, handleRegionChange }) {
  return (
    <Form.Select value={selectRegion} onChange={handleRegionChange}>
      {regions.map((regionItem) => (
        <option
          className="text-capitalize"
          value={regionItem.value}
          key={regionItem.name}
        >
          {regionItem.name}
        </option>
      ))}
    </Form.Select>
  );
}
