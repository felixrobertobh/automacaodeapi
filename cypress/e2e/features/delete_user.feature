Feature: Testar exclusão de dispositivos na API

  Scenario: Deletar um dispositivo existente
    Given que eu cadastrei um dispositivo válido
    When eu envio uma requisição DELETE para "/objects/{id}"
    Then o status da resposta deve ser 200
    And a mensagem de confirmação deve conter o ID do dispositivo deletado

  Scenario: Tentar deletar um dispositivo inexistente
    Given que o ID do dispositivo não existe
    When eu envio uma requisição DELETE para "/objects/{id_inexistente}"
    Then o status da resposta deve ser 404
    And a mensagem de erro deve indicar que o objeto não existe