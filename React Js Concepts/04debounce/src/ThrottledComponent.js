import React, { useState, useCallback } from "react";

const ThrottledComponent = () => {
  const [value, setValue] = useState("");

  const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function (...args) {
      if (!lastRan) {
        func(...args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(() => {
          if (Date.now() - lastRan >= limit) {
            func(...args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };

  // Create a throttled function using the custom throttle function
  const throttledSave = useCallback(
    throttle((newValue) => {
      console.log("Saving data:", newValue);
      // Replace with your save logic
    }, 1000), // Adjust the delay as needed
    []
  );

  // Handle the input change
  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    throttledSave(newValue);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default ThrottledComponent;
