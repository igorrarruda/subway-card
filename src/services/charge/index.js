const fs = require("fs");

const filePath = __dirname + "/../../db/users.json";

const hasBalancePositive = (balance, bill) => {
  return balance >= bill;
};

const bill = (userId, value) => {
  const db = fs.readFileSync(filePath);
  let users = JSON.parse(db);
  const userIndex = users.findIndex((user) => user.id === userId);
  const user = users[userIndex];
  users.splice(userIndex, 1);
  if (!user) {
    throw "User not found";
  }
  if (!hasBalancePositive(user.account.balance, value)) {
    throw "Insufficient funds";
  }
  user.account.balance = user.account.balance - value;
  users = [...users, user];
  fs.writeFileSync(filePath, JSON.stringify(users));
  return true;
};

module.exports = { hasBalancePositive, bill };
