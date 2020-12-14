import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import "./sass/index.scss";
// import "normalize-scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// export const initGA = () => {
//   ReactGA.initialize("UA-176400842-1");
// };
ReactGA.initialize("UA-176400842-1");
export const GApageView = (page: string) => {
  ReactGA.pageview(page);
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
