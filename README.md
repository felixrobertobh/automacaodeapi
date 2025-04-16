# Projeto de Automação de Testes de API com Cypress + BDD

Este repositório contém um projeto de **automação de testes de API** utilizando o framework **Cypress** com apoio de **BDD (Behavior-Driven Development)**, onde os testes são escritos em **Gherkin** para facilitar a leitura, colaboração e rastreabilidade.

As automações cobrem testes nos métodos **GET, POST, PUT e DELETE**, usando a API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com) e uma API simulada no endpoint `/objects`.

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)
- [Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) (BDD)
- [Mochawesome](https://github.com/adamgruber/mochawesome) (evidências em HTML)
- JavaScript

---

## Estrutura do Projeto

```bash
automacaodeapi/
├── cypress/
│   ├── e2e/
│   │   ├── features/                 # Cenários em Gherkin
│   │   │   ├── get_user.feature
│   │   │   ├── post_user.feature
│   │   │   ├── put_user.feature
│   │   │   └── delete_user.feature
│   │   ├── step_definitions/        # Definições dos passos (Steps)
│   │   │   ├── get_user.steps.js
│   │   │   ├── post_user.steps.js
│   │   │   ├── put_user.steps.js
│   │   │   └── delete_user.steps.js
│   │   ├── get.api.cy.js            # Scripts Cypress tradicionais (backup/base)
│   │   ├── post.api.cy.js
│   │   ├── put.api.cy.js
│   │   └── delete.api.cy.js
│   ├── fixtures/
│   ├── reports/
│   │   └── html/                    # Relatórios em HTML (Mochawesome)
│   └── support/
│       └── e2e.js
├── cypress.config.js
├── package.json
└── README.md

---

## O que foi implementado

Foram criados cenários em BDD com validações automatizadas para os principais métodos HTTP da API:

| Método | Endpoint       | Descrição                                | Status |
|--------|----------------|------------------------------------------|--------|
| GET    | `/posts/1`     | Consulta de post por ID                  | OK     |
| POST   | `/posts`       | Criação de novo post                     | OK     |
| PUT    | `/posts/1`     | Atualização de um post existente         | OK     |
| DELETE | `/posts/1`     | Exclusão de post por ID                  | OK     |

 Validações aplicadas:
	•	Status de resposta: 200, 201, 400, 404
	•	Conteúdo do corpo da resposta (valores esperados)
	•	Exceções com dados inválidos ou ausentes
	•	Geração de evidência em HTML com sucesso ou falha do teste

---

## Evidências de Testes

Após a execução dos testes com `npx cypress run`, são geradas evidências automáticas em HTML com o **Mochawesome**.  
Você pode encontrá-las em:

```
cypress/reports/html/mochawesome.html
```

Abra este arquivo no navegador para visualizar os testes executados com status, tempo e validações realizadas.

---

## Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/felixrobertobh/automacaodeapi.git
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute os testes

- Com interface visual:

```bash
npx cypress open
```

- Para gerar evidência HTML automaticamente:

```bash
npx cypress run
```

---

## Autor

**Félix Samaritani**  
Especialista em Qualidade de Software • QA Sênior  
[LinkedIn](https://www.linkedin.com/in/felixrobertobh)

---