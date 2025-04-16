Feature: Testar criação de dispositivos na API

  Scenario: Criar um novo dispositivo com dados válidos
    Given que eu possuo os dados corretos de um dispositivo
    When eu envio uma requisição POST para "/objects"
    Then o status da resposta deve ser 200
    And a resposta deve conter a data de criação atual
    And o campo "name" deve conter "Desafio do DOUGLAS"

  Scenario: Tentar cadastrar sem dados
    Given que eu não envio dados no corpo da requisição
    When eu envio uma requisição POST para "/objects"
    Then o status da resposta deve ser 400
    And a mensagem de erro deve conter "400 Bad Request"