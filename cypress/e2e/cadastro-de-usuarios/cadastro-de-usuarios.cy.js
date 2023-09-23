.cypress.io/introduction-to-cypress

//import {fazerLogin} from '../support/commands'
import '../../pages/CadastroPage/CadastroPage.js'


describe('Cenário Cadastro de Usuários', () => {

  beforeEach(() => {
    
    
    cy.login('Admin', 'admin123');
  });

  it('Validar Registro de Usuário com username que já existe', () => {

    cy.clickAdmin();

    cy.clickAddUser();

    cy.typeUserRole();

    cy.typeEmployeeName();

    cy.typeStatus();

    cy.typeUsernameRegister();

    cy.typePasswordRegister();

    cy.typeConfirmPassword();

    cy.clickSave();

    cy.getErrorRegister().contains('Already exists')
    
    cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');
    
  });
});
  