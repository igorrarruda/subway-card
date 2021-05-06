const { getCard } = require("../card");
const { bill } = require("../charge");
const { getFares } = require("../fare");
const { access } = require("../station");

const travel = (userId, zone) => {
  try {
    const card = getCard(userId);
    const zones = getFares(zone);
    bill(card.userId, zones[card.fare]);
    const userTravel = access(userId, zone, card.fare, zones[card.fare]);
    return userTravel;
  } catch (e) {
    throw e;
  }
};

module.exports = { travel };
