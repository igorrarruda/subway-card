const { getCard, newCard } = require("./index");
const fs = require("fs");

jest.mock("fs");

const mockData = [
  { id: 1, userId: 1, fare: "unique", created: "2021-04-01" },
  { id: 2, userId: 1, fare: "unique", created: "2021-05-01" },
];

describe("Card business logic", () => {
  beforeEach(() => {
    jest
      .spyOn(fs, "readFileSync")
      .mockReturnValueOnce(JSON.stringify(mockData));
  });
  it("Should get a new card ", () => {
    const card = newCard(1, "unique");
    expect(card.id).toEqual(3);
  });
  it("Should get a card ", () => {
    const card = getCard(1);
    expect(card.id).toEqual(2);
  });
});
