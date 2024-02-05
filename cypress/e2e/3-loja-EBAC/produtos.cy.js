/// <reference types="cypress"/>


describe('Funcionalidade: produtos', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos')
    });

    it('Deve selecionar um produto', () => {
        cy.get('.product-block').first().click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type('2')
        cy.get('.single_add_to_cart_button').click()

        cy.get('.single_add_to_cart_button').should('exist')
    });
});