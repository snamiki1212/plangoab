import React from "react";
import { Provider as ReactReduxProvier } from "react-redux";
import store from "./redux/store";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <ReactReduxProvier store={store}>
        <App />
      </ReactReduxProvier>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

render();

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./App", render);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.warn))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
