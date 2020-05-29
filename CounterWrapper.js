import React, {useState} from 'react';

const CounterWrapper = (props) => {  
  const [count, setCount] = useState(0);
  const {render} = props;

  const increment = () => {
    setCount(++count);
  }

  const decrement = () => {
    if(count > 0){
      setCount(--count);
    }
  }

  return (
    <div>
      {
        render({increment, decrement, count})
      }
    </div>
  );
};

export default CounterWrapper;