/// <reference types="cypress"/>

describe('Funcionalidade: login', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    it('Deve fazer login com sucesso', () => {

        cy.get('#username').type('testecerto@gmail.com')
        cy.get('#password').type('testeicerto/')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, testecerto (não é testecerto? Sair)')
    })

    it('Deve exibir mensagem de erro', () => {
        cy.get('#username').type('testeerrado@gmail.com')
        cy.get('#password').type('testeicerto/')
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    })
    it('Deve exibir maensagem de erro', () => {
        cy.get('#username').type('testecerto@gmail.com')
        cy.get('#password').type('testeierrado/')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail testecerto@gmail.com está incorreta. Perdeu a senha?')
    })
})  