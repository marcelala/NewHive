// NPM Packages
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Project files
import { Header } from "../src/components/Header";
import { Home } from "../src/pages/Home";
import { AuthPage } from "./pages/auth/AuthPage";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route component={AuthPage} path="/" exact />
          {/* <Route component={Home} path="/" exact /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
