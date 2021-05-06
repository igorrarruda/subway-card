const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;
const { newCard } = require("../../src/services/card");

Given("The user is {string} and fare is {string}", function (userId, fare) {
  this.userId = userId;
  this.fare = fare;
});

When("I create in the system", function () {
  this.answer = newCard(this.userId, this.fare).fare;
});

Then("I should be receive {string}", function (response) {
  assert.equal(this.answer, response);
});
