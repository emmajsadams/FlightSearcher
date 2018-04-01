import * as React from "react";
import { connect } from "react-redux";
import { fetchFlights } from "../api";
import Flights from "../components/flights";
import { selectAirports, selectFlights } from "../selectors";
import { Airport, Flight, StoreState } from "../types";

interface Props {
  airports: Airport[];
  flights: Flight[];
}

const mapStateToProps = (state: StoreState) => ({
  airports: selectAirports(state),
  flights: selectFlights(state),
});

export default connect(mapStateToProps)(({ dispatch, airports, flights }) => {
  return <Flights airports={airports} flights={flights} updateFlights={(request) => dispatch(fetchFlights(request))}/>;
});
