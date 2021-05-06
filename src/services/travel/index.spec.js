const charge = require("../charge");
const { travel } = require("./index");

jest.mock("../charge");

describe("Travel business logic", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("Should pay a travel", () => {
    jest.spyOn(charge, "bill").mockReturnValueOnce(true);
    const userTravel = travel(1, "A");
    expect(userTravel.userId).toBe(1);
    expect(userTravel.travelZone).toBe("A");
    expect(userTravel.fare).toBe("month");
    expect(userTravel.value).toBe(130);
  });
});
