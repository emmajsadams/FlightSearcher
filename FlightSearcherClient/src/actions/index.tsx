import { Action, createAction, handleActions } from "redux-actions";
import { Airport, Flight } from "../types";

export const AIRPORTS_FETCH_REQUESTED = "AIRPORTS_FETCH_REQUESTED";
export interface AirportsFetchRequested extends Action<void> {}
export const airportsFetchRequested = createAction(AIRPORTS_FETCH_REQUESTED);

export const AIRPORTS_FETCH_SUCCEEDED = "AIRPORTS_FETCH_SUCCEEDED";
export interface AirportsFetchSucceeded extends Action<Airport[]> {}
export const airportsFetchSucceeded =
  createAction(AIRPORTS_FETCH_SUCCEEDED, (airports: Airport[]) => airports);

export const FLIGHTS_FETCH_REQUESTED = "FLIGHTS_FETCH_REQUESTED";
export interface FlightsFetchRequested extends Action<void> {}
export const flightsFetchRequested = createAction(FLIGHTS_FETCH_REQUESTED);

export const FLIGHTS_FETCH_SUCCEEDED = "FLIGHTS_FETCH_SUCCEEDED";
export interface FlightsFetchSucceeded extends Action<Flight[]> {}
export const flightsFetchSucceeded =
  createAction(FLIGHTS_FETCH_SUCCEEDED, (flights: Flight[]) => flights);

export type AirportFetchActions = AirportsFetchRequested | AirportsFetchSucceeded;
export type FlightFetchActions = FlightsFetchRequested | FlightsFetchSucceeded;
