import React from 'react';
import CounterWrapper from './CounterWrapper';
import CounterUI from './CounterUI';

const render = ({increment, decrement, count}) => (
    <CounterUI
      increment={increment}
      decrement={decrement}
      count={count} />
)

const Counter = () => {
  return (
    <CounterWrapper render={render} />
  );
}

export default Counter;