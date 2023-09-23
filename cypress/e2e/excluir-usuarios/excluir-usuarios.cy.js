/// <reference types="cypress" />

describe('Cenário Excluir Usuários', () => {
  beforeEach(() => {
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    )
    cy
      .get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
      .type('Admin')

    cy
      .get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
      .type('admin123')

    cy.get('.oxd-button').click()

    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers'
    )
  })

  it('Excluir Usuário de forma individual', () => {
    cy
      .get(
        ':nth-child(39) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1)'
      )
      .click({ force: true })

    cy.get('.oxd-button--label-danger').click()
  })

  it('Excluir dois ou mais Usuários', () => {
    cy
      .get(
        ':nth-child(38) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon'
      )
      .click({ force: true })

    cy
      .get(
        ':nth-child(39) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon'
      )
      .click({ force: true })

    cy
      .get('.orangehrm-horizontal-padding > div > .oxd-button')
      .click({ force: true })

    cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click()
  })

  it(
    'Exibir uma mensagem de erro caso não consiga excluir Usuário',
    () => {
      cy
        .get(
          ':nth-child(2) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon'
        )
        .click({ force: true })

      cy.get('.oxd-toast--error').should('contain', 'Error Cannot be deleted')
    }
  )
})
