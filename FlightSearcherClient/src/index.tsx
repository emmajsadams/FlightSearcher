import "../node_modules/bootstrap/dist/css/bootstrap.css";

import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./configureStore";
import MainContainer from "./containers/mainContainer";

const store = configureStore();

render(
  <Provider store={store}>
    <MainContainer />
  </Provider>
, document.getElementById("react-mount"));
