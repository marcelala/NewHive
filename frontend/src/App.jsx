// NPM Packages
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import fontawesome components
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

// Project files
import Auth from "./services/Auth";
import AuthApi from "./api/AuthApi";
import { NavBar } from "./components/NavBar";
import { Home } from "../src/pages/Home";
import { Feed }from "../src/pages/Feed";
import { AuthPage } from "./pages/auth/AuthPage";
import { OrganizationsPage } from "./pages/OrganizationsPage";
import "./styles/style.css";
//import icons to library
library.add(fab, far, fas);

function App() {
  // State
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  const [userInSession, setUserInSession] = useState("");
  Auth.bindLoggedInStateSetter(setLoggedIn);

  useEffect(() => {
    AuthApi.getUserInSession()
      .then(({ data }) => setUserInSession(data))
      .catch((err) => console.error(err));
  }, [loggedIn]);

  // Constants
  const loggedInRouter = (
    <div className="App">
      <BrowserRouter>
        <NavBar onLogout={() => Auth.logout()}/>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Feed} path="/feed" />
          <Route component={OrganizationsPage} path="/organizations" />
          <Route component={PrivateProfile} path="/profile"/>
        </Switch>
      </BrowserRouter>
    </div>
  );

   return loggedIn ? loggedInRouter : <AuthPage />;
}

export default App;
