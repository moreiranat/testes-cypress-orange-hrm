// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('cypress-xpath');

Cypress.Commands.add('forceClick', {prevSubject: 'element'}, (subject, options) => {
    cy.wrap(subject).click({force: true});
  });

Cypress.Commands.add('username', (usuario) => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
    cy.get('input[name="username"]').should('be.enabled').click().type(usuario);
    
});

Cypress.Commands.add('password', (senha) => {
    cy.get('input[name="password"]').should('be.enabled').click().type(senha);
    cy.get('button[type="submit"]').should('have.class','oxd-button oxd-button--medium oxd-button--main orangehrm-login-button').click();
});

Cypress.Commands.add('abaAdmin', () => {
    cy.get('button[class="oxd-main-menu-item"]').click();
});

Cypress.Commands.add('searchUsername', () => {
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(1) > div > div:nth-child(2) > input').click();
});

Cypress.Commands.add('selectUserType', () => {
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(2) > div > div:nth-child(2) > div > div').click();
    cy.get('.oxd-select-dropdown > :nth-child(3)').click();

});
        
Cypress.Commands.add('name', () => {
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(3) > div > div:nth-child(2) > div > div > input').type('Anthony Nolan')
    cy.wait(2000);
    cy.get('.oxd-autocomplete-option').click();
});

Cypress.Commands.add('nameSelect', () => {
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(3) > div > div:nth-child(2) > div > div');
});

Cypress.Commands.add('Status', () => {
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(4) > div > div:nth-child(2) > div > div').click();
    cy.get('.oxd-select-dropdown > :nth-child(2)').click();
    cy.wait(1000);
});

