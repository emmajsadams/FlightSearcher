import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import videosReducer from "./reducers";
import { StoreState } from "./types";

export default function configureStore(initialState: StoreState = {}) {
  return createStore(
    videosReducer,
    initialState,
    applyMiddleware(thunk),
  );
}
