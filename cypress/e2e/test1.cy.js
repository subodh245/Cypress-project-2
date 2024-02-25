/// <reference types="cypress" />

it("Visits Google", function () {
  cy.visit("https://google.com");
  cy.get(".gLFyf").type("Automation Step by Step{Enter}");
  //   cy.contains("Google Search").click();
  cy.contains("Videos").click();
});
