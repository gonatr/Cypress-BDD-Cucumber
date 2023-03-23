export class LoginPage {
  navigate(baseUrl) {
    cy.visit(baseUrl);
    cy.wait(300);
    cy.url().should("eq", baseUrl);
  }

  signPage() {
    cy.get("div[class='panel header'] li[data-label='or'] a").click();
    cy.url().should("include", "account/login");
    cy.contains("Customer Login")
      .should("be.visible")
      .should("have.text", "Customer Login");
  }

  inputuser(username) {
    cy.get("input[name='login[username]'")
      .should("be.visible")
      .type(username)
      .should("have.value", username);
  }

  inputpassword(password) {
    cy.get("input[name='login[password]'")
      .should("be.visible")
      .type(password)
      .should("have.value", password);
  }

  btnSignIn() {
    cy.get(
      "fieldset[class='fieldset login'] div[class='primary'] span"
    ).click();
  }
}
