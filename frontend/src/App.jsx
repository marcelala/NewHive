// NPM Packages
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import fontawesome components
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

// Project files
import { Header } from "../src/components/Header";
import { Home } from "../src/pages/Home";
import  Feed  from "../src/pages/Feed";


import "./styles/style.css";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Header />
        <Switch>
        <Route component={Home} path="/" exact />
        </Switch>
        <Switch>
        <Route component={Feed} path="/feed"/>
        </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
