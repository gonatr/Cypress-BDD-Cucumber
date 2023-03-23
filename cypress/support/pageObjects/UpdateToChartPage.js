export class UpdateToChartPage {
  cShop() {
    cy.get(".showcart").click();
  }

  cEdit() {
    cy.get(".edit").click();
  }
}
