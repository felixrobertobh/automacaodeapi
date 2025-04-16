Feature: Testar PUT na API

  Scenario: Atualizar um post existente
    Given que eu possuo dados atualizados para o post
    When eu envio uma requisição PUT para "/posts/1"
    Then o status da resposta deve ser 200
    And o corpo da resposta deve conter o campo "title" com valor "Post Atualizado"