import React from "react";
import ReactDOM from "react-dom";

import Banner from "./Banner";

import { StoreProvider } from "store/store";

// import "./index.scss";

const App = () => (
  <StoreProvider>
    <div>
      <Banner />
    </div>
  </StoreProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
