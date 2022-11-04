import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WEBAPP, WEB_APP } from "../../constants/routes";


import { useAuth } from "../../context/AuthContext";


const LoginForm = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const auth = useAuth();
  let navigate = useNavigate();


  return (
    <div className="container" margin-top="20px">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          auth.signin({
            email: emailValue,
            password: passwordValue,
            callback: () => navigate(WEBAPP),
          });
        }}
      >
        <label>Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={emailValue}
          onChange={(event) => setEmailValue(event.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={passwordValue}
          onChange={(event) => setPasswordValue(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};


export default LoginForm;