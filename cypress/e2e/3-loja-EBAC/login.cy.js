/// <reference types="cypress"/>

describe('Funcionalidade: login', () => {

    it('Deve fazer login com sucesso', () => {

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('testecerto@gmail.com')
        cy.get('#password').type('testeicerto/')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, testecerto (não é testecerto? Sair)')
    })

})