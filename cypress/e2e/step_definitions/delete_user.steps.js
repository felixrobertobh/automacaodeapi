import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

let response;

When("eu envio uma requisição DELETE para {string}", (endpoint) => {
  cy.request("DELETE", endpoint).then((res) => {
    response = res;
  });
});

Then("o status da resposta deve ser {int}", (statusCode) => {
  expect(response.status).to.eq(statusCode);
});