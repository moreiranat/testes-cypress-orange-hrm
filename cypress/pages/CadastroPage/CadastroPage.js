const element = require('./CadastroElements.js');

Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(element.inputUsername).type(username);
    cy.get(element.inputPassword).type(password);
    cy.get(element.buttonLogin).contains('Login').click();
});

Cypress.Commands.add('clickAdmin', () => {
    cy.get(element.menuAdmin).contains('Admin').click();
});

Cypress.Commands.add('clickAddUser', () => {
    cy.get(element.buttonAddUser).contains('Add').click();
});

Cypress.Commands.add('typeUserRole', () => {
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div.oxd-select-text-input').should('be.visible').click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()
});

Cypress.Commands.add('typeEmployeeName', () => {
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > div > div:nth-child(2) > div > div').should('be.visible').type('Peter Mac Anderson {downArrow}{enter}',{delay: 500}).click()
    cy.get('.oxd-autocomplete-option').should('be.visible').click()
});

Cypress.Commands.add('typeStatus', () => {
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(3) > div > div:nth-child(2) > div > div > div.oxd-select-text-input').should('be.visible').click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()
});

Cypress.Commands.add('typeUsernameRegister', () => {
    cy.get(element.inputUsernameRegister).type('admin');
});

Cypress.Commands.add('typePasswordRegister', () => {
    cy.get(element.inputPasswordRegister).type('admin123');
});

Cypress.Commands.add('typeConfirmPassword', () => {
    cy.get(element.inputConfirmPasswordRegister).type('admin123');
});

Cypress.Commands.add('clickSave', () => {
    cy.get(element.buttonSave).contains('Save').click();
});

Cypress.Commands.add('getErrorRegister', () => {
    cy.get('.oxd-input-group > .oxd-text').should('contain', 'Already exists')
});
  