// NPM Packages
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Project files
import Auth from "./services/Auth";
import AuthApi from "./api/AuthApi";
import { Header } from "../src/components/Header";
import { Home } from "../src/pages/Home";
import { AuthPage } from "./pages/auth/AuthPage";
import { OrganizationsPage } from "./pages/OrganizationsPage";
import "./styles/style.css";

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
        <Header />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={OrganizationsPage} path="/organizations" />
        </Switch>
      </BrowserRouter>
    </div>
  );

  // return loggedIn ? loggedInRouter : <AuthPage />;
  return loggedInRouter;
}

export default App;
