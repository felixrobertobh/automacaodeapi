/// <reference types="cypress"/>

describe('Deletar um dispositivos', () => {

    it('Deletar um dispositivo', () => {
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

        // pegando o result do cadastro
        // para pegar o id
        cy.get('@postDeviceResult').then((response_post) => {
            expect(response_post.status).equal(200)

            cy.request({
                method: 'DELETE',
                url: `https://api.restful-api.dev/objects/${response_post.body.id}`,
                failOnStatusCode: false,
            }).as('deleteDeviceResult')

        //validações do delete
        cy.get('@deleteDeviceResult').then((response_del) => {
            expect(response_del.status).equal(200)
            expect(response_del.body.message)
                .equal(`Object with id = ${response_post.body.id} has been deleted.`)
        })
})



    })
})