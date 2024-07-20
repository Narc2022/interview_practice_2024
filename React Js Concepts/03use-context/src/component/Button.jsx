import React, { useContext } from "react";
import { Context } from "../App";

const Button = () => {
  const [signIn, setSignIn] = useContext(Context);
  return (
    <button onClick={() => setSignIn(!signIn)}>
      {signIn ? "Sign Out" : "Sign In"}
    </button>
  );
};

export default Button;
