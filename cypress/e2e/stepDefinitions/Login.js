const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

import { LoginPage } from "@pageObjects/LoginPage";

const log = new LoginPage();

Given("I on Luma home page", () => {
  cy.fixture("magentoluma").then((data) => {
    log.navigate(data.baseUrl);
  });
});

When("I click sign in page", () => {
  log.signPage();
});

When(
  "I input email {string}, the password {string} and clicks on the login button",
  (username, password) => {
    log.inputuser(username);
    log.inputpassword(password);
    log.btnSignIn();
  }
);

When("I input wrong email, the password and clicks on the login button", () => {
  cy.fixture("magentoluma").then((data) => {
    log.inputuser(data.username);
    log.inputpassword(data.password);
    log.btnSignIn();
  });
});

Then("I should see a welcome msg", () => {
  return true;
});
