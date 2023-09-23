/// <reference types="cypress" />

// Welcome to Cypress
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Cenário Login de Usuários', () => {
  
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
  });

  
  it('Realizar o login com sucesso', () => {
    
  });

  // Teste para realizar o login com usuário e senha incorretos
  it('Exibir uma mensagem de erro ao inserir credenciais incorretas', () => {
    
  });
});