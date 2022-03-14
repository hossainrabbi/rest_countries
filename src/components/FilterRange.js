import React from 'react';
import InputRange from 'react-input-range';

export default function FilterRange({
  maxPopulation,
  minPopulation,
  rangeValue,
  handleRangeValue,
}) {
  return (
    <InputRange
      maxValue={500000}
      minValue={0}
      value={rangeValue}
      onChange={(value) => handleRangeValue(value)}
    />
  );
}
