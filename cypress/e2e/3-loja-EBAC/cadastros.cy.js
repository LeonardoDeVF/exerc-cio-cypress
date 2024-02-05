/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })
    
    it('Deve completar o cadastro com sucesso', () => {    
        var nome = faker.person.firstName()
        
        cy.get('#reg_email').type(faker.internet.email(nome))
        cy.get('#reg_password').type('testeicerto/')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('exist')
    });
});