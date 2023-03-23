export class AddToChartPage {
  cWoman() {
    cy.get("a[id='ui-id-4'] span:nth-child(2)").trigger("mouseover");
  }

  cTop() {
    cy.get("#ui-id-9").should("be.visible").trigger("mouseover");
  }

  cJacket() {
    cy.get("a[id='ui-id-11'] span")
      .should("be.visible")
      .trigger("mouseover")
      .click();
    cy.get(".base").should("have.text", "Jackets");
  }

  cJacketName() {
    cy.get("img[alt='Olivia 1/4 Zip Light Jacket']").click();
  }

  setItems() {
    cy.get("[option-id='168']").click({ force: true });
    cy.get(".size > span:nth-of-type(2)").should("have.text", "M");
    cy.get("[option-id='167']").click();
    cy.get(".size > span:nth-of-type(2)").should("have.text", "S");
    cy.get("[option-label='Blue']").click();
    cy.get("input[id='qty']").clear().type("2").should("be.visible");
    cy.get("button[id='product-addtocart-button'] span").click();
  }

  verifiStatus() {
    cy.get("div[data-bind='html: $parent.prepareMessageForHtml(message.text)']")
      .should("be.visible")
      .should(
        "have.text",
        "\nYou added Olivia 1/4 Zip Light Jacket to your shopping cart."
      );
  }

  cWomanT() {
    cy.get("a[id='ui-id-4'] span:nth-child(2)").click();
  }

  cTops() {
    cy.get(
      "ol.items [href='https://magento.softwaretestingboard.com/women/tops-women.html']"
    )
      .should("have.text", "Tops")
      .click();
  }

  setItems1() {
    cy.get(".swatch-opt-1812 [option-id='167']")
      .should("be.visible")
      .should("have.text", "S")
      .click();
    cy.get(".swatch-opt-1812 [option-label='Yellow']").click();
    cy.get(
      "body > div:nth-child(4) > main:nth-child(4) > div:nth-child(4) > div:nth-child(1) > div:nth-child(4) > ol:nth-child(1) > li:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > button:nth-child(4) > span:nth-child(1)"
    ).should("not.be.visible");

    cy.get("[data-product-sku='WT09'] span").should("not.be.visible");
  }

  AsertDelete() {
    cy.get(".subtitle")
      .should("be.visible")
      .should("have.text", "You have no items in your shopping cart.");
  }
}
