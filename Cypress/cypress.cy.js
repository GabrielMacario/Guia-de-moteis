describe('Testes do Formulário de Cadastro', () => {
    beforeEach(() => {
      cy.visit('URL_DO_FORMULARIO');
    });
  
    it('Deve cadastrar com sucesso quando todos os campos forem preenchidos corretamente', () => {
      cy.get('#nome').type('Gabriel Macario');
      cy.get('#email').type('teste@example.com');
      cy.get('#confirmarEmail').type('teste@example.com');
      cy.get('#senha').type('Teste@123');
      cy.get('#botaoCadastrar').click();
      cy.contains('Cadastro realizado com sucesso!').should('be.visible');
    });
  
    it('Deve exibir erro ao tentar cadastrar com campos vazios', () => {
      cy.get('#botaoCadastrar').click();
      cy.contains('Preencha todos os campos obrigatórios').should('be.visible');
    });
  
    it('Deve exibir erro ao inserir uma senha fraca', () => {
      cy.get('#senha').type('12345');
      cy.get('#botaoCadastrar').click();
      cy.contains('A senha deve ter pelo menos 8 caracteres, incluindo uma maiúscula e um número').should('be.visible');
    });
  
    it('Deve exibir erro ao inserir e-mails diferentes', () => {
      cy.get('#email').type('teste@example.com');
      cy.get('#confirmarEmail').type('diferente@example.com');
      cy.get('#botaoCadastrar').click();
      cy.contains('Os e-mails devem ser iguais').should('be.visible');
    });
  });
  