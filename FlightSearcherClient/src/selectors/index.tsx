import { StoreState } from "../types";

export const selectAirports = (state: StoreState) => state.airports || [];
export const selectFlights = (state: StoreState) => state.flights || [];
