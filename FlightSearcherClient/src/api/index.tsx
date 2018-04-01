import * as queryString from "query-string";
import { Dispatch } from "redux";
import { AirportFetchActions, airportsFetchRequested, airportsFetchSucceeded,
  FlightFetchActions, flightsFetchRequested, flightsFetchSucceeded } from "../actions";
import { FlightSearchRequest } from "../types";

// NOTE: In a production app this API url would be configured from a file rather than hardcoded.
const apiUrl = "http://127.0.0.1:8081";

const fetchJson = (url: string) => fetch(url).then((r) => r.json());

export const fetchAirports = () => async (dispatch: Dispatch<AirportFetchActions>) => {
  dispatch(airportsFetchRequested());

  const airports = await fetchJson(apiUrl + "/airports");

  dispatch(airportsFetchSucceeded(airports));
};

export const fetchFlights = (request: FlightSearchRequest) => async (dispatch: Dispatch<AirportFetchActions>) => {
  dispatch(flightsFetchRequested());

  const flights = await fetchJson(apiUrl + "/flights?" + queryString.stringify(request));

  dispatch(flightsFetchSucceeded(flights));
};
