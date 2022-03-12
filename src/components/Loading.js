import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function Loading() {
  return (
    <div className="loading">
      <Spinner className="mt-5 text-center" animation="grow" />
    </div>
  );
}
