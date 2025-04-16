import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let response;
let body = {};

Given("que eu possuo dados válidos para criar um post", () => {
  body = {
    title: "Novo Post",
    body: "Conteúdo do post",
    userId: 1
  };
});

When("eu envio uma requisição POST para {string}", (endpoint) => {
  cy.request("POST", endpoint, body).then((res) => {
    response = res;
  });
});

Then("o corpo da resposta deve conter o campo {string} com valor {string}", (campo, valor) => {
  expect(response.body).to.have.property(campo, valor);
});

Then("o status da resposta deve ser {int}", (statusCode) => {
  expect(response.status).to.eq(statusCode);
});