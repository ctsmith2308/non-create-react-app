
// Copied from deleted index.js file

// import React from "react";
// import ReactDom from "react-dom";

// import "./index.css";

// class App extends React.Component {
//   render() {
//     return <div>Hello World!!!</div>;
//   }
// }

// ReactDom.render(<App />, document.getElementById("app"));

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("myApp")
);
