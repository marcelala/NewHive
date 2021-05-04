// NPM packages
import { useState } from "react";

// Project files
import { RegisterForm } from "./RegisterForm";
import { LoginForm } from "./LoginForm";
//import formBg from "../../assets/auth/formBg.jpg";

export const AuthPage = () => {
  const [signIn, setSignIn] = useState(true);

  return (
    <section className="auth-page page-with-bg">
      <h1 className="main-header">Community Name</h1>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        natus nostrum accusamus eos fuga deleniti! Rerum, ipsa voluptatibus
        explicabo minus nam saepe voluptatem amet iure voluptates a. Animi,
        suscipit laborum!
      </p>
      <div className="form-layout">
        <div className="form-background"></div>
        <div className="form">
          {signIn && (
            <div className="form-wrapper">
              <LoginForm />
              <div className="link signup-link">
                <p>Not a member yet?</p>

                <button
                  className="form-switcher"
                  type="button"
                  onClick={() => (signIn ? setSignIn(false) : setSignIn(true))}
                >
                  Sign up here
                </button>
              </div>
            </div>
          )}
          {!signIn && (
            <div className="form-wrapper">
              <RegisterForm />
              <div className="link login-link">
                <p>Already a user?</p>
                <button
                  type="button"
                  className="form-switcher"
                  onClick={() => (signIn ? setSignIn(false) : setSignIn(true))}
                >
                  Login here
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
