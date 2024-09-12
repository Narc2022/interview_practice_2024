import React, { useRef, useState } from "react";

const UseRefDemo = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  countRef.current = count;
  const handleIncrement = () => {
    countRef.prev = count;
    setCount(count + 1);
  };

  console.log("State:", count);
  console.log("Ref:", countRef);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}> Increment</button>
    </div>
  );
};

export default UseRefDemo;
