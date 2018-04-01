import { Action, createAction, handleActions } from "redux-actions";
import { StoreState } from "../types";

// TODO: Fix type safety for this (may need to ditch redux-actions)
// EX: `sourceIndex` was still `videoIndex`, but typescript succeeded.
// See https://github.com/Microsoft/TypeScript-React-Starter reducer/index
export default handleActions({
  AIRPORTS_FETCH_SUCCEEDED: (state, action) => ({ ...state, airports: action.payload }),
  FLIGHTS_FETCH_SUCCEEDED: (state, action) => ({ ...state, flights: action.payload }),
}, {});
