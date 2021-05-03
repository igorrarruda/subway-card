const fs = require("fs");

const filePath = __dirname + "/../../db/card.json";
const newCard = (userId, fare) => {
  try {
    const db = fs.readFileSync(filePath);
    let cards = JSON.parse(db);
    const nextId = cards.length + 1;
    const userCard = { id: nextId, userId, fare, created: new Date() };
    fs.writeFileSync(filePath, JSON.stringify([...cards, userCard]));
    return userCard;
  } catch (err) {
    throw err;
  }
};

const getCard = (userId) => {
  try {
    const db = fs.readFileSync(filePath);
    let cards = JSON.parse(db);
    const userCard = cards
      .sort((a, b) => new Date(b.created) - new Date(a.created))
      .find((card) => card.userId === userId && !card.used);
    if (!userCard) {
      throw "No Card found.";
    }
    return userCard;
  } catch (err) {
    throw err;
  }
};

module.exports = { getCard, newCard };
