/// <reference types="cypress"/>

describe('Alterar um dispositivos', () => {

    it('Alterar um dispositivo', () => {

        const body_cadastro = {                
            "name": "Desafio do DOUGLAS",
            "data": {
                "year": 2023,
                "price": 999,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB",
                "owner": "Desafio Tecnico Douglas"
            }
        }

        const body_update = {                
            "name": "Desafio do DOUGLAS - UPDATE",
            "data": {
                "year": 2023,
                "price": 999,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB",
                "owner": "Desafio Tecnico API Douglas"
            }
        }

        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            failOnStatusCode: false,
            body: body_cadastro
        }).as('postDeviceResult')

        // pegando o result do cadastro
        // para pegar o id
        cy.get('@postDeviceResult').then((response_post) => {
            expect(response_post.status).equal(200)
            expect(response_post.body.name).equal(body_cadastro.name)
        
            // fazer o PUT
            cy.request({
                method: 'PUT',
                url: `https://api.restful-api.dev/objects/${response_post.body.id}`,
                failOnStatusCode: false,
                body: body_update
            }).as('putDeviceResult')

            //validações do PUT
            cy.get('@putDeviceResult').then((response_put) => {
                expect(response_put.status).equal(200)
                expect(response_put.body.name).equal(body_update.name)
            })
        })

    })
})