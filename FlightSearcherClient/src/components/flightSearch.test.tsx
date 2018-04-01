import { shallow } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";
import * as test from "tape";
import { FlightSortColumnEnum, FlightSortOrderEnum } from "../types";

import FlightSearch from "./flightSearch";

test("components/FlightSearch", (t) => {
  const airports: any = [{ name: "Airport1" }];

  t.test("should update flights on mount", (assert) => {
    const updateFlights = sinon.spy();
    const wrapper = shallow(<FlightSearch airports={airports} updateFlights={updateFlights} />);
    assert.true(updateFlights.calledWith({
      from: "",
      sortColumn: FlightSortColumnEnum.Departure,
      sortOrder: FlightSortOrderEnum.Ascending,
      to: "",
    }));
    assert.true(updateFlights.calledOnce);
    assert.end();
  });
});
