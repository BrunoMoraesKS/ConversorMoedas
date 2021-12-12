/// <reference path="../support/index.d.ts" />

describe("Run successful conversion", () => {
  it("with Real as currency", () => {
    cy.visit("/");

    cy.get("input[name=value]").type("100.20");

    cy.get("select[name=currency]").select("Real");

    cy.get("button").contains("Converter").click();

    cy.contains("Data da Consulta");

    cy.contains("Dólar Americano");

    cy.contains("Euro");
  });

  it("with Dolar as currency", () => {
    cy.visit("/");

    cy.get("input[name=value]").type("2000.56");

    cy.get("select[name=currency]").select("Dólar Americano");

    cy.get("button").contains("Converter").click();

    cy.contains("Data da Consulta");

    cy.contains("Real Brasileiro");

    cy.contains("Euro");
  });

  it("with Euro as currency", () => {
    cy.visit("/");

    cy.get("input[name=value]").type("17050.72");

    cy.get("select[name=currency]").select("Euro");

    cy.get("button").contains("Converter").click();

    cy.contains("Data da Consulta");

    cy.contains("Real Brasileiro");

    cy.contains("Dólar Americano");
  });
});

describe("Run unsuccessful conversion", () => {
  it("with no value", () => {
    cy.visit("/");

    cy.get("select[name=currency]").select("Real");

    cy.get("button").contains("Converter").click();

    cy.contains("Digite o Valor.");
  });
  it("with no currency", () => {
    cy.visit("/");

    cy.get("input[name=value]").type("150.21");

    cy.get("button").contains("Converter").click();

    cy.contains("Selecione a moeda.");
  });
  it("without anything", () => {
    cy.visit("/");

    cy.get("button").contains("Converter").click();

    cy.contains("Digite o Valor.");

    cy.contains("Selecione a moeda.");
  });
});

export {};
