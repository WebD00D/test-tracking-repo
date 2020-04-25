import React, { useState } from "react";
import "./login.css";

import fire from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        localStorage.setItem("UR_APP_teacher_id", response.user.uid);
        const baseURL = window.location.origin;
        window.location.replace(`${baseURL}/dashboard`);
      });
  };

  return (
    <div className="col s12 offset-s3" id="loggyform">
      <div className="row">
        <div className="input-field col s6">
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            className="validate"
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            className="validate"
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col s6">
          <button
            id="loginbutton"
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
            onClick={handleLogin}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
