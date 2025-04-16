Feature: Testar GET da API de usuários

  Scenario: Buscar usuário por ID
    Given que o ID do usuário é 1
    When eu faço uma requisição GET para "/users/1"
    Then o status da resposta deve ser 200
    And o corpo deve conter o campo "id" com valor 1