import * as queryString from "query-string";
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { fetchAirports } from "../api";
import FlightsContainer from "./flightsContainer";

import { HashRouter, Link, Route } from "react-router-dom";

const mapDispatchToProps = (dispatch: Dispatch<void>) => ({
  fetchAirportsByDefault: () => dispatch(fetchAirports()),
});

export default connect(null, mapDispatchToProps)(({ fetchAirportsByDefault }) => {
  fetchAirportsByDefault();
  return <HashRouter>
    <div className="container">
      <Link to="/flights">Flights</Link>
      <Route path="/flights" component={FlightsContainer}/>
    </div>
  </HashRouter>;
});
