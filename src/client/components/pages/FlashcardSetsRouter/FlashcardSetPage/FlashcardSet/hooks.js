import { useState, useEffect } from 'react';
import { shuffle } from 'Client/lib/arrays';

export const useIncrementor = length => {
  const [index, setIndex] = useState(0);

  const increment = () => setIndex((index + 1) % length);

  const decrement = () => setIndex((((index - 1) % length) + length) % length);

  return [index, increment, decrement];
};

export const useShuffler = original => {
  const [shuffled, setShuffled] = useState(shuffle(original));

  useEffect(() => {
    setShuffled(shuffle(original));
  }, [original]);

  const shuffleArray = () => setShuffled(shuffle(shuffled));

  return [shuffled, shuffleArray];
};