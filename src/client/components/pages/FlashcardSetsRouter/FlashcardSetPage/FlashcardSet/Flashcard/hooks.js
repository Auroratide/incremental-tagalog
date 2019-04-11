import { useState } from 'react';

export const useToggler = () => {
  const [ state, setState ] = useState(false);

  const toggle = () => setState(!state);

  return [ state, toggle ];
};