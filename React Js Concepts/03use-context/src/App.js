import "./App.css";
import Button from "./component/Button";
import { useState } from "react";
import React from "react";

export const Context = React.createContext();

function App() {
  const [signIn, setSignIn] = useState(false);
  return (
    <Context.Provider value={[signIn, setSignIn]}>
      <div style={{ padding: 10, background: "#ff9933" }}>
        <Button />
      </div>

      {signIn ? "User is logged in" : "Please Login first"}
    </Context.Provider>
  );
}

export default App;
