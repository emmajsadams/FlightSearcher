import { isEqual } from "lodash";
import * as test from "tape";
import { selectAirports, selectFlights } from "../selectors";

test("selectors", (t) => {
  t.test("selectAirports should return state.airports", (assert) => {
    const airports = [{ name: "Airport1"}];
    const state: any = { airports };

    const result = selectAirports(state);

    assert.true(isEqual(result, airports));
    assert.end();
  });

  t.test("selectAirports should return empty array if state.airports is undefined", (assert) => {
    const state: any = {};

    const result = selectAirports(state);

    assert.true(isEqual(result, []));
    assert.end();
  });

  t.test("selectFlights should return state.flights", (assert) => {
    const flights = [{ name: "Airport1"}];
    const state: any = { flights };

    const result = selectFlights(state);

    assert.true(isEqual(result, flights));
    assert.end();
  });

  t.test("selectFlights should return empty array if state.flights is undefined", (assert) => {
    const state: any = {};

    const result = selectAirports(state);

    assert.true(isEqual(result, []));
    assert.end();
  });
});
