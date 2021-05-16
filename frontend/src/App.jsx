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
import { Feed } from "../src/pages/Feed";
import { AuthPage } from "./pages/auth/AuthPage";
import PrivateProfile from "./components/Profile/PrivateProfile";
import  AboutUs from "./pages/AboutUs";
import { OrganizationsPage } from "./pages/Organizations/OrganizationsPage";
import { Contact } from "../src/pages/Contact";
import { CommunityGuidelines } from "../src/pages/CommunityGuidelines";
import "./styles/style.css";
import FAQ from "./pages/FAQ/FAQ";
import Footer from "./components/Footer";
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
          <Route component={Feed} path="/" exact />
          <Route component={OrganizationsPage} path="/organizations" />
          <Route component={PrivateProfile} path="/profile"/>
          <Route component={Contact} path="/contact" />
          <Route component={CommunityGuidelines} path="/guidelines" />
          <Route component={AboutUs} path="/about"/>
          <Route component={FAQ} path="/faq" />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );

   return loggedIn ? loggedInRouter : <AuthPage />;
}

export default App;
