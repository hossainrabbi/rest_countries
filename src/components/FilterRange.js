import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

export default function FilterRange({
  maxPopulation,
  minPopulation,
  rangeValue,
  setRangeValue,
}) {
  return (
    <InputRange
      maxValue={maxPopulation}
      minValue={minPopulation}
      value={rangeValue}
      onChange={(value) => setRangeValue(value)}
    />
  );
}
