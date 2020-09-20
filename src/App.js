import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";

//your code is going here
const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1>Adopt Me!</h1>
        <Router>
          <SearchParams path="/" />
          <Details path = "/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(React.createElement(App), document.getElementById("root"));
