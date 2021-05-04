// NPM Packages
import { useState } from "react";

import Auth from "../../services/Auth";

export const RegisterForm = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

    async function register(registrationData) {
      const registerSuccess = await Auth.register(registrationData);
      if (!registerSuccess) {
        alert("Couldn't register check credentials and try again");
      }
    }


  return (
    <div className="auth-form register-form">
      <h2>Sign Up</h2>
      <div className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            className="form-control"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group btn-group">
          <button
            className="btn btn-login"
            type="submit"
            onClick={(e) => register({ name, email, password })}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
