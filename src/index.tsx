import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { MoralisProvider } from "react-moralis";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <MoralisProvider
        appId={process.env.REACT_APP_MORALIS_APP_ID ?? ""}
        serverUrl={process.env.REACT_APP_MORALIS_SERVER_URL ?? ""}
      >
        <App />
      </MoralisProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
