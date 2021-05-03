import fs from "fs";
import { hasBalancePositive, bill } from "./index";

jest.mock("fs");

const mockData = [
  {
    id: 1,
    name: "Igor",
    account: {
      balance: 35.0,
    },
  },
];

// const filePath = __dirname + "/../../db/users.json";
// const filePathMock = __dirname + "/../../db/__mocks/users.json";

describe("Charge business logic", () => {
  beforeEach(() => {
    jest
      .spyOn(fs, "readFileSync")
      .mockReturnValueOnce(JSON.stringify(mockData));
    jest
      .spyOn(fs, "writeFileSync")
      .mockReturnValueOnce(JSON.stringify(mockData));
  });
  it("should validate that the user's account there is no balance", () => {
    expect(hasBalancePositive(35, 100)).toBe(false);
  });
  it("should validate that the user's account has a balance", () => {
    expect(hasBalancePositive(35, 7)).toBe(true);
  });
  it("when user not exists", () => {
    expect(() => bill(2, 7)).toThrow("User not found");
  });
  it("should debit the user's account", () => {
    expect(bill(1, 7)).toBe(true);
  });
  it("should debit the user's account", () => {
    expect(() => bill(1, 300)).toThrow("Insufficient funds");
  });
});
