import { getFares } from "./index";

it("should return the Fares according to the zone", () => {
  expect(getFares("A")).toStrictEqual({
    unique: 6,
    day: 10,
    week: 30,
    month: 130,
  });
});
