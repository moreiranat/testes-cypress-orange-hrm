// Implementação de Comandos para interagir com a Página de Login
const element = require('./LoginElements.js');

Cypress.Commands.add('typeUsername', (username) => {
    // Código que define o comportamento do comando personalizado
    cy.get(element.inputUsername).type(username);
});

Cypress.Commands.add('typePassword', (password) => {
    cy.get(element.inputPassword).type(password);
});

Cypress.Commands.add('clickLogin', () => {
    cy.get(element.buttonLogin).contains('Login').click();
});

Cypress.Commands.add('getUsuarioLogado', () => {
    cy.get(element.loggedInUser).should('contain', 'Paul Collings')
    //cy.get(element.loggedInUser).should('exist')
});

Cypress.Commands.add('getErrorMessage', () => {
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials')
});

