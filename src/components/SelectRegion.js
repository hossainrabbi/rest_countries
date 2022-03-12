import React from 'react';
import { Form } from 'react-bootstrap';

const regions = [
  { name: 'All' },
  { name: 'Europe' },
  { name: 'Americas' },
  { name: 'Oceania' },
  { name: 'Asia' },
  { name: 'Africa' },
];

export default function SelectRegion({ selectRegion, setSelectRegion }) {
  return (
    <Form.Select
      value={selectRegion}
      onChange={(e) => setSelectRegion(e.target.value)}
    >
      {regions.map((regionItem) => (
        <option
          className="text-capitalize"
          value={regionItem.name}
          key={regionItem.name}
        >
          {regionItem.name}
        </option>
      ))}
    </Form.Select>
  );
}
