import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let response;
let updateBody = {};

Given("que eu possuo dados atualizados para o post", () => {
  updateBody = {
    id: 1,
    title: "Post Atualizado",
    body: "Novo conteúdo",
    userId: 1
  };
});

When("eu envio uma requisição PUT para {string}", (endpoint) => {
  cy.request("PUT", endpoint, updateBody).then((res) => {
    response = res;
  });
});

Then("o corpo da resposta deve conter o campo {string} com valor {string}", (campo, valor) => {
  expect(response.body).to.have.property(campo, valor);
});

Then("o status da resposta deve ser {int}", (statusCode) => {
  expect(response.status).to.eq(statusCode);
});