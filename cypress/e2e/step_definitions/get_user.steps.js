import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let response;

Given("que o ID do usuário é {int}", (id) => {
  Cypress.env("userId", id);
});

When("eu faço uma requisição GET para {string}", (endpoint) => {
  cy.request(endpoint).then((res) => {
    response = res;
  });
});

Then("o status da resposta deve ser {int}", (statusCode) => {
  expect(response.status).to.eq(statusCode);
});

Then("o corpo deve conter o campo {string} com valor {int}", (campo, valor) => {
  expect(response.body).to.have.property(campo, valor);
});