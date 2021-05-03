const fs = require("fs");
const dayjs = require("dayjs");
const { getFares } = require("../fare");

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
    users = [...userAccesses, userAccess];
    fs.writeFileSync(fileAccessPath, JSON.stringify(users));
    return userAccess;
    // if (!userAccesses || userAccesses.length === 0) {
    //   return fares.unique;
    // }
    // const travelToday = userAccesses.filter((access) =>
    //   dayjs(access.date).isSame(new Date(), "day")
    // );
    // const travelWeek = userAccesses.filter((access) =>
    //   dayjs(access.date).isSame(new Date(), "week")
    // );
    // const travelMonth = userAccesses.filter((access) =>
    //   dayjs(access.date).isSame(new Date(), "month")
    // );
    // if (travelToday.length >= 1) {
    //   return fares.day;
    // }
    // if (travelWeek.length >= 1) {
    //   return fares.week;
    // }
    // if (travelMonth.length >= 1) {
    //   return fares.month;
    // }
    // return fares.unique;
  } catch (err) {
    throw err;
  }
};

module.exports = { access };
