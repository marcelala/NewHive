// NPM packages
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// Project files
import { RegisterForm } from "./RegisterForm";
import { LoginForm } from "./LoginForm";
import Banner from "../../components/Banner";
import Auth from "../../services/Auth";


export const AuthPage = () => {
  const [signIn, setSignIn] = useState(true);
  const [toggleRegister, setToggleRegister] = useState(false);
  const [toggleLogin, setToggleLogin] = useState(false);
  // Methods
  async function login(loginData) {
    const loginSuccess = await Auth.login(loginData);
    if (!loginSuccess) {
      alert("Invalid credentials");
    }
  }

  async function register(registrationData) {
    const registerSuccess = await Auth.register(registrationData);
    if (!registerSuccess) {
      alert("Couldn't register check credentials and try again");
    }
  }

  return (
  <section className="home">
    <Banner/>
    
      
      <div className="form-layout">
        <div className="form-background"></div>
        <div className="form">
          {signIn && (
            <div className="form-wrapper">
              <LoginForm onSubmit={login} />
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
              <RegisterForm onSubmit={register} />
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
            <div className="home__features">
        <div className="home__features-meet">
        <FontAwesomeIcon
                className="home__post"
                icon={["far", "edit"]}
                />
        <h3>Meet</h3>
        <h4>Explore topics and write posts to get to know others</h4>
        </div>
        <div className="home__features-mentorship">
        <h3>Mentorship</h3>
        <h4>Find someone who can help you</h4>
        <FontAwesomeIcon
                className="home__mentor"
                icon={["fa", "people-carry"]}
                />
        </div>
        <div className="home__features-connect">
        <FontAwesomeIcon
                className="home__connect"
                icon={["fab", "connectdevelop"]}
                />
        <h3>Connect</h3>
        <h4> Add connections to you new network </h4>
        </div>

</div>
    </section>
  );
};
