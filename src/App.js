import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { ContextProvider } from "./context/App.context.js";
import ProfileScreen from "./components/ProfileScreen";
import SearchResults from "./components/SearchResultsScreen";
import Search from "./components/Search";
import "./styles/global.css";

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <div className="app">
          <Search />
          <br />

          <Switch>
            <Route exact path="/" component={SearchResults} />
            <Route path="/:username" component={ProfileScreen} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </Router>
    </ContextProvider>
  );
};

export default App;
