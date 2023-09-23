/// <reference types="cypress" />



describe ('Busca de usuários', () => {

    beforeEach(() => {  
        cy.username('Admin');
        cy.password('admin123')
    })

     it('Busca de usuário com dados válidos', () => {
        cy.searchUsername().type('Anthony.Nolan');
        cy.selectUserType()
        cy.name()
        cy.Status()
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true})
        cy.wait(3000)

    })

it('Busca de usuário com dados inválidos', () => {
    cy.searchUsername().type('Zé.da.Manga')
    cy.selectUserType()
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(3) > div > div:nth-child(2) > div > div > input').type('Zé da Manga')
    cy.wait(1000)
    cy.get('.oxd-autocomplete-option').click();
    cy.Status()
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true})
    cy.wait(1000)
    })
})


