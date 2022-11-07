import { useState, useEffect } from 'react';
import useCounter from '../hooks/use-counter';

import Card from './Card';

const BackwardCounter = () => {
  const counter =  useCounter(()=>((counter)=>counter-1));

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
