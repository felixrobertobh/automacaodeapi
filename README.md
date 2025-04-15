# Projeto de Automação de Testes de API com Cypress

Este repositório contém um projeto de automação de testes de API desenvolvido com **Cypress**.  
O objetivo é validar requisições HTTP (GET, POST, PUT, DELETE) organizados, reutilizáveis e de fácil manutenção.
[https://api.restful-api.dev/objects]
Essa API permite realizar operações CRUD completas sem autenticação.

---

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)
- JavaScript
- Mocha (test runner nativo do Cypress)
- VS Code

---

## 📁 Estrutura do Projeto

automacaodeapi/
├── cypress/
│   ├── e2e/
│   │   ├── api_testes/
│   │   │   ├── get.api.cy.js
│   │   │   ├── post.api.cy.js
│   │   │   ├── put.api.cy.js
│   │   │   └── delete.api.cy.js
│   ├── fixtures/
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── package.json
└── README.md

---

## O que foi feito neste projeto

- **POST**: Testes de criação de objetos com dados válidos e inválidos.
- **GET**: Validação da consulta de objetos e análise da resposta.
- **PUT**: Atualização parcial de objetos.
- **DELETE**: Exclusão de objetos por ID.
- **Exceções**: Testes com dados incompletos, inválidos ou com falha esperada.

---

## Como executar o projeto

- Direcionar até a pasta do projeto na maquina

bash ou cmd
git clone https://github.com/felixrobertobh/automacaodeapi.git
npm install
npx cypress open ou npx cypress run


- Felix Samaritani