// NPM Packages
import { useState } from "react";

export const LoginForm = ({onSubmit}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth-form login-form">
      <h2>Log In</h2>
      <div className="form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group btn-group">
          <button
            className="btn btn-login"
            onClick={() => onSubmit({ email, password })}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};