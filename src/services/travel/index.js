const { getCard } = require("../card");
const { bill } = require("../charge");
const { getFares } = require("../fare");
const { access } = require("../station");

const travel = (userId, zone) => {
  const card = getCard(userId);
  const zones = getFares(zone);
  const billed = bill(card.userId, zones[card.fare]);
  if (!billed) {
    throw "Impossible to bill";
  }
  const userTravel = access(userId, zone, card.fare, zones[card.fare]);
  return userTravel;
};

module.exports = { travel };
