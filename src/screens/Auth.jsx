import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import GlobalState from "../state/GlobalState";

const Auth = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(true);

  const {state, dispatch} = useContext(GlobalState)

  const submitHandler = (e) => {
    e.preventDefault();
    const myBod = {
      username: username,
      password: password,
    };
    axios
      .post(register ? "/register" : "/login", myBod)
      .then((res) => {
        console.log(res.data);
        {
          !register
            ? dispatch({ type: "LOGIN", payload: res.data })
            : console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          className="auth-input"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>{register ? "Register" : "Login"}</button>
      </form>
      <div>
        <button
          onClick={() => {
            setRegister(!register);
          }}
        >
          {!register ? "Sign up" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
