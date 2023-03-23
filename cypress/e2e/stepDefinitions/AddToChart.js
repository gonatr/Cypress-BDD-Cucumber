const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

import { AddToChartPage } from "@pageObjects/AddToChartPage";

const chart = new AddToChartPage();

Given("User on Home Page Luna", () => {
  cy.fixture("magentoluma").then((data) => {
    cy.visit(data.baseUrl);
  });
});

When("User click Woman", () => {
  chart.cWoman();
});

When("User click Top and choose Jacket", () => {
  chart.cTop();
  chart.cJacket();
});

When("User click Olivia Zip Light Jacket", () => {
  chart.cJacketName();
});

When("User Choose size, colour, QTY and clicks on the Add Chart button", () => {
  chart.setItems();
});

Then("User get The result", () => {
  chart.verifiStatus();
});

When("User click Woman Pages", () => {
  chart.cWomanT();
});

When("User click shope by Top", () => {
  chart.cTops();
});

When(
  "User set items Breathe-Easy tank, size, colour, and clicks on the Add Chart button",
  () => {
    chart.setItems1();
  }
);

Then("User get The result ver", () => {
  return true;
});
