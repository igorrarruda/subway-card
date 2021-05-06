const fs = require("fs");

const fileAccessPath = __dirname + "/../../db/access.json";

const access = (userId, zone, fare, value) => {
  try {
    const db = fs.readFileSync(fileAccessPath);
    const accesses = JSON.parse(db);
    const userAccesses = accesses.filter((access) => access.userId === userId);
    const userAccess = {
      userId,
      travelZone: zone,
      fare: fare,
      value: value,
      date: new Date(),
    };
    fs.writeFileSync(
      fileAccessPath,
      JSON.stringify([...userAccesses, userAccess])
    );
    return userAccess;
  } catch (err) {
    throw err;
  }
};

module.exports = { access };
