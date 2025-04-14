/// <reference types="cypress"/>

describe('Cadastro de dispositivos', () => {

    it('Cadastrar um dispositivo especifico', () => {

        const dataAtual = new Date().toISOString().slice(0, 10)
    
        const body = {                
            "name": "Desafio do DOUGLAS",
            "data": {
                "year": 2023,
                "price": 999,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB",
                "owner": "Desafio Tecnico Douglas"
            }
        }

        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            failOnStatusCode: false,
            body: body
        }).as('postDeviceResult')

        //validações
        cy.get('@postDeviceResult').then((response) => {
            expect(response.status).equal(200)
            expect(response.body.id).not.empty
            expect(response.body.createdAt).not.empty
            expect(response.body.createdAt.slice(0, 10)).equal(dataAtual)
            expect(response.body.name).equal("Desafio do DOUGLAS")

        })
    })
})

