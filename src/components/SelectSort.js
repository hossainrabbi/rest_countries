import React from 'react';
import { Form } from 'react-bootstrap';

const sortSelect = [
  { name: 'Default', value: 'default' },
  { name: 'A to Z', value: 'aToZ' },
  { name: 'Z to A', value: 'zToA' },
];

export default function SelectSort({ selectSort, setSelectSort, handleSort }) {
  return (
    <Form.Select value={selectSort} onChange={handleSort}>
      {sortSelect.map((sortItem) => (
        <option
          className="text-capitalize"
          value={sortItem.value}
          key={sortItem.name}
        >
          {sortItem.name}
        </option>
      ))}
    </Form.Select>
  );
}
