import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { LoginForm } from "./auth/LoginForm";
import { RegisterForm } from "./auth/RegisterForm";
import Auth from "./../services/Auth";



export const Home = () => {
    const [toggleRegister, setToggleRegister] = useState(false);
    const [toggleLogin, setToggleLogin] = useState(false);
    const [signIn, setSignIn] = useState(true);
      
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

    return(
<section className="home">
<Banner/>

    <div className="home__join" onClick={() => toggleRegister ? setToggleRegister(false) : setToggleRegister(true)
      }>

    <h2> Click here and join our community now!</h2>
    </div>
            {toggleRegister && (
            <RegisterForm onSubmit={register}/>
            )}



<div className="home__return">
    <h3 onClick={() => toggleLogin ? setToggleLogin(false) : setToggleLogin(true)      
    }>Already a user? Log in here </h3>
        {toggleLogin && (
        <LoginForm onSubmit={login}/>
          )}
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

    )
}
