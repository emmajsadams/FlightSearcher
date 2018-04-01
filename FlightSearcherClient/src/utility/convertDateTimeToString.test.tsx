import { isEqual } from "lodash";
import * as test from "tape";
import convertDateTimeToString from "./convertDateTimeToString";

test("utility", (t) => {
  t.test("convertDateTimeToString should convert .NET time to AM/PM format", (assert) => {
    const result = convertDateTimeToString("\/Date(1512486000000)\/");

    assert.true(isEqual("07:00", result));
    assert.end();
  });
});
