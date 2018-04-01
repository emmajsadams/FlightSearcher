import * as fetchMock from "fetch-mock";
import { isEqual } from "lodash";
import { stringify } from "query-string";
import * as test from "tape";
import { FlightSearchRequest, FlightSortColumnEnum, FlightSortOrderEnum } from "../types";

import {
  airportsFetchRequested,
  airportsFetchSucceeded,
  flightsFetchRequested,
  flightsFetchSucceeded } from "../actions";
import { fetchAirports, fetchFlights } from "../api";
import configureMockStore from "../configureMockStore";
import configureStore from "../configureStore";

import { selectAirports, selectFlights } from "../selectors";

test("reducers", (t) => {
  const request: FlightSearchRequest = {
    from: "SEA",
    sortColumn: FlightSortColumnEnum.Departure,
    sortOrder: FlightSortOrderEnum.Descending,
    to: "LAX",
  };
  const airports: any = [{ name: "Airport1" }];

  t.test("fetchAirports should set state.airports", (assert) => {
    fetchMock.mock("http://127.0.0.1:8081/airports", airports);
    const store = configureStore();

    store.dispatch(fetchAirports()).then(() => {
      assert.true(isEqual(selectAirports(store.getState()), airports));
      fetchMock.reset();
      assert.end();
    });
  });

  t.test("fetchAirports should create expected actions", (assert) => {
    fetchMock.mock("http://127.0.0.1:8081/airports", airports);
    const store = configureMockStore();

    store.dispatch(fetchAirports()).then(() => {
      assert.true(isEqual(store.getActions(), [airportsFetchRequested(), airportsFetchSucceeded(airports)]));
      fetchMock.reset();
      assert.end();
    });
  });

  t.test("fetchFlights should set state.flights", (assert) => {
    fetchMock.mock("http://127.0.0.1:8081/flights?" + stringify(request), airports);
    const store = configureStore();

    store.dispatch(fetchFlights(request)).then(() => {
      assert.true(isEqual(selectFlights(store.getState()), airports));
      fetchMock.reset();
      assert.end();
    });
  });

  t.test("fetchFlights should create expected actions", (assert) => {
    fetchMock.mock("http://127.0.0.1:8081/flights?" + stringify(request), airports);
    const store = configureMockStore();

    store.dispatch(fetchFlights(request)).then(() => {
      assert.true(isEqual(store.getActions(), [flightsFetchRequested(), flightsFetchSucceeded(airports)]));
      fetchMock.reset();
      assert.end();
    });
  });
});
