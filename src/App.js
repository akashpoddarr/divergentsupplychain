import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component = {HomePage} />
      </Switch>
    </Router>
  );
}
