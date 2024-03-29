import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persister } from "./redux/store";
import { Analytics } from "@vercel/analytics/react";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persister}>
        <App />
        <Analytics />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
