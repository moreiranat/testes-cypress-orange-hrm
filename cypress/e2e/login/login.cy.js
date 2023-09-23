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

//Implementação dos testes da página de Login

import '../../pages/LoginPage/LoginPage.js'

describe('Cenário Login de Usuários', () => {
  // Antes de cada teste, visitar a página de login
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
 
  });

  // Teste para realizar o login com usuário e senha corretos
  it('Realizar o login com sucesso', () => {
    
    cy.typeUsername('Admin');

    cy.typePassword('admin123');

    cy.clickLogin();

    cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    cy.getUsuarioLogado();
    
  });

  // Teste para realizar o login com usuário e senha incorretos
  it('Exibir uma mensagem de erro ao inserir credenciais incorretas', () => {
    
    cy.typeUsername('fulano');
    
    cy.typePassword('senha-incorreta');

    cy.clickLogin();

    cy.getErrorMessage();
    
  }); 
});