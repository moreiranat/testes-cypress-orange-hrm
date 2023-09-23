
Cypress.Commands.add('fazerLogin', () => {
    
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

    cy.get('.oxd-button').click()
    
    //valida se está na página de Dashboard
    cy.contains('Dashboard').should('be.visible');

  });
  
Cypress.Commands.add('menuAdmin', () => {

    cy.get(':nth-child(1) > .oxd-main-menu-item').click()

});

Cypress.Commands.add('validarTituloPageAdmin', () => {

    cy.get('.oxd-topbar-header-title').should('contain', 'User Management')

});

Cypress.Commands.add('botaoMenuAdmin', () => {

    cy.get('.orangehrm-header-container > .oxd-button').click()

});

Cypress.Commands.add('botaoAdicionarUsuario', () => {

    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div.oxd-select-text-input').should('be.visible').click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()

});

Cypress.Commands.add('UseRule', () => {

    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div.oxd-select-text-input').should('be.visible').click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()

});


Cypress.Commands.add('EmployeeName', () => {

    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > div > div:nth-child(2) > div > div').should('be.visible').type('Paul Collings {downArrow}{enter}',{delay: 500}).click()
    cy.get('.oxd-autocomplete-option').should('be.visible').click()

});

Cypress.Commands.add('StatusUsuario', () => {

    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(3) > div > div:nth-child(2) > div > div > div.oxd-select-text-input').should('be.visible').click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()

});

Cypress.Commands.add('Username', () => {

    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(4) > div > div:nth-child(2) > input').type('william10')

});

Cypress.Commands.add('Password', () => {

    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row.user-password-row > div > div.oxd-grid-item.oxd-grid-item--gutters.user-password-cell > div > div:nth-child(2) > input').type('minhaSenha123');

});

Cypress.Commands.add('ConfirmPassword', () => {

    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row.user-password-row > div > div:nth-child(2) > div > div:nth-child(2) > input').type('minhaSenha123');

});

Cypress.Commands.add('SalvarCadastro', () => {

    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-actions > button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space').click()

});

Cypress.Commands.add('cadastroComSucesso', () => {

    cy.get('.oxd-toast').should('contain', 'Success')

});
