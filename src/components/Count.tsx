import React, { useState } from 'react';

const Count = () => {
  const [count, setCount] = useState<number>(0);

  const handleInc = () => {
    setCount((count) => count + 1);
  };
  const handleDec = () => {
    setCount((count) => count - 1);
  };
  const handleReset = () => {
    setCount((count) => (count = 0));
  };
  return (
    <div>
      <h1> Count: {count} </h1>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Count;
