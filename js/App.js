import React from "react";
import ReactDOM from "react-dom";

import Navigation from "./components/Navigation/Navigation";

import "./App.scss";

document.addEventListener("DOMContentLoaded", function() {
  class App extends React.Component {
    render() {
      return (
        <div>
          <Navigation />
        </div>
      );
    }
  }
  ReactDOM.render(<App />, document.getElementById("app"));
});
