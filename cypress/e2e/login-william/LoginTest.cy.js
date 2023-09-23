
import {fazerLogin} from '../../support/commands'


describe('Teste Plataforma OrangeHRM', () => {

  beforeEach(function(){
    
  })

    it('Login com sucesso', () => {
        cy.fazerLogin();
    })
    
    it('Cadastrar usuário com sucesso', () => {
      cy.fazerLogin();
      
      //Clicar no menu Admin 
      cy.menuAdmin();

      //Validar titulo da página Admin - User Management
      cy.validarTituloPageAdmin();
      //Clicar no botão menu Admin
      cy.botaoMenuAdmin();
      
     //Clicar para Adicinar Novo Usuário
      cy.botaoAdicionarUsuario();
     
      //Preencher o campo qual tipo de usuário será cadastrado
      cy.UseRule();
     
     //Inserir Usuario responsável pelo cadastro do usuário
      cy.EmployeeName();

     //Clicar no lista de escolha de status para o cadastro
     cy.StatusUsuario();

     //Inserir Username para o cadastro de usuário
     cy.Username();

     //Inserir a senha para cadastro do usuário
     cy.Password();

     //Inserir a confirmação da senha desejada para o usuário
     cy.ConfirmPassword();
     
     //Clicar no botão de salvar cadastro do usuário
     cy.SalvarCadastro();
    
     //Validar a mensagem de cadastro realizado com sucesso
     cy.cadastroComSucesso();
      
    })

  })
  