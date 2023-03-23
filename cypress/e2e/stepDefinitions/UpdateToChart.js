const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import { UpdateToChartPage } from "@pageObjects/UpdateToChartPage";

const editItem = new UpdateToChartPage();

When("User click Shoping Chart", () => {
  editItem.cShop();
  return true;
});

When("User click View and Edit Chart", () => {
  return true;
});

When("User click Edit Item", () => {
  return true;
});

When(
  "User Update Choose size, colour, QTY and clicks on the Add Chart button",
  () => {
    return true;
  }
);

Then("User get The result update", () => {
  return true;
});
