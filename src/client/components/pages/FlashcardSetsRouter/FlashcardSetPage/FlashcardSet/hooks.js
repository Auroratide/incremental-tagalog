import { useState } from 'react';

export const useIncrementor = length => {
  const [index, setIndex] = useState(0);

  const increment = () => setIndex((index + 1) % length);

  const decrement = () => setIndex((((index - 1) % length) + length) % length);

  return [index, increment, decrement];
};