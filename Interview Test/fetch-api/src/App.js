import { useState, useEffect } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
  });

  async function getData() {
    const response = await fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
    console.log("response", response);
  }
  useEffect(() => {
    getData();
  }, []);

  const onInputChange = (e) => {
    setFormData((prev) => ({ ...prev, name: e.target.value }));
  };

  const ageCounterAdd = () => {
    setFormData((prev) => ({ ...prev, age: formData.age + 1 }));
  };

  const ageCounterSub = () => {
    setFormData((prev) => ({ ...prev, age: formData.age - 1 }));
  };

  const onSubmit = () => {
    console.log(formData);
  };
  return (
    <div className="App">
      <input type="text" onChange={onInputChange} />
      <div style={{ display: "flex" }}>
        <button onClick={ageCounterAdd}>+</button>
        {formData.age} <button onClick={ageCounterSub}>-</button>
      </div>
      <button onClick={onSubmit}>submit</button>
    </div>
  );
}
