const fs = require("fs");

const filePath = __dirname + "/../../db/fares.json";

const getFares = (zone) => {
  try {
    const db = fs.readFileSync(filePath);
    const fares = JSON.parse(db);
    const faresByZone = fares.find((fare) => fare.zone === zone);
    if (!faresByZone) {
      throw "Zone not found";
    }
    return faresByZone.fares;
  } catch (err) {
    throw err;
  }
};

module.exports = { getFares };
