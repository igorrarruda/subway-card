import { access } from "./index";
import * as fare from "../fare/index";
import fs from "fs";

jest.mock("../fare/index");
jest.mock("fs");

const mockData = [
  {
    userId: 1,
    travelZone: "A",
    date: "2021-04-27",
  },
  {
    userId: 1,
    travelZone: "A",
    date: "2021-04-27",
  },
];

describe("Station business logic", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should debit the user's account if it has a balance", () => {
    jest.spyOn(fare, "getFares").mockReturnValueOnce({
      unique: 6,
      day: 10,
      week: 30,
      month: 130,
    });
    jest
      .spyOn(fs, "readFileSync")
      .mockReturnValueOnce(JSON.stringify(mockData));
    const userAccess = access(1, "A", "day", 10);
    expect(userAccess.userId).toBe(1);
    expect(userAccess.travelZone).toBe("A");
    expect(userAccess.fare).toBe("day");
    expect(userAccess.value).toBe(10);
  });
});
