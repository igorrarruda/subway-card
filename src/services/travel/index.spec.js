const { travel } = require("./index");

// import * as charge from "../charge";
// jest.mock('charge');

// jest.spyOn(charge, "bill").mockReturnValue();

describe("Travel business logic", () => {
  it("Should pay a travel", () => {
    expect(travel(1, "A")).toBe(true);
  });
  //   it("should debit the user's account if it has a balance", () => {
  //     expect(chargeAccount(1, 7)).toBe(true);
  //   });
  //   it("should debit the user's account if there is no balance", () => {
  //     expect(chargeAccount(1, 100)).toBe(false);
  //   });
});
