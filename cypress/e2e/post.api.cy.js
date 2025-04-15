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
            url: '/objects',
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

    it('Cadastrar um dispositivo sem dados', () => {

    cy.request({
        method: 'POST',
        url: '/objects',
        failOnStatusCode: false,
        body: ''
    }).as('postDeviceResult')

    //validações
    cy.get('@postDeviceResult').then((response) => {
        expect(response.status).equal(400)
        expect(response.body.error)
            .equal("400 Bad Request. If you are trying to create or update the data, potential issue is that you are sending incorrect body json or it is missing at all.")

    })
})


