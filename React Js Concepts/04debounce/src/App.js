import React, { useState } from "react";
import ThrottledComponent from "./ThrottledComponent";

export default function App() {
  const [input, setInput] = useState("");
  const [savetoDB, setSaveToDb] = useState("");

  // Create a debounced version of setSaveToDb
  const debouncedSaveToDb = debounce((value) => {
    setSaveToDb(value);
  }, 500);

  const handleChange = (e) => {
    setInput(e.target.value);
    debouncedSaveToDb(e.target.value);
  };

  function debounce(fn, delay) {
    let timer;
    return function () {
      let context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    };
  }

  return (
    <div className="App">
      {/* <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="type something..."
        style={{ marginTop: "100px" }}
      />
      <p>Typed</p>
      <p>{input}</p>
      <p>Saved To DB</p>
      <p>{savetoDB}</p> */}
      <ThrottledComponent />
    </div>
  );
}
