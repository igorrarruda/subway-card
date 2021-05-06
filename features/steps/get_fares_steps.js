const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;
const { getFares } = require("../../src/services/fare");

Given("The fare is {string}", function (fare) {
  this.fare = fare;
});

When("I pass the card", function () {
  this.answer = getFares(this.fare);
});

Then("I should be pay {int} as unique", function (unique) {
  assert.equal(this.answer.unique, unique);
});

Then("{int} per day", function (day) {
  assert.equal(this.answer.day, day);
});

Then("{int} per week", function (week) {
    assert.equal(this.answer.week, week);
});

Then("{int} per month", function (month) {
    assert.equal(this.answer.month, month);
});
